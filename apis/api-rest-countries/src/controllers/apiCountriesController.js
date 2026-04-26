import { countriesServices } from "../services/countries.services.js";

export const apiCountriesController = async (req, res, next) => {
  try {
    let { name, region } = req.query;
    let filteredCountries = await countriesServices.getFilteredCountries(name, region);
    return res.status(200).json({
      filteredCountries
    })
  } catch (error) {
    next(error)
  }
}
