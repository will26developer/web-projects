import React from 'react'
import { Link } from 'react-router-dom'

export const CountryItem = ({item}) => {
    const {name,flags,population,capital,region} = item;
  return (
    <Link to={`/countries/country/${name.common}`} state={item}className='country__card'>
        <div className='card__flag'>
            <img src={flags.png} alt={flags.alt} className='flag__bg'/>
        </div>
        <div className='card__description'>
            <h3 className='description__title'>{name.common}</h3>
            <p className='description__p'><strong className='p__strong'>Population: </strong>{population}</p>
            <p className='description__p'><strong className='p__strong'>Region: </strong>{region}</p>
            <p className='description__p'><strong className='p__strong'>Capital: </strong>{capital}</p>
        </div>
    </Link>
  )
}
