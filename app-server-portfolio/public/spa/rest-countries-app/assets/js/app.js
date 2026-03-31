import listeners from "./listener/listeners.js";
import dataFunctions from "./services/dataFunctions.js";

window.addEventListener("DOMContentLoaded",() => {
    const initApp = () => {
        listeners()
        dataFunctions.getDataCountries();
    }

    initApp()
})