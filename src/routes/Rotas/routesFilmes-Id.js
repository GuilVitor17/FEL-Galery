import { Routes, Route, Navigate, useParams } from "react-router-dom";

import RoutesPrivatesFilmes from "../../componentes/home/Routes-Filmes/routesFilmes";
import FilmesPorIdAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/acaoFilmepoId";
import FilmesPorIdComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/FilmePoId";
import FilmesPorIdTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/terrorFilmepoId";
import FilmesPorIdDesenho from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/DesenhoFilmespoId";
import FilmesPorIdDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/DramaFilmespoId";
import FilmesPorIdRomance from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RomanceFilmespoId";
import FilmesDestaquePorId from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Destaques/FilmesDestaquepoId";


function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
              
            

                {user && <Route path="/filmes/" element={<RoutesPrivatesFilmes />} />}
                {user && <Route path="/filmes/acao/:id" element={<FilmesPorIdAcao />} />}
                {user && <Route path="/filmes/comedia/:id" element={<FilmesPorIdComedia />} />}
                {user && <Route path="/filmes/terror/:id" element={<FilmesPorIdTerror />} />}
                {user && <Route path="/filmes/infantil/:id" element={<FilmesPorIdDesenho />} />}
                {user && <Route path="/filmes/drama/:id" element={<FilmesPorIdDrama />} />}
                {user && <Route path="/filmes/romance/:id" element={<FilmesPorIdRomance />} />}
                {user && <Route path="/filmes/destaque/:id" element={<FilmesDestaquePorId />} />}.


               
                

                

                







            </Routes>
        </>
    );
}

export default routes;
