import { useNavigate, useParams } from "react-router-dom";
import { useRestApiCountries } from "../hooks/useRestApiCountries"
import { useEffect } from "react";
import { useFetchCountries } from "../hooks/useFetchCountries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../icons/icons.js";

export const CountryComponent = () => {
  const { country } = useParams();
  const { state, dispatch } = useRestApiCountries();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "SET_FILTER_NAME",
      payload: country
    })

  }, [country])
  useFetchCountries();

  const handleClickBtnBack = e => {
    navigate("/countries");
  }

  let countryShow = state.countries;
  let { name, nativeName, flags, population, region, subregion, capital, tld, languages, currencies } = countryShow[0];

  return (
    <section className="main__country">
      <div className="country__btn">
        <button className="btn__back" onClick={handleClickBtnBack}><FontAwesomeIcon icon={icons.arrowLeft} /> Back</button>
      </div>
      <article className="country__detail">
        <div className="detail__flag">
          <img src={flags.png} alt={flags.alt} className="flag__detail" />
        </div>
        <div className="detail__container">
          <h3 className="container__title">{name}</h3>
          <div className="container__item">
            <p><strong>Native Name: </strong>{nativeName}</p>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Sub Region: </strong>{subregion}</p>
            <p><strong>Capital: </strong>{capital}</p>
          </div>
          <div class="container__item">
            <p><strong>Top Level Domain: </strong>{tld}</p>
            <p><strong>Currencies: </strong>{currencies}</p>
            <p><strong>Languages: </strong>{languages}</p>
          </div>
        </div>

      </article>
    </section>
  )
}

