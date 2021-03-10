// route for specific path is exported
exports.getGreetingMessage = (req, res, next) => {

    //render pages/greetings.ejs page
    res.render('pages/greetings', {

        pageTitle: 'Greetings',   
        path: '/greet'
    });
};