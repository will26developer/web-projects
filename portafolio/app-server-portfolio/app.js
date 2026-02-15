require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const setupMiddlewares = require("./configs/middlewares.js");
const setupStatics = require("./configs/static.js");
const setupRouter = require("./configs/router.js");

const app = express();
setupMiddlewares(app)
setupStatics(app);
setupRouter(app);

app.listen(port,console.log(`Server run on port: ${port}`))