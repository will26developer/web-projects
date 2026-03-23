import state from "../state/state.js";
import uiFunctions from "./uiFunctions.js";
import utilFunctions from "./utilFunctions.js";

let timeout;

const handlerFunctions = {
    handlerSearchInput: (e) => {
        utilFunctions.cleanFilters()
        const value = e.target.value;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            state.filters.name = value;
            utilFunctions.filterCountries(state.filters.name,state.filters.region);
            uiFunctions.renderCountries();
        },300);
    },
    handlerSearchRegion: (e) => {
        utilFunctions.cleanFilters();
        state.filters.region = e.target.value;
        utilFunctions.filterCountries(state.filters.name,state.filters.region);
        uiFunctions.renderCountries();
    },
    handlerCountryClick: (e) => {
        const countryCard = e.target.closest(".country__card");
        if (!countryCard) return;
        const countryName = countryCard.id
        location.hash = `#/country/${encodeURIComponent(countryName)}`;
    }
}

export default handlerFunctions;