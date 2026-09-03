
import { useState } from "react";
import { Link } from "react-router-dom";
import imprese from "../data/imprese.json";
import "../styles/home.css";

function Home() {
  const [denominazione, setDenominazione] = useState("");
  const [partitaIva, setPartitaIva] = useState("");
  const [comune, setComune] = useState("");
  const [attivita, setAttivita] = useState("");

  const totaleAddetti = imprese.reduce(
    (totale, impresa) =>
      totale +
      impresa.personale.addettiIndeterminati +
      impresa.personale.addettiDeterminati +
      impresa.personale.addettiStagionali,
    0
  );

const risultati =
  denominazione ||
  partitaIva ||
  comune ||
  attivita
    ? imprese.filter((impresa) => {

        const matchNome =
          (impresa.anagrafica.denominazione ?? "")
            .toLowerCase()
            .includes(denominazione.toLowerCase());

        const matchPiva =
          partitaIva === "" ||
          (impresa.anagrafica.partitaIva ?? "")
            .includes(partitaIva);

        const matchComune =
          comune === "" ||
          impresa.attivita?.some(a =>
            (a.comune ?? "")
              .toLowerCase()
              .includes(comune.toLowerCase())
          );

        const matchAttivita =
          attivita === "" ||
          impresa.attivita?.some(a =>
            (a.tipologie ?? []).some(t =>
              t.toLowerCase().includes(attivita.toLowerCase())
            )
          );

        return (
          matchNome &&
          matchPiva &&
          matchComune &&
          matchAttivita
        );

      })
    : [];

  return (
    <div
      className="container-fluid p-4"
      style={{
        background: "#f5f7fa",
        minHeight: "100vh"
      }}
    >
      <div
        className="hero-card text-white"
       style={{
  backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${import.meta.env.BASE_URL}images/hero-forestas.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">

           <img
  src={`${import.meta.env.BASE_URL}images/forestas-logo.png`}
  alt="Forestas"
  height="80"
  className="me-3"
/>

            <div>
              <h5 className="mb-0 fw-bold">
                Agenzia Forestas
              </h5>

              <small>
                Regione Autonoma della Sardegna
              </small>
            </div>

          </div>


        </div>

        <div className="text-center mt-5">

          <h1 className="display-4 fw-bold">
            Registro Imprese Forestali
          </h1>

          <p className="lead">
            Consultazione delle imprese forestali
            iscritte all'Albo Regionale
          </p>

        </div>

        <div className="search-box mt-5">

         <div className="row g-3">

  <div className="col-md-3">
    <input
      className="form-control"
      placeholder="Denominazione"
      value={denominazione}
      onChange={(e) => setDenominazione(e.target.value)}
    />
  </div>

  <div className="col-md-3">
    <input
      className="form-control"
      placeholder="Comune in cui ha operato"
      value={comune}
      onChange={(e) => setComune(e.target.value)}
    />
  </div>

  <div className="col-md-3">
    <input
      className="form-control"
      placeholder="Attività"
      value={attivita}
      onChange={(e) => setAttivita(e.target.value)}
    />
  </div>

  <div className="col-md-2">
    <input
      className="form-control"
      placeholder="P. IVA"
      value={partitaIva}
      onChange={(e) => setPartitaIva(e.target.value)}
    />
  </div>

  <div className="col-md-1">
    <button className="btn btn-success w-100">
      Cerca
    </button>
  </div>

</div>

        </div>

      </div>

      {/* STATISTICHE */}

      <div className="row mt-4">

        <div className="col-md-8">

          <div className="stat-card">

            <h2>{imprese.length}</h2>

            <small>
              Imprese registrate
            </small>

          </div>

        </div>

      

        <div className="col-md-8">

          <div className="stat-card">

            <h2>2026</h2>

            <small>
              Ultimo aggiornamento
            </small>

          </div>

        </div>

      </div>

      {/* RISULTATI */}

      {risultati.length > 0 && (

        <div className="mt-5">

          <div className="card shadow-sm border-0">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4>
                  Risultati Ricerca
                </h4>

                <span className="badge bg-success">
                  {risultati.length} imprese
                </span>

              </div>

             <div className="row">

  {risultati.map((impresa) => {

    const totaleAddetti =
      (impresa.personale?.addettiIndeterminati || 0) +
      (impresa.personale?.addettiDeterminati || 0) +
      (impresa.personale?.addettiStagionali || 0);

    return (

      <div
        key={impresa.id}
        className="col-lg-4 col-md-6 mb-4"
      >

        <div className="card impresa-card h-100 border-0 shadow-sm">

          <div className="card-body d-flex flex-column">

            <div className="mb-3">

              <span className="badge bg-success mb-2">
                Impresa Forestale
              </span>

              <h5 className="fw-bold">
                {impresa.anagrafica?.denominazione}
              </h5>

            </div>

            <p className="text-muted mb-1">
              P.IVA:
              {" "}
              {impresa.anagrafica?.partitaIva}
            </p>

            <p className="mb-1">
              Addetti:
              {" "}
              {totaleAddetti}
            </p>

            <p className="mb-3">
              Attività:
              {" "}
              {impresa.attivita?.length || 0}
            </p>

            <div className="mt-auto">

              <Link
                to={`/impresa/${impresa.id}`}
                className="btn btn-success w-100"
              >
                Apri Scheda
              </Link>

            </div>

          </div>

        </div>

      </div>

    );

  })}

</div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Home;

