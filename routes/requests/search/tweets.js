const create = require('../../../lib')
const TwitterError = require('../../../oauth/twitter-error')
const request = require('../../../oauth/oauth')
const { basename } = require('path')
const { v4 } = require('uuid')
const fsp = require('fs/promises')
const bp = require('body-parser')
const hbs = require('express-handlebars')
const express = require('express')
const app = express()

app.use(bp.urlencoded({ 
  extended: true, 
  type: 'application/x-www-form-urlencoded',
  limit: 300,
  parameterLimit: 5*2
}))

const dir = process.env.PWD.replace(/routes.*$/, '')

app.engine('hbs', hbs({ 
  extname: 'hbs',
  defaultLayout: 'main.hbs',
  helpers: {
    hd: function(string) {
      return string.replace('normal', '400x400')
    }
  }
}))
app.set('view engine', 'hbs')

app.post('/tweets/result', async (req, res, next) => {
  const url = await create(req.body)
  const tweets = await request(url)
  console.log(JSON.stringify(tweets, null, 2))
  
   if (tweets instanceof TwitterError) {
     next(tweets); return // error in oauth req
   } 

  const uuid = v4()

  await fsp.writeFile(`${dir}/views/tweets/${uuid}.json`, JSON.stringify(tweets, null, 2))
  res.redirect(`/search/tweets/result/${uuid}`)
  return tweetsPage(res, uuid)
})

async function tweetsPage(res, uuid, next) {
    try {
      const tweets = await fsp.readFile(`${dir}/views/tweets/${uuid}.json`)
      res.render(`result/result`, JSON.parse(tweets))
    } catch (error) {
      next(new TwitterError('Not Found', 404))
    }
}

app.get(/tweets\/result\/*/, async (req, res, next) => {
  const uuid = basename(req.url)
  return tweetsPage(res, uuid, next)
})

module.exports = app
