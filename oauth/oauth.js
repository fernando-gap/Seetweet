const { OAuth } = require('oauth')
const isEmptyTokens = require('./check-keys')
const { promisify } = require('util')
const TwitterError = require('./twitter-error.js')

async function request (URI) {
  try {
    isEmptyTokens()
  } catch (invalidTokens) {
    throw new TwitterError('Bad Request', 400, invalidTokens)
  }

  const oauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A', null, 'HMAC-SHA1'
  )

  const get = promisify(oauth.get.bind(oauth))

  const responseData = await get(
    URI,
    process.env.ACCESS_KEY,
    process.env.ACCESS_TOKEN_SECRET
  )

  return JSON.parse(responseData)
}

module.exports = request
