
const express = require('express')
const path = require('path');

// ========================================================
// ========================================================
var routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ========================================================
// ========================================================

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req, res) {
  res.render('error');
});

// ========================================================
// ========================================================

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
