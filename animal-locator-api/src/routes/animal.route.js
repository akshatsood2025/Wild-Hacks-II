const express = require('express');
const router = express.Router();

const animal_controller = require('../controllers/animal.controller');

router.post('/animal/location', animal_controller.updateAnimalLocation);

router.get('/animal/:name', animal_controller.getAnimalLocation);

module.exports = router;