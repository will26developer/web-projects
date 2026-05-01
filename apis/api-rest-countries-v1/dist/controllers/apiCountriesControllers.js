"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCountriesController = void 0;
const countries_services_1 = require("../services/countries.services");
const logger_1 = __importDefault(require("../logger/logger"));
const apiCountriesController = async (req, res) => {
    const name = typeof req.query.name === "string" ? req.query.name : "";
    const region = typeof req.query.region === "string" ? req.query.region : "";
    logger_1.default.info("GET /countries request", {
        query: { name, region },
    });
    const countriesFiltered = await countries_services_1.countries.getFilteredCountries(name, region);
    logger_1.default.info("GET /countries response", {
        count: countriesFiltered.length,
    });
    return res.status(200).json({
        countriesFiltered,
    });
};
exports.apiCountriesController = apiCountriesController;
