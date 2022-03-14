module.exports = function (router) {
  /**
   * When the client go to `/`
   * redirects to the `/search/tweets`
   */

  router.get('/', (req, res) => {
    res.redirect('/search/')
  })

  /**
   * All routes for filters
   * @variable {String} mainFiles `Path to find files`
   */

  const mainFiles = process.env.PWD.replace(/routes.*$/, '')

  router.get('/search/tweets', (req, res) => {
    res.sendFile(`${mainFiles}/frontend/search/index.html`)
  })
}
