import state from "../state/state.js";
import elements from "../elements/domElements.js";
import countriesViewTemplate from "../templates/countriesViewTemplate.js";
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
            console.log(state.countries)
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
    }
}

export default uiFunctions;