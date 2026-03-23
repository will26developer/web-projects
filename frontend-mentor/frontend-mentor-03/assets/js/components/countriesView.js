import elements from "../elements/domElements.js";
import uiFunctions from "../services/uiFunctions.js";

const countriesView = {
    mount: () => {
        elements.countriesModule.classList.remove("hidden");
        elements.searchModule.classList.remove("hidden");
        uiFunctions.renderCountries();
    },
    unmount: () => {
        elements.countriesModule.classList.add("hidden");
        elements.searchModule.classList.add("hidden");
    }
}

export default countriesView; 