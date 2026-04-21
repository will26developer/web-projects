import { useNavigate } from "react-router-dom";

export const Archive = () => {
  const navigate = useNavigate();

  const handlerClickBackHome = e => [
    navigate("/")
  ]
  return (
    <section id="archive" className="section">
      <div className="container">
        <div className="container-btn">
          <button type="button" className="btn-back" onClick={handlerClickBackHome}><i className="fa-solid fa-arrow-left"></i><span>Home</span></button>
        </div>

        <h2 className="section-label">02. Project Archive</h2>

        <div className="archive-grid">
        </div>
      </div>
    </section>
  );
}
