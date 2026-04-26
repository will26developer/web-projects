import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';

export const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="main__error">
        <button className='error__back' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/> Back</button>
        <h1 className="error__title">Error 404</h1>
        <p className="error__p">Route or resource not found</p>
    </section>
  )
}