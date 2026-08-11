export default function AnagraficaCard({ impresa }) {
  const anagrafica = impresa.anagrafica || {};

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        <h4 className="mb-4">
          Anagrafica
        </h4>

        <div className="mb-3">
          <strong>Denominazione:</strong>
          <div>{anagrafica.denominazione || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Partita IVA:</strong>
          <div>{anagrafica.partitaIva || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Codice Fiscale:</strong>
          <div>{anagrafica.codiceFiscale || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Provincia:</strong>
          <div>{anagrafica.provincia || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Comune:</strong>
          <div>{anagrafica.comune || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Telefono:</strong>
          <div>{anagrafica.telefono || "-"}</div>
        </div>

        <div className="mb-3">
          <strong>Email:</strong>
          <div>{anagrafica.email || "-"}</div>
        </div>

        <div>
          <strong>PEC:</strong>
          <div>{anagrafica.pec || "-"}</div>
        </div>

      </div>
    </div>
  );
}