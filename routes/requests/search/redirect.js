const router = require('express').Router();

/**
 * When the client go to `/`
 * redirects to the search page
 */

router.get('/', (req, res) => {
	res.redirect('/search/tweets');
});

module.exports = router;
