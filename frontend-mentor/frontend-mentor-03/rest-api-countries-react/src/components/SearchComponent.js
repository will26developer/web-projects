import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchComponent = ({ country, setCountry, region, setRegion }) => {
  const [error, setError] = useState(false);
  const regex = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/;
  const validateForm = (e) => {
    e.preventDefault();
    if (country.trim() && regex.test(country)) {
      setError(false);
      return;
    } else {
      setError(true);
    }
  };
  return (
    <section className="main__search">
      <form className="search__form" onSubmin={e => validateForm(e)}>
        <input
          className="form__input"
          name="countryName"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="form__btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <p className="form__alert">{error && "Invalid country name"}</p>
      </form>
      <select
        className="search__select"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="hidden">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
