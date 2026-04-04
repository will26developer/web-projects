import listeners from "./listener/listeners.js";
import router from "./router/router.js";
import dataFunctions from "./services/dataFunctions.js";
import stateFunctions from "./services/stateFunctions.js";

window.addEventListener("DOMContentLoaded", () => {
  const initApp = () => {
    dataFunctions.getDataCountries();
    stateFunctions.initializeTheme();
    listeners();
    router();
    window.addEventListener("popstate", router);
  }

  initApp()
})
