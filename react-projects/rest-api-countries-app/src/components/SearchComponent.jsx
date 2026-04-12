import React, { useEffect, useState } from "react";
import { icons } from "../icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { useDebouce } from "../hooks/useDebounce";

export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const { dispatch } = useRestApiCountries();

  const country = useDebouce(search, 300);

  useEffect(() => {
    dispatch({
      type: "SET_FILTER_NAME",
      payload: country,
    });
  }, [country]);

  useEffect(() => {
    dispatch({
      type: "SET_FILTER_REGION",
      payload: region,
    });
  },[region]);

  return (
    <section className="main__search">
      <form className="search__form" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          className="form__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="form__btn">
          <FontAwesomeIcon icon={icons.glass} />
        </button>
      </form>
      <select
        className="search__region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
