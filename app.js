const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');

const app = express();

//CONNECT DB

mongoose
  .connect('mongodb://127.0.0.1/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTED Successfuly');
  });

// TEMPLE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//ROUTE
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/category', categoryRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App stated on port ${port}`);
});
