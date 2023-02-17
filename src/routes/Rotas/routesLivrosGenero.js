import { Routes, Route, Navigate, useParams } from "react-router-dom";

import RoutesPrivatesLivrosAventura from "../../componentes/home/Routes-Livros/routesLivrosAventura";
import RoutesPrivatesLivrosHistoria from "../../componentes/home/Routes-Livros/routesLivrosHistoria";
import RoutesPrivatesLivrosInfantil from "../../componentes/home/Routes-Livros/routesLivrosInfantil";
import RoutesPrivatesLivrosLiteratura from "../../componentes/home/Routes-Livros/routesLivrosLiteratura";
import RoutesPrivatesLivrosReligiao from "../../componentes/home/Routes-Livros/routesLivrosReligiao";
import RoutesPrivatesLivrosRomance from "../../componentes/home/Routes-Livros/routesLivrosRomance";


function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
              


                {user && <Route path="/livros/aventuras" element={<RoutesPrivatesLivrosAventura />} />}
                {user && <Route path="/livros/historias" element={<RoutesPrivatesLivrosHistoria />} />}
                {user && <Route path="/livros/infantils" element={<RoutesPrivatesLivrosInfantil />} />}
                {user && <Route path="/livros/literaturas" element={<RoutesPrivatesLivrosLiteratura />} />}
                {user && <Route path="/livros/religiaos" element={<RoutesPrivatesLivrosReligiao />} />}
                {user && <Route path="/livros/romances" element={<RoutesPrivatesLivrosRomance />} />}


               

                

                







            </Routes>
        </>
    );
}

export default routes;
