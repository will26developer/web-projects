import { plugins } from "../plugins/index.js";
import { countryAdapter } from "../adapters/countryAdapter.js";

const cache = new Map();

export const countriesServices = {
  getCountries: async () => {
    if (cache.has("all")) return cache.get("all");
    let countries = await plugins.httpClient();
    let adapted = countries.map((country) => countryAdapter(country));
    cache.set("all", adapted);
    return adapted;
  },
  getFilteredCountries: async (name, region, next) => {
    try {
      const key = `${name}-${region}`;

      if (cache.has(key)) return cache.get(key);

      let countries = await countriesServices.getCountries();

      if (name) {
        countries = countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (region) {
        countries = countries.filter(country => country.region === region);
      }

      cache.set(key, countries);
      return countries
    } catch (error) {
      next(error);
    }

  }
}
