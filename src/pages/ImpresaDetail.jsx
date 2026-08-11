import { Link, useParams } from "react-router-dom";
import imprese from "../data/imprese.json";

import Sidebar from "../components/Sidebar";

import Panoramica from "../components/Panoramica";
import PersonaleSpecializzatoCard from "../components/PersonaleSpecializzatoCard";
import AttivitaForestaliCard from "../components/AttivitaForestaliCard";
import DotazioneTecnicaCard from "../components/DotazioneTecnicaCard";

function ImpresaDetail() {

  const { id } = useParams();

  const impresa = imprese.find(
    (i) => String(i.id) === String(id)
  );

  if (!impresa) {
    return (
      <div className="container mt-5">

        <h2>Impresa non trovata</h2>

        <Link
          to="/"
          className="btn btn-secondary mt-3"
        >
          Torna alla Home
        </Link>

      </div>
    );
  }

  const totaleAddetti =
    (impresa.personale?.addettiIndeterminati || 0) +
    (impresa.personale?.addettiDeterminati || 0) +
    (impresa.personale?.addettiStagionali || 0);

  return (

    <div className="d-flex">

      <Sidebar />

      <div
        className="flex-grow-1 p-4"
        style={{ background: "#f8f9fa", minHeight: "100vh" }}
      >

        <Link
          to="/"
          className="btn btn-link text-dark mb-3 text-decoration-none"
        >
          ← Torna ai risultati
        </Link>

        {/* HEADER */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <h2 className="mb-2">
                  {impresa.anagrafica?.denominazione}
                </h2>

                <span className="badge bg-success">
                  Attiva
                </span>

              </div>

              <div className="row text-center">

                <div className="col">

                  <small className="text-muted">
                    Partita IVA
                  </small>

                  <div>
                    {impresa.anagrafica?.partitaIva}
                  </div>

                </div>

                <div className="col">

                  <small className="text-muted">
                    Codice Fiscale
                  </small>

                  <div>
                    {impresa.anagrafica?.codiceFiscale}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* PANORAMICA */}

        <Panoramica
          impresa={impresa}
          totaleAddetti={totaleAddetti}
        />


        {/* DOTAZIONE TECNICA */}

        <DotazioneTecnicaCard
          impresa={impresa}
        />

        
        {/* ATTIVITÀ FORESTALI */}

        <AttivitaForestaliCard
          impresa={impresa}
        /> 

      </div>

    </div>

  );

}

export default ImpresaDetail;