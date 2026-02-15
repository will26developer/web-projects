const express = require("express");
const webRouter = require("../routers/web-router/webRouter.js");
const apiRouter = require("../routers/apiRoutes/apiRouter.js"); 
const errorRouter = require("../routers/error-router/errorRouter.js");
const erroHandler = require("./errorHandler.js");
module.exports = app => {
    app.use("/main", webRouter);
    app.use("/api",apiRouter);
    app.use(errorRouter);
    app.use((req, res, next) => {
        const err = new Error("Route not found");
        err.statusCode = 404;
        next(err);
    });

    app.use(erroHandler);
}