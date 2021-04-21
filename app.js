const hbs = require('express-handlebars');
const express = require('express');
// global object
const app = express();


// routes
app.use(require('./routes'));

// load frontend
app.use('/search/tweets', express.static('./frontend'));

app.listen(8080, () => {
	console.log('Server started! host::%s', 'http://localhost:8080');
});
