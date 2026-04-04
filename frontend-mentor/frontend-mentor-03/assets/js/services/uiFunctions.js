import elements from "../elements/elements.js";
import templates from "../templates/templates.js";
import dataFunctions from "./dataFunctions.js";
import stateFunctions from "./stateFunctions.js";

const uiFunctions = {
  renderCountries: async () => {
    stateFunctions.setLoading(true);

    elements.countriesModule.innerHTML = `
    <div class="spinner-container">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `;

    await dataFunctions.applyFilters();

    const data = stateFunctions.getAllCountries();

    const fragment = document.createDocumentFragment();

    if (data.length > 0) {
      data.forEach((c) => {
        const button = document.createElement("button");
        button.className = "country__card";
        button.setAttribute("data-choice", c.name);
        button.innerHTML = templates.countriesViewTemplate(c);
        fragment.append(button);
      });
      elements.countriesModule.innerHTML = "";
      elements.countriesModule.append(fragment);
    } else {
      stateFunctions.setLoading(false);
      elements.countriesModule.innerHTML =
        "<p>Country not found, please try again...</p>";
    }
  },
  renderCountry: async () => {
    stateFunctions.setLoading(true);

    elements.detailContainerModule.innerHTML = `
    <div class="spinner-container">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `;
    await dataFunctions.applyFilters();
    const data = stateFunctions.getAllCountries();

    if (data.length > 0) {
      elements.detailContainerModule.innerHTML =
        templates.countryViewTemplate(data);
    } else {
      stateFunctions.setLoading(false);
      elements.detailContainerModule.innerHTML =
        "<p>Country not found, please try again...</p>";
    }
  },
};

export default uiFunctions;
