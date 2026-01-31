const express = require("express");
const router  = express.Router();
const appController = require("../controllers/appController");
router.get("/",appController.mainLandingPage);
router.get("/project/:project",appController.mainDinamicProject);
router.get("/api/countries",appController.apiRestCountries);



module.exports = router;