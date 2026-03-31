import listeners from "./listener/listeners.js";
import router from "./router/router.js";
import dataFunctions from "./services/dataFunctions.js";

window.addEventListener("DOMContentLoaded",() => {
    const initApp = () => {
        dataFunctions.getDataCountries();
        listeners();
        router();
    }

    initApp()
})