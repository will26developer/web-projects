import Country from "../models/Country"

const getCountriesByRegion = (countries: Country[], region: string): Country[] => {
  return countries.filter(c => c.region === region);
}

export default getCountriesByRegion;
