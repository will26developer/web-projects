import stateFunctions from "./stateFunctions.js";
import utilFunctions from "./utilFunctions.js";

const dataFunctions = {
  getDataCountries: async (name, region) => {
    try {
      stateFunctions.setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/countries?name=${encodeURIComponent(name)}&region=${encodeURIComponent(region)}`,
      );
      const data = await response.json();
      stateFunctions.setAllContries(data.countries);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      stateFunctions.setLoading(false);
    }
  },
  applyFilters: async () => {
    const name = stateFunctions.getFilterName();
    const region = stateFunctions.getFilterRegion();
    if (name && !utilFunctions.validateNameCountry(name)) return;
    await dataFunctions.getDataCountries(name, region);
  },
};

export default dataFunctions;
