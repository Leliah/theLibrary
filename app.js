//DEPENDENCIES
const express = require('express');
const cors = require('cors');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json()); //Parse incoming JSON
app.use(cors());

//LANDING PAGE
app.get('/', (req, res) => {
    res.send("Welcome to The Library. Let's checkout some books.");
});

//BOOK TITLES ROUTE
// const bookTitlesController = require('./controllers/bookTitlesControllers');
// app.use('/books', bookTitlesController);

//404 PAGE
app.get('*', (req, res) => {
    res.status(404).send('Page Not Found.');
});
//EXPORT
module.exports = app;