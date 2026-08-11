import AnagraficaCard from "./AnagraficaCard";
import PersonaleCard from "./PersonaleCard";
import PersonaleSpecializzatoCard from "./PersonaleSpecializzatoCard";

export default function Panoramica({ impresa }) {
  return (
        <div className="row g-4">

          {/* ANAGRAFICA */}
          <div className="col-lg-4">
            <AnagraficaCard impresa={impresa} />
          </div>

          {/* PERSONALE */}
          <div className="col-lg-4">
            <PersonaleCard impresa={impresa} />
          </div>

          {/* PERSONALE SPECIALIZZATO */}
          <div className="col-lg-4">
            <PersonaleSpecializzatoCard impresa={impresa} />
          </div>

        </div>
  );
}