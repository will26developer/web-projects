const express = require("express");
const apiRouter  = express.Router();
const {apiRestCountries} = require("../../controllers/apiControllers/apiCountriesController");

apiRouter.get("/countries",apiRestCountries);

module.exports = apiRouter
