const express = require("express");
const errorRouter = express.Router();
const { errorPage } = require("../../controllers/webControllers/errorController");

errorRouter.get("/error", errorPage);

module.exports = errorRouter;
