

const countriesViewTemplate = country => {
    let {name,flags,population,region,capital} = country;
    return ` 
       <div class="card__flag">
          <img src=${flags.png} alt=${flags.alt} class="flag__bg">
       </div>
       <article class="card__description">
         <h3>${name}</h3>
         <p><strong>Population: </strong>${population}</p>
         <p><strong>Region: </strong>${region}</p>
         <p><strong>Capital: </strong>${capital}</p>
       </article>
    `
}

export default countriesViewTemplate;
