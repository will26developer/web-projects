import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const CountryDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {name,flags,population,region,subregion,capital,tld,languages,currencies} = state
  const nativeName = Object.values(name.nativeName)[0].common;
  const tlDomain = Object.values(tld).join(", ");
  const language = Object.values(languages).join(", ")
  const currencie = Object.values(currencies)[0].name;
  return (
    <section className='main__detail-country'>
      <div className='detail__btn'>
        <button className='btn__back' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/> Back</button>
      </div>
      <article className='detail__container'>
        <div className='container__flag'>
          <img src={flags.png} alt={flags.alt} className='flag__flag'/>
        </div>
        <div className='container__description'>
          <h3 className='description__title detail__title'>{name.common}</h3>
          <div className='description__item'>
            <p className='item__p'><strong className='p__strong'>Native Name: </strong>{nativeName}</p>
            <p className='item__p'><strong className='p__strong'>Population: </strong>{population}</p>
            <p className='item__p'><strong className='p__strong'>Region: </strong>{region}</p>
            <p className='item__p'><strong className='p__strong'>Sub Region: </strong>{subregion}</p>
            <p className='item__p'><strong className='p__strong'>Capital: </strong>{capital}</p>
          </div>
          <div className='description__item'>
            <p className='item__p'><strong className='p__strong'>Top Level Domain: </strong>{tlDomain}</p>
            <p className='item__p'><strong className='p__strong'>Currencies: </strong>{currencie}</p>
            <p className='item__p'><strong className='p__strong'>Languages: </strong>{language}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default CountryDetail;
