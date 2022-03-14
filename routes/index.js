const router = require('express').Router()

// configure routes
require('./requests/search/filter.js')(router)
require('./requests/search/tweets')(router)

module.exports = router
