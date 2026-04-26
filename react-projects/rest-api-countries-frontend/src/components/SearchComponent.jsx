import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useRestApiCountries } from '../hooks/useRestApiCountries'
import { useDebounce } from "../hooks/useDebounce.js";

export const SearchComponent = () => {
  const [name,setName] = useState("");
  const [region,setRegion] = useState("");
  const {dispatch} = useRestApiCountries();

  const countryName = useDebounce(name,300);

  useEffect(() => {
    dispatch({
        type:"SET_FILTER_NAME",
        payload:countryName
    })
  },[countryName]);

  useEffect(() => {
    dispatch({
        type:"SET_FILTER_REGION",
        payload:region
    })
  },[region]);

  return (
    <section className="main__search">
        <form className="search__form" onSubmit={e => e.preventDefault()}>
            <input type="text" className="form__input" value={name} onChange={e => setName(e.target.value)}/>
            <button className='form__btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </form>
        <select className="search__region" value={region} onChange={e => setRegion(e.target.value)}>
            <option value="">Filter By Region</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
        </select>
    </section>
  )
}
