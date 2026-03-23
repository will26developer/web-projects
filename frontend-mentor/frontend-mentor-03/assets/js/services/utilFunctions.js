import state from "../state/state.js";
import uiFunctions from "./uiFunctions.js";

const utilFunctions = {
    getApiData: async () => {
        const url = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region,subregion,languages";
        try {
            const response = await fetch(url);
            const data = await response.json();
            state.allCountries = data;
            state.countries = data;
        } catch (error) {
            console.log(error);
        }
    },
    validCountry: (countryName) => /^[a-zA-Z\s\-'\u00C0-\u017F]+$/.test(countryName),
    filterCountries: (name,region) => {
        let filterCountries = state.allCountries;
        if (utilFunctions.validCountry(name)) {
            filterCountries = filterCountries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase()));
        }
        if (region) {
            filterCountries = filterCountries.filter(country => country.region === region);
        }
        state.countries = filterCountries;
        uiFunctions.renderCountries()
    },
}

export default utilFunctions;