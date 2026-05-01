"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCountriesRouter = void 0;
const express_1 = require("express");
const apiCountriesControllers_1 = require("../controllers/apiCountriesControllers");
exports.apiCountriesRouter = (0, express_1.Router)();
exports.apiCountriesRouter.get("/", apiCountriesControllers_1.apiCountriesController);
