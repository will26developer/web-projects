import listeners from "./listeners/listeners.js";
import stateFunctions from "./services/stateFunctions.js";

window.addEventListener("DOMContentLoaded",() => {
    const initApp = () => {
        stateFunctions.loadState();
        listeners();
    }

    initApp();
})