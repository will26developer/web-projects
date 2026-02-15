const express = require("express");
const apiRouter  = express.Router();
const {apiRestCountries} = require("../../controllers/api-controllers/apiCountriesController");

apiRouter.get("/countries",apiRestCountries);

module.exports = apiRouter
