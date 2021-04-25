const isEmptyKeys = require('../../oauth/check-keys')
const assert = require('assert')

describe('Errors test', function () {
  it('Should return a throw with an Array', function () {
    assert.throws(isEmptyKeys, Array)
  })
})

describe('All keys are valid', function () {
  before('Load .env vars', function () {
    require('dotenv').config({
      path: '../../.env'
    })
  })
  it('Should return nothing', function () {
    isEmptyKeys()
  })
})
