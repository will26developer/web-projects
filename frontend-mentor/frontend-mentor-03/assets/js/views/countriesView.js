import elements from "../elements/elements.js";
import uiFunctions from "../services/uiFunctions.js";


const countriesView = {
    mount: () => {
        elements.searchModule.classList.remove("hidden");
        elements.countriesModule.classList.remove("hidden");
        uiFunctions.renderCountries();
    },
    unmount: () => {
        elements.searchModule.classList.add("hidden");
        elements.countriesModule.classList.add("hidden");
    }
}

export default countriesView;