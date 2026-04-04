import elements from "../elements/elements.js";
import stateFunctions from "../services/stateFunctions.js";
import uiFunctions from "./uiFunctions.js";
import utilFunctions from "./utilFunctions.js";
import countryView from "../views/countryView.js";
import countriesView from "../views/countriesView.js";
import errorView from "../views/errorView.js";

const debouncedSearch = utilFunctions.debounce((value) => {
  stateFunctions.setFilterName(value);
  uiFunctions.renderCountries();
}, 300);

const handlerFunctions = {
  handlerBtnModeToggle: (e) => {
    const theme = localStorage.getItem("theme");
    if (theme === "light-mode") {
        elements.iconTheme.classList.remove("fa-regular","fa-moon");
        elements.iconTheme.classList.add("fa-regular","fa-sun");
        elements.spanTheme.textContent = "Light Mode";
        stateFunctions.setThemeMode("dark-mode");
        elements.body.classList.remove("light-mode","dark-mode");
        elements.body.classList.add("dark-mode");
    } else {
        elements.iconTheme.classList.remove("fa-regular","fa-moon");
        elements.iconTheme.classList.add("fa-regular","fa-moon");
        elements.spanTheme.textContent = "Dark Mode";
        stateFunctions.setThemeMode("light-mode");
        elements.body.classList.remove("light-mode","dark-mode");
        elements.body.classList.add("light-mode");
    }
  },
  handlerInputForm: (e) => {
    e.preventDefault();
    debouncedSearch(e.target.value);
  },
  handlerSelectRegion: (e) => {
    stateFunctions.setFilterRegion(e.target.value);
    uiFunctions.renderCountries();
  },
  handlerCountryChoiceCard: (e) => {
    let element = e.target.closest("[data-choice]");
    if (!element) return;
    let countryName = element.dataset.choice;
    stateFunctions.setFilterName(countryName);
    utilFunctions.navigate(countryName);
  },
  handlerBtnBackMenu: (e) => {
    utilFunctions.navigate("");
    stateFunctions.cleanFilters();
  },
};

export default handlerFunctions;
