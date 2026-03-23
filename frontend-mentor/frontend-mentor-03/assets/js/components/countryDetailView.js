import elements from "../elements/domElements.js";
import uiFunctions from "../services/uiFunctions.js";

const countryDetailView = {
    mount: (countryName) => {
        elements.countryModule.classList.remove("hidden"); 
        uiFunctions.renderDetailCountry(countryName);
    },
    unmount: () => {
         elements.countryModule.classList.add("hidden");
    }
}

export default countryDetailView;