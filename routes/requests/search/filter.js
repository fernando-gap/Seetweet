const express = require('express')
const app = express()

/**
 * When the client go to `/`
 * redirects to the `/search/tweets`
 */

app.get('/', (req, res) => {
  res.redirect('/search/tweets')
})

/**
 * All routes for filters
 * @variable {String} mainFiles `Path to find files`
 */

const mainFiles = process.env.PWD.replace(/routes.*$/, '')

app.get('/search/tweets', (req, res) => {
  res.sendFile(`${mainFiles}/frontend/search/index.html`)
})

module.exports = app
