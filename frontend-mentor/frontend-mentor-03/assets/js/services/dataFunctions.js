import Country from "../models/Country.js";
import stateFunctions from "../services/stateFunctions.js";
import utilFunctions from "./utilFunctions.js";

const dataFunctions = {
    getCountries: async () => {
        try {
            stateFunctions.setLoading(true);
            const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,tld,languages,currencies");
            const data = await response.json();
            stateFunctions.setCountries(data.map(({name,flags,capital,population,region,subregion,tld,languages,currencies}) => {
                return new Country(
                    name.common,
                    name.nativeName ? Object.values(name.nativeName).map(native => native.official).join(", ") : name.common,
                    flags,
                    capital[0],
                    population,
                    region,
                    subregion,
                    tld.length > 1 ? tld.join(", ") : tld[0],
                    languages ? Object.values(languages).join(", ") : "N/A",
                    currencies ? Object.values(currencies).map(c => c.name).join(",") : "N/A"
                )
            }));
        } catch (error) {
            console.error("Error: ",error); 
        } finally {
            stateFunctions.setLoading(false);
        }
    },
    getFilteredCountries: () => {
        const stateRef = stateFunctions.getState();
        let countries = stateRef.countries;
        const name = stateRef.filter.name;
        const region = stateRef.filter.region;
        
        if (utilFunctions.validateNameCountry(name)) {
            countries = countries.filter(country => {
                return country.name.toLowerCase().includes(name.toLowerCase());
            })
        }

        if (region) {
            countries = countries.filter(country => {
                return country.region === region;
            })
        }

        return countries;
    }
}

export default dataFunctions; 