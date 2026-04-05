import elements from "../elements/elements.js";
import dataFunctions from "./dataFunctions.js";
import countriesViewTemplate from "../templates/countriesViewTemplate.js";
import countryViewTemplate from "../templates/countryViewTemplate.js";

const uiFunctions = {
  renderCountries: () => {
    let countries = dataFunctions.getFilteredCountries();

    if (countries.length > 0) {
      elements.countriesModule.innerHTML = "";
      const fragment = document.createDocumentFragment();
      countries.forEach((country) => {
        const button = document.createElement("button");
        button.setAttribute("data-choice", country.name);
        button.className = "country__card";
        button.innerHTML = countriesViewTemplate(country);
        fragment.append(button);
      });
      elements.countriesModule.append(fragment);
    } else {
      elements.countriesModule.innerHTML =
        "<p>Country not found, please try again...</p>";
    }
  },
  renderCountry: () => {
    let country = dataFunctions.getFilteredCountries();
    elements.detailContainerModule.innerHTML = "";
    if (country.length > 0) {
      elements.detailContainerModule.innerHTML = countryViewTemplate(country[0]);
    } else {
      elements.detailContainerModule.innerHTML =
        "<p>Country not found, please try again...</p>";
    }
  },
};

export default uiFunctions;
