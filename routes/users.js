 // express imported
const express = require('express');

// route created using express
const router = express.Router();

// controller imported to work with all routes
const usersController = require('../controllers/usersController');

// specfic route registered by router with it's path
router.get('/users', usersController.getUsername);

// router exproted so that it can be used in app.js 
module.exports = router; 