const hbs = require('express-handlebars');
const express = require('express');

// global object
const app = express();

// routes
app.use(require('./routes'));

// load search/tweets frontend
// app.use('/search/tweets', express.static('./frontend/search/'));
app.use('/search/tweets', express.static('./frontend/search/'));

// load dependencies for project
app.use('/code', express.static('./frontend/'));

app.listen(8080, () => {
	console.log('Server started! host::%s', 'http://localhost:8080');
});
