require('dotenv').config();

const hbs = require('express-handlebars')
const { join } = require('path')

// main
const express = require('express')
const app = express()

// parse urlencoded
app.use(express.urlencoded({
  extended: true,
  type: 'application/x-www-form-urlencoded',
  limit: 300,
  parameterLimit: 5 * 2
}))

// set template engine.
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs',
  helpers: {
    hd: function (string) {
      return string.replace('normal', '400x400')
    }
  }
}))

app.set('view engine', 'hbs')

// main application routes
app.use(require(join(__dirname, '/routes')))

// load all user interfaces.
app.use('/', express.static(
  join(__dirname, 'public')))

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started! host: %s', 'http://localhost:8080')
})

// handle 404 errors
app.use(function (req, res, next) {
  res.status(404)
  res.render('error/http', {
    layout: 'main.hbs',
    code: 404,
    error: 'Not Found'
  })
})

// handle custom errors
app.use(function (err, req, res, next) {
  res.status(err.status || 405)
  res.render('error/http', {
    layout: 'main.hbs',
    code: err.status || 405,
    error: err.message || 'Method not allowed',
    reason: err.reason || null
  })
})
