import state from "../state/state.js";
import elements from "../elements/domElements.js";
import countriesViewTemplate from "../templates/countriesViewTemplate.js";
import utilFunctions from "./utilFunctions.js";
import countryViewTemplate from "../templates/countryViewTemplate.js";
import countryDetailView from "../components/countryDetailView.js";
import countriesView from "../components/countriesView.js";
import errorView from "../components/errorView.js";

const uiFunctions = {
    setDefaultTheme: () => {
        state.theme = "light-mode";
        elements.body.classList.remove("dark-mode", "light-mode");
        elements.body.classList.add(state.theme);
        localStorage.setItem("theme", state.theme);
    },
    changeAndSaveTheme: () => {
        elements.iconTheme.classList.remove("fa-regular", "fa-sun", "fa-moon");
        elements.body.classList.remove("dark-mode", "light-mode");
        if (state.theme == "light-mode") {
            state.theme = "dark-mode";
            elements.iconTheme.className = "fa-regular fa-sun";
            elements.spanTheme.textContent = "Light Mode";
            elements.body.classList.add("dark-mode");
            localStorage.setItem("theme", state.theme);
        } else {
            state.theme = "light-mode";
            elements.iconTheme.className = "fa-regular fa-moon";
            elements.spanTheme.textContent = "Dark Mode";
            elements.body.classList.add("light-mode");
            localStorage.setItem("theme", state.theme);
        }
    },
    renderCountries: () => {
        if (state.countries.length > 0) {
            elements.countriesModule.innerHTML = "";
            const fragment = document.createDocumentFragment();
            state.countries.forEach(country => {
                const article = document.createElement("article");
                article.id = country.name.common;
                article.className = "country__card";
                article.innerHTML = countriesViewTemplate(country);
                fragment.append(article);
            })
            elements.countriesModule.append(fragment);
        }
    },
    renderDetailCountry: (countryName) => {
        state.filters.name = countryName; 
        utilFunctions.filterCountries(state.filters.name, state.filters.region);
        elements.detailModule.innerHTML = ""; 
        if (state.countries.length > 0) {
            const country = state.countries[0]; 
            elements.detailModule.innerHTML = countryViewTemplate(country);
        } else {
            elements.detailModule.innerHTML = "<p class='error__message'>Country not found</p>";
        }
    },
    backToCountries: () => {
        location.hash = "#/countries";
        countryDetailView.unmount();
        errorView
        countriesView.mount(); 
    }
}

export default uiFunctions;