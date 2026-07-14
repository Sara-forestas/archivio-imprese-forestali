export default function DotazioneTecnicaCard({ impresa }) {
  return (
    <div className="row mt-4">

      {/* ATTREZZATURE */}

      <div className="col-lg-6 mb-4">

        <div className="card shadow-sm h-100">

          <div className="card-body">

            <h4 className="mb-4">Attrezzature</h4>

            <p><strong>Motoseghe:</strong> {impresa.attrezzature?.motoseghe || 0}</p>

            <p><strong>Decespugliatori:</strong> {impresa.attrezzature?.decespugliatori || 0}</p>

            <p><strong>Gru a cavo:</strong> {impresa.attrezzature?.gruCavo || 0}</p>

            <p><strong>Processori:</strong> {impresa.attrezzature?.processori || 0}</p>

            <p><strong>Spaccalegna:</strong> {impresa.attrezzature?.spaccalegna || 0}</p>

            <p><strong>Torrette mobili:</strong> {impresa.attrezzature?.torretteMobili || 0}</p>

            <p><strong>Potatore:</strong> {impresa.attrezzature?.potatore || 0}</p>

            <p><strong>Trancia rotativa:</strong> {impresa.attrezzature?.tranciaRotativa || 0}</p>

            <p><strong>Sega a nastro:</strong> {impresa.attrezzature?.segaAnastro || 0}</p>

            <p><strong>Risine:</strong> {impresa.attrezzature?.risine || 0}</p>

            <p><strong>Scortecciatrici:</strong> {impresa.attrezzature?.scortecciatrici || 0}</p>

            <p><strong>Verricelli:</strong> {impresa.attrezzature?.verricelli || 0}</p>

            <p><strong>Forbice elettronica:</strong> {impresa.attrezzature?.forbiceElettronica || 0}</p>

            <p><strong>Giroandatore:</strong> {impresa.attrezzature?.giroandatore || 0}</p>

            <p><strong>Tirabande:</strong> {impresa.attrezzature?.tirabande || 0}</p>

          </div>

        </div>

      </div>

      {/* MEZZI */}

      <div className="col-lg-6 mb-4">

        <div className="card shadow-sm h-100">

          <div className="card-body">

            <h4 className="mb-4">Mezzi</h4>

            <p><strong>Autocarri:</strong> {impresa.mezzi?.autocarri || 0}</p>

            <p><strong>Autocarri con gru:</strong> {impresa.mezzi?.autocarriGru || 0}</p>

            <p><strong>Pala cingolata:</strong> {impresa.mezzi?.palaCingolata || 0}</p>

            <p><strong>Escavatore:</strong> {impresa.mezzi?.escavatore || 0}</p>

            <p><strong>Pala meccanica:</strong> {impresa.mezzi?.palaMeccanica || 0}</p>

            <p><strong>Mini escavatori:</strong> {impresa.mezzi?.miniEscavatori || 0}</p>

            <p><strong>Trattori gommati:</strong> {impresa.mezzi?.trattoriGommati || 0}</p>

            <p><strong>Trattori cingolati:</strong> {impresa.mezzi?.trattoriCingolati || 0}</p>

            <p><strong>Rimorchi forestali (1 asse):</strong> {impresa.mezzi?.rimorchi1Asse || 0}</p>

            <p><strong>Rimorchi forestali (2 assi):</strong> {impresa.mezzi?.rimorchi2Assi || 0}</p>

            <p><strong>Macchina taglio/spaccatura:</strong> {impresa.mezzi?.macchinaTaglioSpaccatura || 0}</p>

          </div>

        </div>

      </div>

    </div>
  );
}