import state from "../state/state.js";


const stateFunctions = {
    getState: () => state,
    getAllCountries: () => state.allCountries,
    getFilterName: () => state.filter.name,
    getFilterRegion: () => state.filter.region,
    setFilterName: (name = "") => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.name = name;
    },
    setFilterRegion: (region = "") => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.region = region;
    },
    setAllContries: (countries = []) => {
        const stateRef = stateFunctions.getState();
        stateRef.allCountries = countries;
    },
    setThemeMode: mode => {
        const stateRef = stateFunctions.getState();
        stateRef.theme = mode;
    }

}

export default stateFunctions;