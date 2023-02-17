import { Routes, Route, Navigate, useParams } from "react-router-dom";


import RoutesPrivatesFilmesAcao from "../../componentes/home/Routes-Filmes/routesFilmesAcao";
import RoutesPrivatesFilmesComedia from "../../componentes/home/Routes-Filmes/routesFilmesComedia";
import RoutesPrivatesFilmesDesenho from "../../componentes/home/Routes-Filmes/routesFilmesDesenho";
import RoutesPrivatesFilmesDrama from "../../componentes/home/Routes-Filmes/routesFilmesDrama";
import RoutesPrivatesFilmesTerror from "../../componentes/home/Routes-Filmes/routesFilmesTerror";
import RoutesPrivatesFilmesRomance from "../../componentes/home/Routes-Filmes/routesFilmesRomance";

function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
                          

                {user && <Route path="/filmes/acaos" element={<RoutesPrivatesFilmesAcao />} />}
                {user && <Route path="/filmes/comedias" element={<RoutesPrivatesFilmesComedia />} />}
                {user && <Route path="/filmes/infantils" element={<RoutesPrivatesFilmesDesenho />} />}
                {user && <Route path="/filmes/dramas" element={<RoutesPrivatesFilmesDrama />} />}
                {user && <Route path="/filmes/romances" element={<RoutesPrivatesFilmesRomance />} />}
                {user && <Route path="/filmes/terrors" element={<RoutesPrivatesFilmesTerror />} />}
                


            </Routes>
        </>
    );
}

export default routes;
