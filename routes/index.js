const router = require('express').Router();

// configure routes
router.use('/', require('./requests/search/redirect'));
router.use('/search', require('./requests/search/tweets'));

module.exports = router;
