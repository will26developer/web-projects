import elements from "../elements/domElements.js";

const countryDetailView = {
    mount: () => {
        elements.countryModule.classList.remove("hidden");
    },
    unmount: () => {
         elements.countryModule.classList.add("hidden");
    }
}

export default countryDetailView;