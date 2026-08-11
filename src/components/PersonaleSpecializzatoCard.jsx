export default function PersonaleSpecializzatoCard({ impresa }) {
  const personale = impresa.personaleSpecializzato;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        <h4 className="mb-4">
          Personale Specializzato
        </h4>

        <div className="mb-4">
          Operatori qualificati:{" "}
          <strong>
            {personale?.totaleOperatori || 0}
          </strong>
        </div>

        <div>
          <strong>Qualifiche:</strong>

          {personale?.qualifiche?.length > 0 ? (
            <ul className="mt-2 mb-0 ps-3">
              {personale.qualifiche.map((qualifica, index) => (
                <li key={index} className="mb-2">
                  {qualifica}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-muted mt-2">
              Nessuna qualifica indicata
            </div>
          )}
        </div>

      </div>
    </div>
  );
}