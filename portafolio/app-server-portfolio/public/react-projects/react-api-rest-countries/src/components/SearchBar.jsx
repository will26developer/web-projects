import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchBar = ({countryName,setCountryName,countryRegion,setCountryRegion}) => {
    const handleInput = e => {
       setCountryName(e.target.value)
    }

    const handleSelect = e => {
        setCountryRegion(e.target.value)
    }
    return(
        <section className="main__choice">
            <form action="#" className="choice__form">
                <input type="text" name="input-country" className="form__input" value={countryName} onChange={handleInput}/>
                <button type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <select name="select-region" value={countryRegion} className="choice__select" onChange={handleSelect}>
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
            </select>
        </section>
    )
}

export default SearchBar; 