import React from "react";
import { useNavigate } from "react-router-dom";
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { useFilterCountries } from "../hooks/useFilterCountries";

export const CountriesComponent = () => {
  const { state} = useRestApiCountries();
  const { data, filters, ui } = state;
  const filteredCountries = useFilterCountries(data, filters);
  const navigate = useNavigate();

  const handlerClickCardBtn = e => {
    const element = e.target.closest("[data-choice]")
    if (!element) return;
    const country = element.dataset.choice;
    navigate(`/country/${country}`)
  }
  return (
    <section className="main__countries" onClick={ e => handlerClickCardBtn(e)}>
      {!ui.loading ? (
        filteredCountries.length > 0 ? (
          filteredCountries.map(({ name, flags, population, region, capital }) => (
            <button key={name} data-choice={name} className="country__card">
              <div className="card__flag">
                <img src={flags.png} alt={flags.alt} className="flag__bg"/>
              </div>
              <article className="card__description">
                <h3>{name}</h3>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Capital: </strong>{capital}</p>
              </article>
            </button>
          ))
        ) : (
          <p>No country found</p>
        )
      ) : (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </section>
  );
};