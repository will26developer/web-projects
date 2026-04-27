import { useEffect, useState } from "react"
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../icons/icons.js";

let timeout;

export const SearchComponent = () => {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const { dispatch } = useRestApiCountries();

  useEffect(() => {
    timeout = setTimeout(() => {
      dispatch({
        type: "SET_FILTER_NAME",
        payload: name
      })
    }, 300);
    return () => clearTimeout(timeout);
  }, [name])

  useEffect(() => {
    dispatch({
      type: "SET_FILTER_REGION",
      payload: region
    })
  }, [region])

  return (
    <section className="main__search">
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={name} className="form__input" onChange={e => setName(e.target.value)} />
        <button type="button" className="form__btn"><FontAwesomeIcon icon={icons.glass} /></button>
      </form>
      <select className="search__region" value={region} onChange={e => setRegion(e.target.value)}>
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Ocenia</option>
      </select>
    </section>
  )
}

