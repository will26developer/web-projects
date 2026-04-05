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
            stateFunctions.setFilterName(name);
            location.hash = `/country/${name}`;
        } else {
            location.hash = "/countries";
        }
    }
}

export default utilFunctions;