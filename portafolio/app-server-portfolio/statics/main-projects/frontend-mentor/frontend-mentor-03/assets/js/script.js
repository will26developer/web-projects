window.addEventListener("DOMContentLoaded", () => {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,languages,currencies";
  const body = document.querySelector("body");
  const headerBtn = document.querySelector(".header__btn");
  const iconBtn = document.querySelector(".fa-regular");
  const btnSpan = document.querySelector(".btn__span");
  const mainSearch = document.querySelector(".main__search");
  const searchForm = document.querySelector(".search__form");
  const formInput = document.querySelector(".form__input");
  const searchRegion = document.querySelector(".search__region");
  const mainCountries = document.querySelector(".main__countries");
  const mainCountry = document.querySelector(".main__country");
  const btnBack = document.querySelector(".btn__back");
  const countryDetail = document.querySelector(".country__detail");
  const mainError = document.querySelector(".main__error");
  const errorMessage = document.querySelector(".error__p")
  const errorBack = document.querySelector(".error__back");
  const filters = {
    name: "",
    region: ""
  }
  let countriesData = [];
  const regex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{3,50}$/;

  const applyTheme = (theme) => {
    if (theme === "dark-mode") {
      body.className = "dark-mode";
      iconBtn.className = "fa-regular fa-sun";
      btnSpan.textContent = "Light Mode";
    } else {
      body.className = "light-mode";
      iconBtn.className = "fa-regular fa-moon";
      btnSpan.textContent = "Dark Mode";
    }
  };

  const savedTheme = localStorage.getItem("theme") || "light-mode";
  applyTheme(savedTheme);

  const getCountries = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const hashParam = param => encodeURIComponent(param);

  const validCountry = (regex, name) => regex.test(name);

  const filterByName = (countries, countryName) => countries.filter(country => country.name.common.toLowerCase().includes(countryName.trim().toLowerCase()));

  const filterByRegion = (countries, region) => {
    if (!region || region === "") return countries;
    return countries.filter(country => country.region === region);
  }

  const countryCard = country => {
    const { name, flags, population, region, capital } = country;
    return `
      <div class="card__flag">
        <img src=${flags.png} alt=${flags.alt} class="flag__bg">
      </div>
      <div class="card__description">
        <h3 class="description__title">${name.common}</h3>
        <p class="description__p"><strong class="p__strong">Population:</strong> ${population}</p>
        <p class="description__p"><strong class="p__strong">Region:</strong> ${region}</p>
        <p class="description__p"><strong class="p__strong">Capital:</strong> ${capital}</p>
      </div>
    `
  }

  const countryDetailInfo = country => {
    const { name, flags, population, region, subregion, capital, tld, languages, currencies } = country;
    let nativeName = Object.values(name.nativeName)[0].common || name.common;
    let tlDomain = Object.values(tld).join(", ");
    let language = Object.values(languages).join(", ");
    let currencie = Object.values(currencies)[0].name;
    return `
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

  const renderCountry = countryInfo => {
    mainSearch.classList.add("hidden");
    mainCountries.classList.add("hidden");
    mainCountry.classList.remove("hidden");
    countryDetail.innerHTML = "";
    countryDetail.innerHTML = countryDetailInfo(countryInfo);
  }

  const renderCountries = arrayCountries => {
    mainCountries.classList.remove("hidden");
    mainCountry.classList.add("hidden");
    mainCountries.innerHTML = "";
    const fragment = document.createDocumentFragment();

    arrayCountries.forEach(country => {
      const article = document.createElement("article");
      article.className = "country__card";
      article.id = `${country.name.common}`;
      article.innerHTML = countryCard(country);
      fragment.append(article);
    })

    mainCountries.append(fragment);
  }

  const renderError = message => {
    mainCountries.classList.add("hidden");
    mainCountry.classList.add("hidden")
    mainSearch.classList.add("hidden")
    mainError.classList.remove("hidden")
    errorMessage.textContent = message;
  }

  const hideError = () => {
    errorMessage.textContent = "";
    mainError.classList.add("hidden");
    mainCountries.classList.remove("hidden");
    mainSearch.classList.remove("hidden");
  }

  const applyFilters = () => {
    let results = countriesData;

    if (filters.name) {
      results = filterByName(results, filters.name);
    }

    if (filters.region) {
      results = filterByRegion(results, filters.region);
    }

    renderCountries(results);
  }

  const router = () => {
    const [route, domain, subdomain] = location.hash.split("/");
    if (route && domain === "country" && subdomain) {
      let decodedSubdomain = decodeURIComponent(subdomain);
      let countryInfo = countriesData.find(country => country.name.common.toLowerCase() === decodedSubdomain.trim().toLowerCase());
      if (countryInfo) {
        renderCountry(countryInfo);
      } else {
        renderError("Country not found, the country you are looking for does not exist.")
      }
    } else if (route || (route && domain === "countries")) {
      applyFilters();
    }  else {
      renderError("Invalid route, the URL you entered is not valid.");
    }
  }

  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    let valueName = formInput.value;
    if (validCountry(regex, valueName)) {
      filters.name = valueName;
      applyFilters();
    }
  })

  formInput.addEventListener("input", e => {
    let valueName = e.target.value;
    if (validCountry(regex, valueName)) {
      filters.name = valueName;
      applyFilters()
    }
  })

  searchRegion.addEventListener("change", e => {
    filters.region = e.target.value;
    applyFilters()
  })

  mainCountries.addEventListener("click", e => {
    let element = e.target.closest(".country__card");
    if (!element) return;
    location.hash = `/country/${hashParam(element.id)}`;
  })

  btnBack.addEventListener("click",() => {
    mainCountry.classList.add("hidden");
    mainSearch.classList.remove("hidden");
    mainCountries.classList.remove("hidden");
    location.hash = "#/";
  })

  headerBtn.addEventListener("click",() => {
    // Al cambiar, guardamos la preferencia en localStorage
    if (btnSpan.textContent === "Dark Mode") {
      applyTheme("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      applyTheme("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  })

  errorBack.addEventListener("click", () => {
    location.hash = "#/";
    hideError();
  })

  const initApp = async () => {
    countriesData = await getCountries(url);
    router();
  }

  initApp()
  window.addEventListener("hashchange", router)
})