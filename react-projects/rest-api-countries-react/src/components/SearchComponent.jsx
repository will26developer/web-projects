import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const SearchComponent = ({ countryName, setCountryName, countryRegion, setCountryRegion }) => {
  const regex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{3,50}$/;
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const countryValidation = (regex, name) => {
      if (regex.test(name) || name === "") {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }

    countryValidation(regex, countryName);
  }, [countryName]);

  return (
    <>
      <form action="#" className="search__form">
        <input type="text" className="form__input" placeholder="Country name..." value={countryName} onChange={(e) => setCountryName(e.target.value)} />
        <button type="submit" className="form__btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        {isValid ? null : <p className="form__validation">Invalid country name...</p>}
      </form>
      <select name="region" className="search__region" value={countryRegion} onChange={(e) => setCountryRegion(e.target.value)}>
        <option value="hidden">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  )
}

export default SearchComponent;
