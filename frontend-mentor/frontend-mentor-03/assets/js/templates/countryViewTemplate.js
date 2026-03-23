

const countryViewTemplate = (country) => {
    let { name, capital, currencies, flags, population, region, subregion, languages } = country;
    const currency = Object.values(currencies)[0].name;
    const language = Object.values(languages).join(", ");
    const nativeName = Object.values(name.nativeName)[0].official;
    return `
        <div class="detail__flag">
            <img src="${flags.png}" alt="Flag of ${name.common}">
        </div>
        <div class="detail__container">
            <h2 class="container__title">${name.common}</h2>
                <div class="container__item">
                    <p><strong>Native Name:</strong> ${nativeName}</p>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Region:</strong> ${region}</p>
                    <p><strong>Sub Region:</strong> ${subregion}</p>
                    <p><strong>Capital:</strong> ${capital ? capital[0] : "N/A"}</p>
                </div>
                <div class="container__item">
                    <p><strong>Currencies:</strong> ${currency}</p>
                    <p><strong>Languages:</strong> ${language}</p>
                </div>
        </div>
    `
}

export default countryViewTemplate;