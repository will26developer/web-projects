import React from "react";

const CountryDetil = ({country}) => {
  const {name,flags,population,region,subregion,capital,tld,currencies,languages} = country[0];
  let nativeName = Object.values(name.nativeName)[0].common;
  let tlDomain = Object.values(tld).join(", ");
  let currencie = [Object.values(currencies).map(item => item.name)].join(",  ");
  let language = Object.values(languages).join(", ");
  return(
    <div className="country__detail">
      <div className="detail__flag">
        <img src={flags.png} alt={flags.alt} className="flag__detail"/>
      </div>
      <div className="detail__container">
        <h1 className="container__title">{name.common}</h1>
        <div className="container__item">
          <p className="item__p"><strong className="p__strong">Native Name:</strong>{nativeName}</p>
          <p className="item__p"><strong className="p__strong">Population: </strong>{population}</p>
          <p className="item__p"><strong className="p__strong">Region: </strong>{region}</p>
          <p className="item__p"><strong className="p__strong">Sub Region: </strong>{subregion}</p>
          <p className="item__p"><strong className="p__strong">Capital: </strong>{capital}</p>
        </div>
        <div className="container__item">
          <p className="item__p"><strong className="p__strong">Top Level Domain: </strong>{tlDomain}</p>
          <p className="item__p"><strong className="p__strong">Currencies: </strong>{currencie}</p>
          <p className="item__p"><strong className="p__strong">Languages: </strong>{language}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetil;
