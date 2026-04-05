import listeners from "./listeners/listeners.js";
import dataFunctions from "./services/dataFunctions.js";
import stateFunctions from "./services/stateFunctions.js"
import router from "./router/router.js";
import uiFunctions from "./services/uiFunctions.js";


window.addEventListener("DOMContentLoaded",() => {
    const initApp = async () => {
        stateFunctions.initializeTheme();
        stateFunctions.subscribe(uiFunctions.renderCountries)
        await dataFunctions.getCountries();
        listeners();
        router();
    }

    initApp();

    window.addEventListener("hashchange",router)
})