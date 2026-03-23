import elements from "../elements/domElements.js";
import handlerFunctions from "../services/handlerFunctions.js";
import uiFunctions from "../services/uiFunctions.js";


const listenersElements = () => {
    elements.btnToggleTheme.addEventListener("click",uiFunctions.changeAndSaveTheme);
    elements.searchInput.addEventListener("input",e => handlerFunctions.handlerSearchInput(e));
    elements.searchRegion.addEventListener("change",handlerFunctions.handlerSearchRegion);
    elements.countriesModule.addEventListener("click",handlerFunctions.handlerCountryClick);
    elements.btnBack.addEventListener("click",uiFunctions.backToCountries);
    elements.btnErrorBack.addEventListener("click",uiFunctions.backToCountries);
}

export default listenersElements;