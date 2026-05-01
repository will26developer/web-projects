"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countries = void 0;
const AppError_1 = require("../errors/AppError");
const httpClientPlugin_1 = require("./../plugins/httpClientPlugin");
const logger_1 = __importDefault(require("../logger/logger"));
const TTL = Number(process.env.TTL) || 1000 * 60 * 10;
let countriesCache = null;
let lastFetch = 0;
exports.countries = {
    getCountriesService: async () => {
        const now = Date.now();
        if (countriesCache && (now - lastFetch < TTL)) {
            logger_1.default.info("Countries cache hit...");
            return countriesCache;
        }
        try {
            logger_1.default.info("Countries fetch from API...");
            let countries = (await (0, httpClientPlugin_1.httpClientPlugin)());
            let countriesFiltered = countries.map((country) => {
                let { name, flags, population, capital, region, subregion, tld, languages, currencies } = country;
                return {
                    name: name?.common || "N/A",
                    nativeName: name?.nativeName
                        ? Object.values(name.nativeName)
                            .map((native) => native.official)
                            .join(", ")
                        : name?.common || "N/A",
                    flags: {
                        png: flags?.png || "",
                        alt: flags?.alt || "",
                    },
                    population: population || 0,
                    region: region || "N/A",
                    subregion: subregion || "N/A",
                    capital: capital?.[0] || "N/A",
                    tld: tld?.length > 1 ? tld.join(", ") : tld?.[0] || "N/A",
                    languages: languages
                        ? Object.values(languages).join(", ")
                        : "N/A",
                    currencies: currencies
                        ? Object.values(currencies)
                            .map((c) => c.name)
                            .join(", ")
                        : "N/A",
                };
            });
            logger_1.default.info("Countries fetched and cached", {
                count: countriesFiltered.length,
            });
            countriesCache = countriesFiltered;
            lastFetch = now;
            return countriesFiltered;
        }
        catch (error) {
            logger_1.default.error("Error fetching or transforming countries", {
                error: error instanceof Error ? error.message : error,
                stack: error instanceof Error ? error.stack : undefined,
            });
            throw new AppError_1.AppError("Fail in transform countries data", 500);
        }
    },
    getFilteredCountries: async (name, region) => {
        let countriesFiltered = await exports.countries.getCountriesService();
        logger_1.default.info("Filtering countries", {
            name,
            region,
        });
        if (name) {
            countriesFiltered = countriesFiltered.filter((c) => c.name.toLowerCase().includes(name.toLowerCase()));
        }
        if (region) {
            countriesFiltered = countriesFiltered.filter((c) => c.region === region);
        }
        logger_1.default.info("Filtered result", {
            count: countriesFiltered.length,
        });
        return countriesFiltered;
    }
};
