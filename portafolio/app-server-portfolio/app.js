require("dotenv").config()
const express = require("express");
const setupMiddlewares = require("./configs/middlewares");
const setupStatic = require("./configs/static");
const setupRoutes = require("./configs/routes");


const app = express();
const port = process.env.PORT;

setupMiddlewares(app);
setupStatic(app);
setupRoutes(app);

app.listen(port,console.log(`Server run on port ${port}`))