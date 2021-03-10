// exported page not found controller method 
exports.get404 = (req, res, next) => {

    res.status(404).render('404', { 
        
        // renders 404 page if no path matches
        pageTitle: 'Error 404', 
    });
};