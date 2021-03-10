// username model or table is imported to work with
const Username = require('../models/username');

// route for specific path is exported
exports.getUserForm = (req, res, next) => {

    //render pages/form.ejs page
    res.render('pages/form', {

        pageTitle: 'User Form',   
        path: '/form'
    });
};

exports.postAddUsername = (req, res, next) => {
    
    //userName is the form name/id/for (name)
    const username = req.body.userName;
    console.log(username);

    // insert username in user domain into imported username table
    Username.create({ user: username })
        .then( result => { 
            // if resolved redirected at / path
            res.redirect('/'); 
        })
        .catch( err => {
            // if rejected print error
            console.log(err);
        }); 
};