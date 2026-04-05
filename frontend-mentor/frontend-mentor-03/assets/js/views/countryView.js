import elements from "../elements/elements.js"


const countryView = {
    mount: () => {
        elements.countryModule.classList.remove("hidden");
    },
    unmount: () => {
        elements.countryModule.classList.add("hidden");
    }
}

export default countryView;