const express = require('express');

const router = express.Router();

const cragsController = require('../controllers/crags');

router.get('/region', cragsController.getRegion);

router.get('/rejon/:regionId', cragsController.getRejon);

router.get('/skala/:rejonId', cragsController.getSkala);

router.get('/route/:skalaId', cragsController.getRoutes);

module.exports = router;