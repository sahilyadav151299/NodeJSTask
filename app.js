//core & installed modules imported
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// routes & controller
const errorController = require('./controllers/errorController');
const greetRoutes = require('./routes/greet');
const formRoutes = require('./routes/form');
const userRoutes = require('./routes/users');

// database & table (model) imported to use to define associations
const sequelizeNodeJSDB = require('./util/database');
const Usersnames = require('./models/username');

// server or app created
const app = express();

// template engine & dir configuration, find html pages in views
app.set('view engine', 'ejs');
app.set('views', 'views');

// parses the text as URL encoded data "Form data via post method results in object containing key-value"
app.use(bodyParser.urlencoded({ extended: false }));

// css files configuration
app.use(express.static(path.join(__dirname, 'public')));

// use all imported routes
app.use(greetRoutes);
app.use(formRoutes);
app.use(userRoutes);
app.use(errorController.get404);

// sync all models (usernames) to the db (sequelizeNodeJSDB)
// by creating appropriate table
sequelizeNodeJSDB
    .sync()     
    .then(result => { 
        // server started
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });


