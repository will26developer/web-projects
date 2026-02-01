const express = require("express");
const apiRouter  = express.Router();
const apiController = require("../../controllers/api/apiCountriesController");

apiRouter.get("/countries",apiController.apiRestCountries);

module.exports = apiRouter
