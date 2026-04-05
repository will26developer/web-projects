import countriesView from "../views/countriesView.js";
import countryView from "../views/countryView.js";
import errorView from "../views/errorView.js";

const router = () => {
    const [,route,path] = location.hash.split("/");

    countriesView.unmount();
    countryView.unmount();
    errorView.unmount();

    if ((route === "" || route === "countries") && !path) {
        countriesView.mount()
    } else if (route === "country" && path) {
        let country = decodeURIComponent(path);
        countryView.mount(country);
    } else {
        errorView.mount();
    }
}

export default router;