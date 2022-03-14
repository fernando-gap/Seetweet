const create = require('../../../lib')
const TwitterError = require('../../../oauth/twitter-error')
const request = require('../../../oauth/oauth')
const { v4 } = require('uuid')
const fsp = require('fs/promises')

module.exports = function (router) {
  // absolute path: find the right files
  const dir = process.env.PWD.replace(/routes.*$/, '')

  /**
   * Start the request to the Twitter endpoint.
   */
  router.post('/search/tweets/result', async (req, res, next) => {
    try {
      const url = await create(req.body)
      const tweets = await request(url)
      const uuid = v4()

      await fsp.writeFile(`${dir}/tweets/${uuid}.json`, JSON.stringify(tweets, null, 2))
      res.redirect(`/search/tweets/result/${uuid}`)
      // return tweetsPage(res, uuid, next, dir)
    } catch (error) {
      next(error)
    }
  })

  /**
   * Look for created requests
   */
  router.get('/search/tweets/result/:uuid', async (req, res, next) => {
    try {
      const tweets = await fsp.readFile(`${dir}/tweets/${req.params.uuid}.json`)
      res.render('result/result', JSON.parse(tweets))
    } catch (error) {
      next(new TwitterError('Not Found', 404))
    }
  })
}
