import elements from "../elements/elements.js";
import handlerFunctions from "../services/handlerFunctions.js";

const listeners = () => {
    elements.btnToggleMode.addEventListener("click",handlerFunctions.handlerBtnToggleMode);
    elements.searchInput.addEventListener("input",handlerFunctions.handlerInputForm);
    elements.searchRegion.addEventListener("change",handlerFunctions.handlerSelectRegion);
    elements.countriesModule.addEventListener("click",handlerFunctions.handleCountryCardClick);
    elements.btnBack.addEventListener("click",handlerFunctions.handleBtnReturn);
    elements.btnErrorBack.addEventListener("click",handlerFunctions.handleBtnReturn);
}

export default listeners;