import { useNavigate } from "react-router-dom";

export const Featured = () => {
  const navigate = useNavigate();

  const handlerClickBackHome = e => {
    navigate("/")
  }
  return (
    <section id="featured" className="section">
      <div className="container">
        <div className="container-btn">
          <button type="button" className="btn-back" onClick={handlerClickBackHome}><i className="fa-solid fa-arrow-left"></i><span>Home</span></button>
        </div>

        <h2 className="section-label">01. Masterpiece</h2>

        <div className="master-card">
          <div className="card-body">
            <div className="card-header">
              <h3>REST Countries Fullstack App</h3>
              <span className="tag">React + BFF</span>
            </div>

            <p>
              A fullstack Single Page Application built with React that consumes country data through a custom Backend-for-Frontend (BFF).
              The architecture focuses on performance, state predictability, and clean separation of concerns.
            </p>

            <ul className="feature-list">
              <li>Client-side routing with React Router for seamless SPA navigation</li>
              <li>Global state management using Context API + useReducer pattern</li>
              <li>BFF layer that fetches and caches data from an external REST Countries API</li>
              <li>Optimized data flow to reduce redundant API calls and improve performance</li>
              <li>Modular and scalable architecture ready for production-grade features</li>
            </ul>

            <div className="card-footer">
              <a
                href="https://web-projects-4jun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Live Demo <i className="fas fa-external-link-alt"></i>
              </a>

              <a
                href="https://github.com/will26developer/web-projects/tree/main/react-projects/rest-countries-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Source Code <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
