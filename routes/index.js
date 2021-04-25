const router = require('express').Router()

// configure routes
router.use('/', require('./requests/search/filter'))
router.use('/search', require('./requests/search/tweets'))

module.exports = router
