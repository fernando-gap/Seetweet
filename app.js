const express = require('express')
const { join } = require('path')

// global object
const app = express()

// routes
app.use(require(join(__dirname, '/routes')))

// load search/tweets frontend
app.use('/search/tweets', express.static(
  join(__dirname, '/frontend/search/'
)))

// load dependencies for project
app.use('/code', express.static(join(__dirname, '/frontend/')))

app.listen(8080, () => {
  console.log('Server started! host::%s', 'http://localhost:8080')
})
