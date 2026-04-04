import elements from "../elements/elements.js";
import handlerFunctions from "../services/handlerFunctions.js";



const listeners = () => {
    elements.btnThemeMode.addEventListener("click",handlerFunctions.handlerBtnModeToggle);
    elements.searchInput.addEventListener("input",handlerFunctions.handlerInputForm);
    elements.searchRegion.addEventListener("change",handlerFunctions.handlerSelectRegion);
    elements.countriesModule.addEventListener("click",handlerFunctions.handlerCountryChoiceCard);
    elements.btnBack.addEventListener("click",handlerFunctions.handlerBtnBackMenu);
    elements.btnErrorBack.addEventListener("click",handlerFunctions.handlerBtnBackMenu);
}

export default listeners;