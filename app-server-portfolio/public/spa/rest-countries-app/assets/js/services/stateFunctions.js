import state from "../state/state.js";


const stateFunctions = {
    getState: () => state,
    setFilterName: (name = "") => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.name = name;
        return stateRef;
    },
    setFilterRegion: (region = "") => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.region = region;
        return stateRef; 
    },
    setAllContries: (countries = []) => {
        const stateRef = stateFunctions.getState();
        stateRef.allCountries = countries;
        return stateRef;
    },
    setFilteredCountries: (countries = []) => {
        const stateRef = stateFunctions.getState();
        stateRef.filteredCountries = countries;
    },
    setThemeMode: mode => {
        const stateRef = stateFunctions.getState();
        stateRef.theme = mode;
        return stateRef;
    }

}