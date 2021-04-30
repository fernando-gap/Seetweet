const create = require('../../../lib/create')
const request = require('../../../oauth/oauth')
const { v4 } = require('uuid')
const bp = require('body-parser')
const hbs = require('express-handlebars')
const express = require('express')
const app = express()

app.use(bp.urlencoded({ 
  extended: true, 
  type: 'application/x-www-form-urlencoded',
  limit: 200,
  parameterLimit: 5*2
}))

const dir = process.env.PWD.replace(/routes.$*/, '')

app.engine('hbs', hbs({ extname: 'hbs' }))
app.set('view engine', 'hbs')

app.post('/tweets/result', async (req, res) => {
  const url = await create(req.body)
  const oauth = await request(url)

  if (oauth instanceof TwitterError) {
    res.render('error/http-error', {
      layout: false,
      code: oauth.status,
      message: oauth.message,
      description: 'Access tokens are invalid, please, check them out!'
    })
  } 

  const tweets = await engine(oauth)
  const uuid = v4()

  await fsp.mkdir(`${dir}/views/tweets/${uuid}`)

  await fsp.writeFile(`${dir}/views/tweets/${uuid}/index.hbs`, tweets, err => {
    if (err) {
      res.render('error/http-error', {
        layout: false,
        code: 501,
        description: 'Unable to load request'
      })
      res.end()
    }

    tweetsPage(req, res, uuid)
  })
})

function tweetsPage(req, res, uuid) {
  res.redirect(`/search/tweets/result/${uuid}`)

  app.get(`/search/tweets/result/${uuid}`, (req, res) => {
    res.render(`tweets/${uuid}`)
  }) 
}

module.exports = app
