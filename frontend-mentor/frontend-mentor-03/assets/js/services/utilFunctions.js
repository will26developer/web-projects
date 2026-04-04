import router from "../router/router.js";
import dataFunctions from "./dataFunctions.js";
import stateFunctions from "./stateFunctions.js";


const regex= /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'’-]+$/;


const utilFunctions = {
    validateNameCountry: name => {
        if (!name) return true;
        return regex.test(name);
    }, 
    debounce: (fn, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn(...args);
            },delay)
        }
    },
    navigate: name => {
       if (name) {
            history.pushState({},"",`/spa/rest-countries-app/country/${name}`);
       } else {
        stateFunctions.cleanFilters();
        history.pushState({},"","/spa/rest-countries-app/countries");
       }

       router();
    }
}

export default utilFunctions;