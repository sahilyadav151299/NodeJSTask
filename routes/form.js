// express imported
const express = require('express');

// route created using express
const router = express.Router();

// controller imported to work with all routes
const formController = require('../controllers/formController');

// specfic route registered by router with it's path
router.get('/create', formController.getUserForm);
router.post('/add', formController.postAddUsername);

// router exproted so that it can be used in app.js 
module.exports = router; 