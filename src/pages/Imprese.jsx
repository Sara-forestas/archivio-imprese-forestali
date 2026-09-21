import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imprese from "../data/imprese.json";
import Sidebar from "../components/Sidebar";

function Imprese() {

    const [denominazione, setDenominazione] = useState("");
    const [comune, setComune] = useState("");
    const [attivita, setAttivita] = useState("");

    const [pagina, setPagina] = useState(1);

    // Numero di imprese visualizzate per pagina
    const impresePerPagina = 12;


    // ============================
    // FILTRI
    // ============================

    const risultati = imprese.filter((impresa) => {

        const nome =
            impresa.anagrafica?.denominazione?.toLowerCase() || "";

        const comuneImpresa =
            impresa.anagrafica?.comune?.toLowerCase() || "";

        const attivitaImpresa =
            impresa.attivita || [];


        const matchDenominazione =
            nome.includes(
                denominazione.toLowerCase()
            );


        const matchComune =
            comuneImpresa.includes(
                comune.toLowerCase()
            );


        const matchAttivita =
            attivita === "" ||
            attivitaImpresa.some((attivitaItem) =>
                attivitaItem.tipologie?.some((tipologia) =>
                    tipologia
                        .toLowerCase()
                        .includes(attivita.toLowerCase())
                )
            );


        return (
            matchDenominazione &&
            matchComune &&
            matchAttivita
        );

    });


    // ============================
    // PAGINAZIONE
    // ============================

    const totalePagine = Math.ceil(
        risultati.length / impresePerPagina
    );


    const indiceInizio =
        (pagina - 1) * impresePerPagina;


    const indiceFine =
        indiceInizio + impresePerPagina;


    const impresePagina =
        risultati.slice(
            indiceInizio,
            indiceFine
        );


    // Quando cambia un filtro
    // torniamo alla prima pagina

    useEffect(() => {
        setPagina(1);
    }, [
        denominazione,
        comune,
        attivita
    ]);


    return (

        <div className="d-flex">

            <Sidebar />

            <div
                className="flex-grow-1 p-4"
                style={{
                    background: "#f8f9fa",
                    minHeight: "100vh"
                }}
            >

                {/* TITOLO */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-body">

                        <h2 className="mb-2">
                            Tutte le Imprese Forestali
                        </h2>

                        <p className="text-muted mb-0">
                            Consultazione delle imprese forestali
                            registrate
                        </p>

                    </div>

                </div>


                {/* FILTRI */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-4">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Denominazione impresa"
                                    value={denominazione}
                                    onChange={(e) =>
                                        setDenominazione(e.target.value)
                                    }
                                />

                            </div>


                            <div className="col-md-4">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Comune"
                                    value={comune}
                                    onChange={(e) =>
                                        setComune(e.target.value)
                                    }
                                />

                            </div>


                            <div className="col-md-4">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Attività forestale"
                                    value={attivita}
                                    onChange={(e) =>
                                        setAttivita(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        <div className="mt-3">

                            <span className="badge bg-success">

                                {risultati.length} imprese

                            </span>

                        </div>

                    </div>

                </div>


                {/* ELENCO IMPRESE */}

                <div className="row">

                    {impresePagina.length > 0 ? (

                        impresePagina.map((impresa) => (

                            <div
                                key={impresa.id}
                                className="col-lg-4 col-md-6 mb-4"
                            >

                                <div className="card impresa-card h-100 border-0 shadow-sm">

                                    <div className="card-body d-flex flex-column">

                                        {/* TITOLO */}

                                        <div className="mb-3">

                                            <span className="badge bg-success mb-2">
                                                Impresa Forestale
                                            </span>

                                            <h5 className="fw-bold">

                                                {impresa.anagrafica?.denominazione}

                                            </h5>

                                        </div>


                                        {/* ANAGRAFICA */}

                                        <p className="text-muted mb-1">

                                            <strong>P.IVA:</strong>{" "}

                                            {impresa.anagrafica?.partitaIva || "-"}

                                        </p>


                                        <p className="text-muted mb-1">

                                            <strong>Codice Fiscale:</strong>{" "}

                                            {impresa.anagrafica?.codiceFiscale || "-"}

                                        </p>


                                        <p className="mb-1">

                                            <strong>Comune:</strong>{" "}

                                            {impresa.anagrafica?.comune || "-"}

                                        </p>


                                        <p className="mb-1">

                                            <strong>Email:</strong>{" "}

                                            {impresa.anagrafica?.email || "-"}

                                        </p>



                                        {/* PULSANTE */}

                                        <div className="mt-auto">

                                            <Link
                                                to={`/impresa/${impresa.id}`}
                                                className="btn btn-success w-100"
                                            >
                                                Apri scheda
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="col-12">

                            <div className="card shadow-sm border-0">

                                <div className="card-body text-center py-5">

                                    <h5>
                                        Nessuna impresa trovata
                                    </h5>

                                    <p className="text-muted mb-0">

                                        Prova a modificare i criteri
                                        di ricerca.

                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>


                {/* PAGINAZIONE */}

                {totalePagine > 1 && (

                    <div className="d-flex justify-content-center align-items-center mt-3 mb-4">

                        <button
                            className="btn btn-outline-success me-2"
                            disabled={pagina === 1}
                            onClick={() =>
                                setPagina(pagina - 1)
                            }
                        >
                            ←
                        </button>


                        {Array.from(
                            { length: totalePagine },
                            (_, index) => index + 1
                        ).map((numeroPagina) => (

                            <button
                                key={numeroPagina}
                                className={`btn mx-1 ${pagina === numeroPagina
                                        ? "btn-success"
                                        : "btn-outline-success"
                                    }`}
                                onClick={() =>
                                    setPagina(numeroPagina)
                                }
                            >
                                {numeroPagina}
                            </button>

                        ))}


                        <button
                            className="btn btn-outline-success ms-2"
                            disabled={
                                pagina === totalePagine
                            }
                            onClick={() =>
                                setPagina(pagina + 1)
                            }
                        >
                            →
                        </button>

                    </div>

                )}


                {/* INFORMAZIONI */}

                {risultati.length > 0 && (

                    <div className="text-center text-muted mb-3">

                        Visualizzate{" "}

                        <strong>
                            {indiceInizio + 1}
                        </strong>

                        {" - "}

                        <strong>
                            {Math.min(
                                indiceFine,
                                risultati.length
                            )}
                        </strong>

                        {" di "}

                        <strong>
                            {risultati.length}
                        </strong>

                        {" imprese"}

                    </div>

                )}

            </div>

        </div>

    );
}

export default Imprese;