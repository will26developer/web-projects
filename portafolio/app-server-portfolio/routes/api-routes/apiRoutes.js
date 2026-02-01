const express = require("express");
const apiRouter  = express.Router();
const apiController = require("../../controllers/api/apiCountriesController");
const apiError =  require("../../controllers/api/apiError");

apiRouter.get("/countries",apiController.apiRestCountries);
apiRouter.use(apiError.apiError);

module.exports = apiRouter
