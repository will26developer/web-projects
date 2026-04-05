import stateFunctions from "./stateFunctions.js";
import elements from "../elements/elements.js";
import utilFunctions from "./utilFunctions.js";

const debouncedSearch = utilFunctions.debounce((value) => {
  stateFunctions.setFilterName(value);
}, 300);


const handlerFunctions = {
    handlerBtnToggleMode: e => {
        const theme = stateFunctions.getState().theme;
        if (theme === "light-mode") {
            elements.iconTheme.classList.remove("fa-regular","fa-sun","fa-moon");
            elements.iconTheme.className = "fa-regular fa-sun";
            elements.spanTheme.textContent = "Light Mode";
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("dark-mode");
            stateFunctions.saveTheme("dark-mode");
        } else {
            elements.iconTheme.classList.remove("fa-regular","fa-sun","fa-moon");
            elements.iconTheme.className = "fa-regular fa-moon";
            elements.spanTheme.textContent = "Dark Mode";
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("light-mode");
            stateFunctions.saveTheme("light-mode");
        }
    },
    handlerInputForm: e => {
        e.preventDefault();
        debouncedSearch(e.target.value);
    },
    handlerSelectRegion: e => {
        stateFunctions.setFilterRegion(e.target.value);
    },
    handleCountryCardClick: e => {
        let element = e.target.closest("[data-choice]");
        if (!element) return;
        let countryName = element.dataset.choice;
        utilFunctions.navigate(countryName);
    },
    handleBtnReturn: e => {
        utilFunctions.navigate("");
    }
}

export default handlerFunctions; 