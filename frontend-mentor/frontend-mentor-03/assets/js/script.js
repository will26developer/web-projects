import listenersElements from "./listeners/listenersElements.js";
import router from "./router/router.js";
import uiFunctions from "./services/uiFunctions.js";
import utilFunctions from "./services/utilFunctions.js";

window.addEventListener("DOMContentLoaded",() => {

  window.addEventListener("hashchange",router);

  const initApp = async () => {
    router();
    uiFunctions.setDefaultTheme();
    await utilFunctions.getApiData();
    uiFunctions.renderCountries();
    listenersElements();
  }

  initApp();
})