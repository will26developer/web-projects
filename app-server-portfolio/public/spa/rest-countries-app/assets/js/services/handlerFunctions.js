import elements from "../elements/elements.js";
import stateFunctions from "../services/stateFunctions.js";
import dataFunctions from "./dataFunctions.js";
import utilFunctions from "./utilFunctions.js";

const debouncedSearch = utilFunctions.debounce(async (value) => {
  stateFunctions.setFilterName(value);
  await dataFunctions.applyFilters();
}, 300);

const handlerFunctions = {
    handlerBtnModeToggle: e => {
        if (stateFunctions.getState().theme === "light-mode") {
            elements.iconTheme.className = "fa-regular fa-sun";
            elements.spanTheme.textContent = "Light Mode";
            stateFunctions.setThemeMode("dark-mode");
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("dark-mode");
        } else {
            elements.iconTheme.className = "fa-regular fa-moon";
            elements.spanTheme.textContent = "Dark Mode";
            stateFunctions.setThemeMode("light-mode");
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("light-mode");
        }
    }, 
    handlerInputForm: e => {
        e.preventDefault()
        debouncedSearch(e.target.value);
    },
    handlerSelectRegion: async (e) => {
        stateFunctions.setFilterRegion(e.target.value);
        await dataFunctions.applyFilters();
    }
}

export default handlerFunctions; 