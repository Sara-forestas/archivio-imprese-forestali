import { useParams, Link } from "react-router-dom";
import imprese from "../data/imprese.json";
import Sidebar from "../components/Sidebar";

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
        style={{ background: "#f8f9fa" }}
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

        <div className="row">

          <div className="col-lg-6 mb-4">

            <div className="card h-100 shadow-sm">

              <div className="card-body">

                <h4 className="mb-4">
                  Anagrafica
                </h4>

                <p>
                  <strong>Denominazione:</strong>
                  <br />
                  {impresa.anagrafica?.denominazione}
                </p>

                <p>
                  <strong>Partita IVA:</strong>
                  <br />
                  {impresa.anagrafica?.partitaIva}
                </p>

                <p>
                  <strong>Codice Fiscale:</strong>
                  <br />
                  {impresa.anagrafica?.codiceFiscale}
                </p>

              </div>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div className="card h-100 shadow-sm">

              <div className="card-body">

                <h4 className="mb-4">
                  Personale
                </h4>

                <p>
                  Addetti indeterminati:
                  {" "}
                  {impresa.personale?.addettiIndeterminati}
                </p>

                <p>
                  Addetti determinati:
                  {" "}
                  {impresa.personale?.addettiDeterminati}
                </p>

                <p>
                  Addetti stagionali:
                  {" "}
                  {impresa.personale?.addettiStagionali}
                </p>

                <div className="alert alert-success mt-3">
                  Totale addetti:
                  {" "}
                  {totaleAddetti}
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* PERSONALE SPECIALIZZATO */}

        <div className="card shadow-sm mb-4">

          <div className="card-body">

            <h4 className="mb-4">
              Personale Specializzato
            </h4>

            <div className="alert alert-success">

              Operatori qualificati:
              {" "}
              <strong>
                {
                  impresa.personaleSpecializzato
                    ?.totaleOperatori || 0
                }
              </strong>

            </div>

            {Object.entries(
              impresa.personaleSpecializzato
                ?.qualifiche || {}
            ).map(([nome, numero]) => (

              <div
                key={nome}
                className="d-flex justify-content-between border-bottom py-2"
              >

                <span>{nome}</span>

                <span className="badge bg-success">
                  {numero}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ATTIVITA */}

        <div className="card shadow-sm mb-4">

          <div className="card-body">

            <h4 className="mb-4">
              Attività Forestali
            </h4>

            {impresa.attivita?.map(
              (attivita, index) => (

                <div
                  key={index}
                  className="card mb-3"
                >

                  <div className="card-body">

                    <h5>
                      {attivita.comune}
                    </h5>

                    <p>
                      <strong>Superficie:</strong>
                      {" "}
                      {attivita.superficieEttari}
                      {" "}ha
                    </p>

                    <p>
                      <strong>Giornate lavorative:</strong>
                      {" "}
                      {attivita.giornateLavorative}
                    </p>

                    <p>
                      <strong>Periodo:</strong>
                      {" "}
                      {attivita.periodo}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* ATTREZZATURE E MEZZI */}

        <div className="row">

          <div className="col-lg-6 mb-4">

            <div className="card shadow-sm">

              <div className="card-body">

                <h4 className="mb-4">
                  Attrezzature
                </h4>

                <p>
                    Motoseghe: {impresa.attrezzature?.motoseghe || 0}
                </p>

                <p>
                    Decespugliatori: {impresa.attrezzature?.decespugliatori || 0}
                </p>

                <p>
                    Cippatrici: {impresa.attrezzature?.cippatrici || 0}
                </p>

                <p>
                    Verricelli: {impresa.attrezzature?.verricelli || 0}
                </p>

              </div>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div className="card shadow-sm">

              <div className="card-body">

                <h4 className="mb-4">
                  Mezzi
                </h4>

                <p>
                  Autocarri:
                  {" "}
                  {impresa.mezzi?.autocarri || 0}
                </p>

                <p>
                  Mini escavatori:
                  {" "}
                  {impresa.mezzi.miniEscavatori || 0}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ImpresaDetail;