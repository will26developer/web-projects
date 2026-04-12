import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../icons/icons';
import { useNavigate } from 'react-router-dom';

export const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="main__error">
        <button className='error__back' onClick={() => navigate(-1)}><FontAwesomeIcon icon={icons.arrowLeft}/> Back</button>
        <h1 className="error__title">Error 404</h1>
        <p className="error__p">Route or resource not found</p>
    </section>
  )
}
