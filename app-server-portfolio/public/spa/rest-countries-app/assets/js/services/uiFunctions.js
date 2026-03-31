import elements from "../elements/elements.js";
import templates from "../templates/templates.js";
import dataFunctions from "./dataFunctions.js";
import stateFunctions from "./stateFunctions.js";



const uiFunctions = {
    renderCountries: async () => {
        await dataFunctions.applyFilters();
        const data = stateFunctions.getAllCountries();
        const fragment = document.createDocumentFragment(); 
        elements.countriesModule.innerHTML = "";
        data.map(c => {
            const button = document.createElement("button");
            button.className = "country__card";
            button.setAttribute('data-choice',c.name); 
            button.innerHTML = templates.countriesViewTemplate(c);
            fragment.append(button);
        })
        elements.countriesModule.append(fragment);
    },
    renderCountry: async () => {
        elements.detailContainerModule.innerHTML = "";
        await dataFunctions.applyFilters();
        const data = stateFunctions.getAllCountries();
        elements.detailContainerModule.innerHTML = templates.countryViewTemplate(data);
    }
}

export default uiFunctions; 