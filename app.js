const express = require('express')
const { join } = require('path')

// global object
const app = express()

// routes
app.use(require(join(__dirname, '/routes')))
app.use(function(err, req, res, next) {
  res.status(err.status || 405)
  res.render('error/http', {
    layout: 'main.hbs',
    code: err.status || 405,
    error: err.message || 'Method not allowed'
  })
  console.log(err)
})

// load search/tweets frontend
app.use('/search/tweets', express.static(
  join(__dirname, '/frontend/search/'
)))

// load dependencies for project
app.use('/code', express.static(join(__dirname, '/frontend/')))

app.listen(8080, () => {
  console.log('Server started! host::%s', 'http://localhost:8080')
})


// handle 404 errors
app.use(function(req, res, next) {
  res.status(404)
  res.render('error/http', { 
    layout: 'main.hbs',
    code: 404,
    error: 'Not Found'
  })
});
