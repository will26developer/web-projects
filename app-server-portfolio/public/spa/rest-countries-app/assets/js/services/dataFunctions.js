import stateFunctions from "./stateFunctions.js";
import utilFunctions from "./utilFunctions.js";

const dataFunctions = {
    getDataCountries: async (name = "",region = "") => {
        try {
            const response = await fetch(`localhost:3000/api/countries?name=${name}&region=${region}`);
            const data = await response.json();
            stateFunctions.setAllContries(data);
        } catch (error) {
            console.log("Error:",error); 
        }
    },
    applyFilters: async () => {
        try {
            const name = stateFunctions.getFilterName();
            const region = stateFunctions.getFilterRegion();
            if (utilFunctions.validateNameCountry(name) && region) {
                await dataFunctions.getDataCountries(name,region)
            } else {
                await dataFunctions.getDataCountries();
            }
        } catch (error) {
            console.error("Error:",error)
            return stateFunctions.getFilteredCountries();
        }
    }
}

export default dataFunctions;