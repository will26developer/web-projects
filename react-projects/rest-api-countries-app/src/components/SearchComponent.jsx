import React from 'react'
import {icons} from "../icons/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchComponent = () => {
  return (
    <section className="main__search">
        <form className="search__form">
            <input type="text" className="form__input" />
            <button className="form__btn"><FontAwesomeIcon icon={icons.glass}/></button>
        </form>
        <select className="search__region">
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
        </select>
    </section>
  )
}
