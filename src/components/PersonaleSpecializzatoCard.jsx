export default function PersonaleSpecializzatoCard({ impresa }) {
  return (
    <div className="card shadow-sm mb-4">

      <div className="card-body">

        <h4 className="mb-4">

          Personale Specializzato

        </h4>

        <div className="alert alert-success">

          Operatori qualificati:{" "}

          <strong>

            {impresa.personaleSpecializzato?.totaleOperatori || 0}

          </strong>

        </div>

        {Object.entries(
          impresa.personaleSpecializzato?.qualifiche || {}
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
  );
}