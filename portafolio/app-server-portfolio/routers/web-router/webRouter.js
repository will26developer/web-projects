const express = require("express");
const webRouter = express.Router();
const {landingPageController} = require("../../controllers/web-controllers/landingPageController.js");
const { frontendMentorController } = require("../../controllers/web-controllers/frontendMentorController.js");

webRouter.get("/",landingPageController);
webRouter.get("/frontend-mentor/:project",frontendMentorController);

module.exports = webRouter;
