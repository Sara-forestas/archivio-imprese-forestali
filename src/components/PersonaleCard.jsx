export default function PersonaleCard({ impresa }) {
  const personale = impresa.personale;

  const totale =
    (personale?.addettiIndeterminati || 0) +
    (personale?.addettiDeterminati || 0) +
    (personale?.addettiStagionali || 0);

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        <h4 className="mb-4">
          Personale
        </h4>

        <div className="mb-3">
          Addetti indeterminati:{" "}
          <strong>
            {personale?.addettiIndeterminati || 0}
          </strong>
        </div>

        <div className="mb-3">
          Addetti determinati:{" "}
          <strong>
            {personale?.addettiDeterminati || 0}
          </strong>
        </div>

        <div className="mb-3">
          Addetti stagionali:{" "}
          <strong>
            {personale?.addettiStagionali || 0}
          </strong>
        </div>

        <div className="alert alert-success mt-4 mb-0">
          Totale addetti: <strong>{totale}</strong>
        </div>

      </div>
    </div>
  );
}