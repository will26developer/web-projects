import stateFunctions from "../services/stateFunctions.js";
import countriesView from "../views/countriesView.js";
import countryView from "../views/countryView.js";
import errorView from "../views/errorView.js";

const router = () => {
    let [,,,route,param] = location.pathname.split("/");
    countriesView.unmount(); 
    countryView.unmount();
    errorView.unmount();

    if ((route === "" || route === "countries") && !param) {
        countriesView.mount();
    } else if (route === "country" && param) {
        param = decodeURIComponent(param);
        stateFunctions.setFilterName(param);
        countryView.mount()
    } else {
        errorView.mount();
    }
}

export default router;