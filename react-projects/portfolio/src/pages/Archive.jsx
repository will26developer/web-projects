import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
export const Archive = () => {
  const navigate = useNavigate();

  const handlerClickBackHome = (e) => {
    navigate("/");
  };
  return (
    <section id="archive" className="section">
      <div className="container">
        <div className="container-btn">
          <button
            type="button"
            className="btn-back"
            onClick={handlerClickBackHome}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Home</span>
          </button>
        </div>

        <h2 className="section-label">02. Project Archive</h2>
        <div className="archive-grid ">
          <div className="grid-title">
            <h3 className="title-grid">Statics and frontend projects</h3>
          </div>
          <div className="grid-container">
            {projects.frontend.map(({ img, url, id }) => {
              return (
                <div className="container-img" key={url}>
                  <a href={url} target="_blank">
                    <img
                      src={img}
                      alt={`frontend-${id + 1}`}
                      className="img-hero"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="archive-grid">
          <div className="grid-title">
            <h3 className="title-grid">Fullstack Projects</h3>
          </div>
           {projects.fullstack.map(({ img, url, id }) => {
              return (
                <div className="container-img" key={url}>
                  <a href={url} target="_blank">
                    <img
                      src={img}
                      alt={`frontend-${id + 1}`}
                      className="img-hero"
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
