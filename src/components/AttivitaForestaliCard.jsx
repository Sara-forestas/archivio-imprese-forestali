import { useState } from "react";

export default function AttivitaForestaliCard({ impresa }) {
  const [mostraAttivita, setMostraAttivita] = useState(false);

  return (
    <div className="card shadow-sm mb-4">

      <div
        className="card-header bg-success text-white d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setMostraAttivita(!mostraAttivita)}
      >
        <h4 className="mb-0">
          🌲 Attività Forestali ({impresa.attivita?.length || 0})
        </h4>

        <span style={{ fontSize: "1.4rem" }}>
          {mostraAttivita ? "▲" : "▼"}
        </span>
      </div>

      {mostraAttivita && (
        <div className="card-body">

          {impresa.attivita?.length > 0 ? (

            impresa.attivita.map((attivita, index) => (

              <div
                key={index}
                className="card mb-3 border-success"
              >

                <div className="card-body">

                  <h5 className="text-success fw-bold">
                    {attivita.comune}
                  </h5>

                  <p>
                    <strong>Località:</strong>{" "}
                    {attivita.localita || "-"}
                  </p>

                  <p>
                    <strong>Superficie:</strong>{" "}
                    {attivita.superficie || "-"}
                  </p>

                  <p>
                    <strong>Giornate lavorative:</strong>{" "}
                    {attivita.giornate || "-"}
                  </p>

                  <p>
                    <strong>Periodo:</strong>{" "}
                    Dal {attivita.periodo?.dal || "-"} al{" "}
                    {attivita.periodo?.al || "-"}
                  </p>

                  <p>
                    <strong>Committente:</strong>{" "}
                    {attivita.committente?.nome || "-"}
                  </p>

                  <div className="mb-3">
                    <strong>Tipologie:</strong>

                    <ul className="mt-2 mb-0">
                      {attivita.tipologie?.map((tipologia, i) => (
                        <li key={i}>{tipologia}</li>
                      ))}
                    </ul>
                  </div>

                  {attivita.note && (
                    <div className="alert alert-warning mb-0">
                      <strong>Note:</strong> {attivita.note}
                    </div>
                  )}

                </div>

              </div>

            ))

          ) : (

            <div className="alert alert-secondary mb-0">
              Nessuna attività registrata.
            </div>

          )}

        </div>
      )}

    </div>
  );
}