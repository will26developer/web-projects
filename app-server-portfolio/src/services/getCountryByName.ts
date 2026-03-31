import Country from "../models/Country"

const getCountryByName = (countries: Country[], countryName: string): Country[] => {
  return countries.filter(c => c.name.toLowerCase().includes(countryName.toLowerCase()));
}

export default getCountryByName;
