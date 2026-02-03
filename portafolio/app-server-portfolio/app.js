require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const setupMiddlewares = require("./configs/middlewares"); 
const setupStatics = require("./configs/statics"); 
const setupRoutes = require("./configs/routes"); 

const app = express();
setupMiddlewares(app); 
setupStatics(app); 
setupRoutes(app);

app.listen(port,console.log(`Server run on port: ${port}`))