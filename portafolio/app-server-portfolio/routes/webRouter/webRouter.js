const express = require("express");
const webRouter = express.Router(); 
const {mainPage} = require("../../controllers/web-controllers/mainPage");
const {frontendMentorController} = require("../../controllers/web-controllers/frontendMentorController");

webRouter.get("/",mainPage);
webRouter.get("/frontend-mentor/:project",frontendMentorController);

module.exports = webRouter;