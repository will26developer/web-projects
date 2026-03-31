import elements from "../elements/elements.js";
import state from "../state/state.js";

const stateFunctions = {
  getState: () => state,
  getAllCountries: () => state.allCountries,
  getFilterName: () => state.filter.name,
  getFilterRegion: () => state.filter.region,
  getTheme:() => state.theme,
  setFilterName: (name = "") => {
    const stateRef = stateFunctions.getState();
    stateRef.filter.name = name;
  },
  setFilterRegion: (region = "") => {
    const stateRef = stateFunctions.getState();
    stateRef.filter.region = region;
  },
  setAllContries: (countries = []) => {
    const stateRef = stateFunctions.getState();
    stateRef.allCountries = countries;
  },
  setThemeMode: (mode) => {
    const stateRef = stateFunctions.getState();
    stateRef.theme = mode;
    console.log(stateRef.theme)
    localStorage.setItem("theme", stateRef.theme);
  },
  initializeTheme: () => {
    const stateRef = stateFunctions.getState(); 
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme",stateRef.theme);
    } 
  },
  cleanFilters: () => {
    const stateRef = stateFunctions.getState();
    stateRef.filter.name = "";
    stateRef.filter.region = "";
  },
};

export default stateFunctions;
