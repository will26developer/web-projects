import state from "../state/state.js";
import utilFunctions from "./utilFunctions.js";

let timeout;

const handlerFunctions = {
    handlerSearchInput: (e) => {
        const value = e.target.value;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            state.filters.name = value;
            utilFunctions.filterCountries(state.filters.name,state.filters.region);
        },300);
    },
    handlerSearchRegion: (e) => {
        state.filters.region = e.target.value;
        utilFunctions.filterCountries(state.filters.name,state.filters.region);
    }
}

export default handlerFunctions;