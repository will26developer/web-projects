import state from "../state/state.js";

const stateFunctions = {
    listeners: [],
    subscribe: fn => {
        stateFunctions.listeners.push(fn);
    },
    notify: () => {
        stateFunctions.listeners.forEach(fn => fn());
    },
    getState: () => state,
    setCountries: countries => {
        const stateRef = stateFunctions.getState(); 
        stateRef.countries = countries;
        stateFunctions.notify();
    },
    setFilterName: name => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.name = name;
        stateFunctions.notify();
    },
    setFilterRegion: region => {
        const stateRef = stateFunctions.getState();
        stateRef.filter.region = region;
        stateFunctions.notify()
    }, 
    setLoading: flag => {
        const stateRef = stateFunctions.getState();
        stateRef.loading = flag;
        stateFunctions.notify()
    },
    setTheme: theme => {
        const stateRef = stateFunctions.getState();
        stateRef.theme = theme;
    },
    initializeTheme: () => {
        const stateRef = stateFunctions.getState();
        const stored = localStorage.getItem("theme");
        if (!stored) {
            localStorage.setItem("theme",stateRef.theme);
        }
        stateRef.theme = stored;
    },
    saveTheme: theme => {
        stateFunctions.setTheme(theme);
        const stateRef = stateFunctions.getState();
        localStorage.setItem("theme",stateRef.theme);
    }
}

export default stateFunctions;