import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column text-white"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#0f5132,#146c43)",
        width: "260px"
      }}
    >
      {/* Logo */}
      <div className="p-4 border-bottom border-success">
        <h5 className="fw-bold mb-0">
          🌲 REGISTRO
        </h5>

        <small>
          IMPRESE FORESTALI
        </small>
      </div>

      {/* Menu */}
      <div className="p-3">

        <Link
          to="/"
          className="btn btn-success w-100 text-start mb-3"
        >
          <i className="bi bi-search me-2"></i>
          Ricerca Imprese
        </Link>

        <Link
          to="/"
          className="btn btn-outline-light w-100 text-start mb-3"
        >
          <i className="bi bi-table me-2"></i>
          Tutte le Imprese
        </Link>

        <button
          className="btn btn-outline-light w-100 text-start"
        >
          <i className="bi bi-download me-2"></i>
          Esporta dati
        </button>

      </div>

    

    </div>
  );
}

export default Sidebar;