import elements from "../elements/elements.js";
import uiFunctions from "../services/uiFunctions.js";

const countryView = {
    mount: () => {
        elements.countryModule.classList.remove("hidden");
        uiFunctions.renderCountry();
    },
    unmount: () => {
        elements.countryModule.classList.add("hidden");
    }
}

export default countryView;