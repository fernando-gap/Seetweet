const requestOAuth = require('../../oauth/oauth')
const TwitterError = require('../../oauth/twitter-error')
const assert = require('assert/strict')

describe('Test throw from isEmptyKeys', function () {
  it('Returns an instance of TwitterError', async function () {
    assert(await requestOAuth(null) instanceof TwitterError)
  })
  it('Should return an Array', async function () {
    const arr = await requestOAuth(null)
    assert(Array.isArray(arr.message))
  })
})

describe('Make a request', function () {
  before('Load .env vars', async function () {
    require('dotenv').config({
      path: '../../.env'
    })
  })
  it('Returns JSON format', async function () {
    this.timeout(5000)
    const data = await requestOAuth(
      'https://api.twitter.com/1.1/search/tweets.json?q=twitterDev&count=1'
    )
    assert.equal(typeof data, 'object')
  })
})
