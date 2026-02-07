
window.addEventListener("DOMContentLoaded", () => {
    //DOM elements
    const elements = {
        bodyBg: document.getElementById("body-bg"),
        themeBtn: document.getElementById("theme-btn"),
        themeIcon: document.getElementById("theme-icon"),
        themeText: document.getElementById("theme-text"),
        choiceContainer: document.getElementById("container-choice"),
        inputCountry: document.getElementById("input-country"),
        selectRegion: document.getElementById("select-region"),
        countriesContainer: document.getElementById("countries-container"),
        countryDetails: document.getElementById("country-details"),
        btnBack: document.getElementById("btn-back"),
        detailsContainer: document.getElementById("details-container"),
        errorContainer: document.getElementById("error-container"),
        btnErrorBack: document.getElementById("btn-error-back"),
        errorMessage: document.getElementById("error-message"),
        loadingSpinner: document.getElementById("loading-spinner"),

    }

    //Global state 
    const state = {
        filter: {
            name: "",
            region: ""
        },
        countriesData: [],
        loading: false,
        error: false,
        theme: "light-theme"
    }

    //Validate country name
    const validCountryName = name => /^[A-Za-zÀ-ÿ\s]{2,60}$/.test(name);

    //Fetching Countries
    const fetchCountries = async () => {
        let { name, region } = state.filter;
        let param = new URLSearchParams();
        if (name && validCountryName(name)) param.append("name", name);
        if (region) param.append("region", region);
        let query = param.toString();

        try {
            state.loading = true;
            state.error = false;
            showLoading();
            const response = await fetch(`http://localhost:3300/api/countries?${query}`);
            const data = await response.json();
            state.countriesData = data.data;
            state.loading = false;
            return state.countriesData;
        } catch (error) {
            console.log("Error:", error);
            state.loading = false;
            state.error = true;
            return null;
        } finally {
            state.loading = false;
            hideLoading();
        }
    }

    //Render
    const renderCountriesView = async () => {
        elements.countriesContainer.innerHTML = "";
        let data = await fetchCountries()
        if (!Array.isArray(data)) {
            elements.countriesContainer.innerHTML = "<p>No results</p>";
            return;
        }

        const fragment = document.createDocumentFragment();
        data.forEach(({ name, flags, population, region, capital }) => {
            const article = document.createElement("article");
            article.className = "countries__card";
            article.id = name.common;
            article.innerHTML = `
              <div class="card__flag">
                <img src=${flags.png} alt=${flags.alt} class="flag__bg">
              </div>
              <div class="card__info">
                <h3 class="">${name.common}</h3>
                <p><strong>Population:</strong>${population}</p>
                <p><strong>Region:</strong>${region}</p>
                <p><strong>Capital:</strong>${capital}</p>
              </div>
            `
            fragment.append(article);
        })
        elements.countriesContainer.append(fragment);
    }

    const renderCountryDetailView = async () => {
        elements.detailsContainer.innerHTML = "";
        let data = await fetchCountries();
        if (!Array.isArray(data)) {
            elements.detailsContainer.innerHTML = "<p>No results</p>";
            return;
        }
        let { name, flags, population, region, subregion, capital, tld, languages, currencies } = data[0];
        let nativeName = Object.values(name.nativeName)[0].common || name.common;
        let tlDomain = Object.values(tld).join(", ");
        let language = Object.values(languages).join(", ");
        let currencie = Object.values(currencies)[0].name;
        elements.detailsContainer.innerHTML = `
            <div class="detail__flag">
              <img src=${flags.png} alt=${flags.alt} class="flag__detail">
            </div>
            <div class="detail__container">
              <h1 class="container__title">${name.common}</h1>
              <div class="container__item">
                <p class="item__p"><strong class="p__strong">Native Name: </strong>${nativeName}</p>
                <p class="item__p"><strong class="p__strong">Population: </strong>${population}</p>
                <p class="item__p"><strong class="p__strong">Region: </strong>${region}</p>
                <p class="item__p"><strong class="p__strong">Sub Region: </strong>${subregion}</p>
                <p class="item__p"><strong class="p__strong">Capital: </strong>${capital}</p>
              </div>
              <div class="container__item">
                <p class="item__p"><strong class="p__strong">Top Level Domain: </strong>${tlDomain}</p>
                <p class="item__p"><strong class="p__strong">Currencies: </strong>${currencie}</p>
                <p class="item__p"><strong class="p__strong">Languages: </strong>${language}</p>
              </div>
            </div>
          `
    }

    const renderViewError = message => elements.errorMessage.textContent = message;

    //Views 
    const countriesView = {
        mount: async () => {
            elements.choiceContainer.classList.remove("hidden");
            elements.countriesContainer.classList.remove("hidden");
            elements.countryDetails.classList.add("hidden");
            await renderCountriesView()
        },
        unmount: () => {
            elements.choiceContainer.classList.add("hidden");
            elements.countriesContainer.classList.add("hidden");
            elements.countryDetails.classList.remove("hidden")
            state.filter.name = "";
            state.filter.region = "";
        }
    };

    const countryDetailView = {
        mount: () => {
            elements.countryDetails.classList.remove("hidden");
            elements.countriesContainer.classList.add("hidden");
            elements.choiceContainer.classList.add("hidden");
            renderCountryDetailView()
        },
        unmount: () => {
            elements.countryDetails.classList.add("hidden");
            elements.countriesContainer.classList.remove("hidden");
            elements.choiceContainer.classList.remove("hidden");
            state.filter.name = "";
        }
    }

    const errorView = {
        mount: () => {
            elements.choiceContainer.classList.add("hidden");
            elements.countriesContainer.classList.add("hidden");
            elements.countryDetails.classList.contains("hidden") && elements.countryDetails.classList.add("hidden");
            elements.errorContainer.classList.remove("hidden");
            renderViewError("Invalid route, the URL you entered is not valid.")
        },
        unmount: () => {
            elements.choiceContainer.classList.remove("hidden");
            elements.countriesContainer.classList.remove("hidden");
            elements.countryDetails.classList.contains("hidden") && elements.countryDetails.classList.add("hidden");
            elements.errorContainer.classList.add("hidden");
        }
    }

    //listeners functions
    let timeoutId;
    const listenersFunctions = {
        handleInput: e => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                state.filter.name = e.target.value;
                renderCountriesView()
            }, 500)
        },
        handleSelect: e => {
            state.filter.region = e.target.value;
            renderCountriesView()
        },
        handleTheme: e => {
            if (state.theme === "light-theme") {
                state.theme = "dark-theme";
                elements.themeIcon.className = "fa-regular fa-sun";
                elements.themeText.textContent = "Light Mode";
                elements.bodyBg.className = state.theme;
                localStorage.setItem("theme", JSON.stringify({ theme: state.theme }));
            } else {
                state.theme = "light-theme";
                elements.themeIcon.className = "fa-regular fa-moon";
                elements.themeText.textContent = "Dark Mode";
                elements.bodyBg.className = state.theme;
                localStorage.setItem("theme", JSON.stringify({ theme: state.theme }));
            }
        },
        handleClickCard: e => {
            const element = e.target.closest(".countries__card");
            if (!element) return;
            state.filter.name = element.id;
            location.hash = `/country/${encodeURIComponent(element.id)}`;
        },
        returnBack: e => {
            elements.countryDetails.classList.add("hidden");
            elements.countriesContainer.classList.remove("hidden");
            elements.choiceContainer.classList.remove("hidden");
            location.hash = "/countries"
        },
        errorComeBack: e => {
            errorView.unmount();
            location.hash = "/countries";
        }
    }

    //Listener for elements
    const initListeners = () => {
        elements.themeBtn.addEventListener("click", listenersFunctions.handleTheme);
        elements.btnBack.addEventListener("click", listenersFunctions.returnBack);
        elements.inputCountry.addEventListener("input", listenersFunctions.handleInput);
        elements.selectRegion.addEventListener("change", listenersFunctions.handleSelect);
        elements.countriesContainer.addEventListener("click", listenersFunctions.handleClickCard);
        elements.btnErrorBack.addEventListener("click", listenersFunctions.errorComeBack);
    }

    const showLoading = () => {
        elements.loadingSpinner.classList.remove("hidden");
    };

    const hideLoading = () => {
        elements.loadingSpinner.classList.add("hidden");
    };


    /*Init in app */
    //Initialize theme function
    const initializeThemeStorage = () => localStorage.setItem("theme", JSON.stringify({ theme: state.theme }));
    //Router
    const router = () => {
        const [, route, param] = location.hash.split("/");
        countriesView.unmount();
        countryDetailView.unmount();
        errorView.unmount();
        if (route === "" || route === "countries") {
            countriesView.mount()
        } else if (route === "country" && param) {
            state.filter.name = decodeURIComponent(param);
            countryDetailView.mount();
        } else {
            errorView.mount()
        }
    }

    const initApp = () => {
        initializeThemeStorage();
        initListeners()
        router();
        window.addEventListener("hashchange", router);
    }
    initApp();

})