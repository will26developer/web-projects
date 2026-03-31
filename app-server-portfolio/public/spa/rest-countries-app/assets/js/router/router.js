import countriesView from "../views/countriesView.js";


const router = () => {
    let [,,,route,param] = location.pathname.split("/");
    countriesView.unmount() 
    if ((route === "" || route === "countries") && !param) {
        countriesView.mount();
    } else if (route === "country" && param) {
        param = decodeURIComponent(param);
    } else {

    }
}

export default router;