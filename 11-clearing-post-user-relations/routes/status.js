const express = require('express');
const { body } = require('express-validator/check');

const isAuth = require('../middleware/is-auth');
const statusController = require('../controllers/status');

const router = express.Router();

router.get('/get', isAuth, statusController.getStatus);

router.put('/put', isAuth, statusController.postStatus);

module.exports = router;