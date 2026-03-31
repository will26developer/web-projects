import elements from "../elements/elements.js";
import state from "../state/state.js";

let timeoutId;

const handlerFunctions = {
    handlerBtnModeToggle: e => {
        if (state.theme === "light-mode") {
            elements.iconTheme.className = "fa-regular fa-sun";
            elements.spanTheme.textContent = "Light Mode";
            state.theme = "dark-mode";
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("dark-mode");
        } else {
            elements.iconTheme.className = "fa-regular fa-moon";
            elements.spanTheme.textContent = "Dark Mode";
            state.theme = "light-mode";
            elements.body.classList.remove("light-mode","dark-mode");
            elements.body.classList.add("light-mode");
        }
    }, 
    handlerInputForm: e => {
        e.preventDefault()
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            state.filter.name = e.target.value;
            console.log(state.filter.name)
        },300)
    },
    handlerSelectRegion: e => {
        state.filter.region = e.target.value;
        console.log(state.filter.region)
    }
}

export default handlerFunctions; 