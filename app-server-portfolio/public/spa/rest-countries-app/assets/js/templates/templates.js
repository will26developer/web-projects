


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

    }
}

export default templates; 