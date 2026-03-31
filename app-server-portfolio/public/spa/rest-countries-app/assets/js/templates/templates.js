


const templates = {
    countriesViewTemplate: (c) => {
        let {name,flag,population,region,capital} = c;
        return `
          <div class="card__flag">
            <img src=${flag.png} alt=${flag.alt}>
          </div>
          <article class="card__description">
            <h2 class="description__title">${name}</h2> 
            <p class="description__p"><strong class="p__strong">Population: </strong>${population}</p>
            <p class="description__p"><strong class="p__strong">Region: </strong>${region}</p>
            <p class="description__p"><strong class="p__strong">Capital: </strong>${capital}</p>
          </article>
        `
    },
    countryViewTemplate: (c) => {
        let {name,flag,nativeName,population,region,subregion,capital,tld,languages,currencies} = c[0];
        return `
        <div class="detail__flag">
          <img src=${flag.png} alt=${flag.alt} class="flag__detail">
        </div>
        <div class="detail__container">
          <h3>${name}</h3>
          <div class="container__item">
            <p><strong>Native Name: </strong>${nativeName.common}</p>
            <p><strong>Population: </strong>${population}</p>
            <p><strong>Region: </strong>${region}</p>
            <p><strong>Sub Region: </strong>${subregion}</p>
            <p><strong>Capital: </strong>${capital}</p>
          </div>
          <div class="container__item">
            <p><strong>Top Level Domain: </strong>${tld}</p>
            <p><strong>Currencies: </strong>${currencies}</p>
            <p><strong>Languages: </strong>${languages}</p>
          </div>
        </div>
        `
    }
}

export default templates; 