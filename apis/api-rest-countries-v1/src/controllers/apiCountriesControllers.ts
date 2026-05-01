import { Request, Response } from "express";
import { countries } from "../services/countries.services";
import logger from "../logger/logger";

export const apiCountriesController = async (req: Request, res: Response) => {
  const name = typeof req.query.name === "string" ? req.query.name : "";
  const region = typeof req.query.region === "string" ? req.query.region : "";

  logger.info("GET /countries request", {
    query: { name, region },
  });

  const countriesFiltered = await countries.getFilteredCountries(name, region);

  logger.info("GET /countries response", {
    count: countriesFiltered.length,
  });

  return res.status(200).json({
    countriesFiltered,
  });
};