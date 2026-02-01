const express = require("express");
const webRouter  = express.Router();
const appController = require("../../controllers/web/appController");

webRouter.get("/",appController.mainLandingPage);
webRouter.get("/project/:project",appController.mainDinamicProject);



module.exports = webRouter;