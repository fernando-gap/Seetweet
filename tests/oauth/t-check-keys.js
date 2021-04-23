const isEmptyKeys = require('../../oauth/check-keys')
const assert = require('assert')

describe('Test Errors whether there are a invalid key', function () {
  it('Check Consumer Key', function () {
    assert.throws(isEmptyKeys, Error)
  })
})

describe('Test if everything goes fine', function () {
  it('Valid keys', function () {
    // load env vars
    require('dotenv').config({
      path: '../../.env'
    })

    isEmptyKeys()
  })
})
