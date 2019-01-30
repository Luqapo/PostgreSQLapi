const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.post('/user', userController.registerUser);

router.get('/user',userController.getUsers);

router.get('/params', userController.getQueryString)

module.exports = router;