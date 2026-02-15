const express = require('express');
const CountryController = require('../controllers/CountryController');

const router = express.Router();

// Route to get all countries
router.get('/countries', CountryController.getAllCountries);

module.exports = router;