const express = require("express");
const webRouter = express.Router();
const { landingPageController } = require("../../controllers/webControllers/landingPageController");
const { frontendMentorController } = require("../../controllers/webControllers/frontendMentorController");

webRouter.get("/",landingPageController);
webRouter.get("/frontend-mentor/:project",frontendMentorController);

module.exports = webRouter;