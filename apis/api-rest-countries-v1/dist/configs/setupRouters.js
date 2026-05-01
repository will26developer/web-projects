"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRouters = void 0;
const AppError_1 = require("../errors/AppError");
const errorHandler_1 = require("./errorHandler");
const apiCountriesRouter_1 = require("../routers/apiCountriesRouter");
const setupRouters = (app) => {
    app.use("/api/countries", apiCountriesRouter_1.apiCountriesRouter);
    app.use("/api", (req, res, next) => {
        next(new AppError_1.AppError("Route not found, fetch to /api/countries", 404));
    });
    app.use(errorHandler_1.errorHandler);
};
exports.setupRouters = setupRouters;
