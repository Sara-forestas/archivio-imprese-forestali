export default function PanoramicaCard({ impresa, totaleAddetti }) {
  return (
    <div className="row">

      {/* ANAGRAFICA */}

      <div className="col-lg-6 mb-4">

        <div className="card h-100 shadow-sm">

          <div className="card-body">

            <h4 className="mb-4">Anagrafica</h4>

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

      {/* PERSONALE */}

      <div className="col-lg-6 mb-4">

        <div className="card h-100 shadow-sm">

          <div className="card-body">

            <h4 className="mb-4">Personale</h4>

            <p>
              Addetti indeterminati:{" "}
              {impresa.personale?.addettiIndeterminati || 0}
            </p>

            <p>
              Addetti determinati:{" "}
              {impresa.personale?.addettiDeterminati || 0}
            </p>

            <p>
              Addetti stagionali:{" "}
              {impresa.personale?.addettiStagionali || 0}
            </p>

            <div className="alert alert-success mt-3">

              Totale addetti: <strong>{totaleAddetti}</strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}