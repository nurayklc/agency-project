const express = require('express');
const ejs = require('ejs');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app(express.static('public'));
/* app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 */
app.get('/', function (req, res) {
  res.send('Hello');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running port ${port}`);
});