import elements from "../elements/elements.js";
import stateFunctions from "../services/stateFunctions.js";

let timeoutId;

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
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            stateFunctions.setFilterName(e.target.value);
        },300)
    },
    handlerSelectRegion: e => {
        stateFunctions.setFilterRegion(e.target.value);
    }
}

export default handlerFunctions; 