import elements from "../elements/domElements.js";
import uiFunctions from "../services/uiFunctions.js";
import utilFunctions from "../services/utilFunctions.js";

const countriesView = {
    mount: () => {
        utilFunctions.cleanFilters()
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