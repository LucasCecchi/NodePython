
// framework used for the webpage
const express = require('express');
const path = require('path');
// module to faciliate simple parsing of get and post request parameters
const bodyParser = require('body-parser');
// access to the file system, we currently don't need this module
// const fs = require('fs');

// module for writing log files
const logger = require('morgan');
// ========================================================
// ========================================================
// specify where the webpage routes can be found
var routes = require('./routes');
// instantiate the express object
const app = express();

// specify where the pug engine should search for files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set path for style sheets and javascript files to be used for client side operations
app.use(express.static(path.join(__dirname, 'public')));

// accept urlencoded data up to 10 kb
app.use(bodyParser.urlencoded({limit:'10kb', extended: false}));

// ========================================================
// ========================================================
// set the logging preferences

// logging preferences when running the site, records useful information
// app.use(logger(':date[clf] :user-agent :method :url :status : response-time ms',
//   {
//     stream: fs.createWriteStream(path.join(__dirname, 'var/access.log'))
//   })
// )

// for development, it is useful to use the extensive messages supported by the 'dev' pre-setting
app.use(logger('dev'));

// ========================================================
// ========================================================

// apply routes to express framework
app.use('/', routes);

// if an error occors, return the error page to the client
app.use(function(req, res) {
  res.render('error');
});

// ========================================================
// ========================================================
// launch the webserver on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
})
