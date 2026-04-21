import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="code-comment">// Frontend / Full-Stack Developer</p>

          <h1>
            Engineering <span className="gradient-text">Scalable</span> Interfaces
          </h1>

          <p className="hero-desc">
            Specialized in <strong>clean project architecture</strong> and SPA behavior without blindly relying on frameworks.
            I build tools that demonstrate frameworks are choices, not requirements.
          </p>

          <div className="btn-group">
            <Link to="/featured" className="btn btn-main">View Masterpiece</Link>
            <Link to="/archive" className="btn btn-ghost">Browse Archive</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
