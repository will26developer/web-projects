import express, { Request, Response } from "express";
import Filter from "../../models/Filter";
import validateCountryName from "../../utils/validateCountryName";
import getCountryByName from "../../services/getCountryByName";
import getCountries from "../../services/getCountries";
import Country from "../../models/Country";
import getCountriesByRegion from "../../services/getCountriesByRegion";

const apiCountriesController = async (req: Request<{}, {}, {}, Filter>, res: Response) => {
  let cachedCountries: Country[] = [];
  let { name = "", region = "" } = req.query;
  if (cachedCountries.length === 0) {
    cachedCountries = await getCountries();
  }
  let countries = cachedCountries;
  try {
    if (name && !validateCountryName(name)) {
      return res.status(400).json({
        message: "Invalid country name format",
      });
    }

    if (name) {
      countries = getCountryByName(countries, decodeURIComponent(name));
    }

    if (region) {
      countries = getCountriesByRegion(countries, decodeURIComponent(region));
    }

    return res.status(200).json({
      countries,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default apiCountriesController;
