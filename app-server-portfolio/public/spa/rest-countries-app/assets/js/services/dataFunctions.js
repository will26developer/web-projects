import stateFunctions from "./stateFunctions.js";
import utilFunctions from "./utilFunctions.js";

const dataFunctions = {
    getDataCountries: async (name,region) => {
        try {
            const response = await fetch(`http://localhost:3000/api/countries?name=${encodeURIComponent(name)}&region=${encodeURIComponent(region)}`);
            const data = await response.json();
            stateFunctions.setAllContries(data.countries);
        } catch (error) {
            console.log("Error:",error); 
        }
    },
    applyFilters: async () => {
        try {
            const name = stateFunctions.getFilterName();
            const region = stateFunctions.getFilterRegion();
            if (name && !utilFunctions.validateNameCountry(name)) return;
            await dataFunctions.getDataCountries(name,region);
            console.log(stateFunctions.getAllCountries())
        } catch (error) {
            console.error("Error:",error);
        }
    }
}

export default dataFunctions;