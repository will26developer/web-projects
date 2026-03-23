import countriesView from "../components/countriesView.js";
import countryDetailView from "../components/countryDetailView.js";
import errorView from "../components/errorView.js";

const router = () => {
    const [,route,param] = location.hash.split("/");
    countriesView.unmount();
    countryDetailView.unmount();
    errorView.unmount();
    if (route === "" || route === "countries" && param == undefined)  {
        countriesView.mount();
    } else if (route == "country" && param) { 
        let countryName = decodeURIComponent(param);
        countryDetailView.mount(countryName);
    } else {
        errorView.mount();
    }
}

export default router;