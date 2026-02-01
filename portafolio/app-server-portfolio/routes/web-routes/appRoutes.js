const express = require("express");
const webRouter  = express.Router();
const mainController = require("../../controllers/client-frontend/mainController");
const frontendMentorController = require("../../controllers/client-frontend/frontendMentorController");
const errorController = require("../../controllers/client-frontend/errorController");

webRouter.get("/",mainController.mainLandingPage);
webRouter.get("/frontend-mentor/:project",frontendMentorController.frontendMentorProjects);
webRouter.use(errorController.errorPage);


module.exports = webRouter;