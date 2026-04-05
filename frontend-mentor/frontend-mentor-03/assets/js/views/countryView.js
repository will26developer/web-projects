import elements from "../elements/elements.js"
import stateFunctions from "../services/stateFunctions.js";
import uiFunctions from "../services/uiFunctions.js";


const countryView = {
    mount: country => {
        elements.countryModule.classList.remove("hidden");
        stateFunctions.setFilterName(country);
        uiFunctions.renderCountry();
    },
    unmount: () => {
        elements.countryModule.classList.add("hidden");
    }
}

export default countryView;