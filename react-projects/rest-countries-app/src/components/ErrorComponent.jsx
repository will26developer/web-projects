import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../icons/icons.js";
import { useNavigate } from "react-router-dom";


export const ErrorComponent = () => {
  const navigate = useNavigate();

  const handleClickBackHome = e => {
    navigate("/countries")
  }
  return (
    <section className="main__error">
      <button className="error__back" onClick={handleClickBackHome}>
        <FontAwesomeIcon icon={icons.arrowLeft} />
        Back Home
      </button>
      <h3 className="error__title">404</h3>
      <p className="error__p">Page or resource not found</p>
    </section>
  )
}

