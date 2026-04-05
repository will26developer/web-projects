


const countryViewTemplate = country => {
    let {name,nativeName,flags,population,region,subregion,capital,tld,languages,currencies} = country;

    return `
      <div class="detail__flag">
        <img src=${flags.png} alt=${flags.alt} class="flag__detail">
      </div>
      <div class="detail__container">
         <h3 class="container__title">${name}</h3>
         <div class="container__item">
           <p><strong>Native Name: </strong>${nativeName}</p>
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

export default countryViewTemplate;