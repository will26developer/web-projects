import elements from "../elements/domElements.js";

const errorView = {
    mount: () => {
        elements.errorModule.classList.remove("hidden");
    },
    unmount: () => {
        elements.errorModule.classList.add("hidden");
    }
}

export default errorView;