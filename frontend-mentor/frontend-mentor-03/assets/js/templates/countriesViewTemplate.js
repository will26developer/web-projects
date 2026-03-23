

const countriesViewTemplate = country => {
    let {name,flags,population,region,capital} = country;

    return `
        <div class="card__flag">
          <img src=${flags.png} alt=${flags.alt} class="flag__bg">
        </div>
        <div class="card__description">
           <h2>${name.common}</h2>
           <p><strong>Population: </strong>${population}</p>
           <p><strong>Region: </strong>${region}</p>
           <p><strong>Capital: </strong>${capital}</p>
        </div>
    `
}

export default countriesViewTemplate;