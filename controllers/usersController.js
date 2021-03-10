// username model or table is imported to work with
const Username = require('../models/username');

// exported function to use in router.js
exports.getUsername = (req, res, next) => {

    // findAll return values as a promise
    Username.findAll({
        attributes: ['id', 'user']
        })
        .then( userDetails => {
            // if resolved userDetails will hold id, user 
            res.render('pages/users', {
                pageTitle: 'User Info',
                path: '/users',
                userDetails: userDetails,
            });
        }) 
        .catch( err => {
            console.log(err);
        });
};