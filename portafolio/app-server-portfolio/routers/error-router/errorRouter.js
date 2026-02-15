const express = require("express");
const errorRouter = express.Router(); 
const {errorPage} = require("../../controllers/web-controllers/errorController");

errorRouter.get("/error",errorPage); 

module.exports = errorRouter;