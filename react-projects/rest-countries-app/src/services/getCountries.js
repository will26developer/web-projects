import { countryTemplate } from "../utils/countryTemplate.js";

const cache = new Map();
const TTL = Number(process.env.TTL) || 1000 * 60 * 60;

export const getCountries = async () => {
  try {
    const cached = cache.get("countries");

    if (cached && Date.now() - cached.timestamp < TTL) {
      return cached.data;
    }

    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion,tld,languages,currencies"
    );

    const data = await response.json();

    const countries = data.map(countryTemplate);

    const payload = {
      data: countries,
      timestamp: Date.now(),
    };

    cache.set("countries", payload);

    return payload.data;

  } catch (error) {
    throw error; 
  }
};