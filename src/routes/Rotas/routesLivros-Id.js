import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesPrivatesLivros from '../../componentes/home/Routes-Livros/routesLivros';
import LivrosAventuraPorId from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/livropoId';
import LivrosPorIdRomance from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RomancelivropoId';
import LivrosPorIdReligiao from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/ReligiaolivropoId';
import LivrosPorIdHistoria from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/HistorialivropoId';
import LivrosPorIdInfantil from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/InfantilLivropoId';
import LivrosPorIdLiteratura from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/LiteraturalivropoId';
import LivrosDestaquePorId from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Destaques/livroDestaquepoId';
import RoutesPrivatesFilmes from "../../componentes/home/Routes-Filmes/routesFilmes";


import FilmesPorIdAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/acaoFilmepoId";
import FilmesPorIdComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/FilmePoId";
import FilmesPorIdTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/terrorFilmepoId";
import FilmesPorIdDesenho from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/DesenhoFilmespoId";
import FilmesPorIdDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/DramaFilmespoId";
import FilmesPorIdRomance from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RomanceFilmespoId";
import FilmesDestaquePorId from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Destaques/FilmesDestaquepoId";


import RoutesPrivatesLivrosAventura from "../../componentes/home/Routes-Livros/routesLivrosAventura";
import RoutesPrivatesLivrosHistoria from "../../componentes/home/Routes-Livros/routesLivrosHistoria";
import RoutesPrivatesLivrosInfantil from "../../componentes/home/Routes-Livros/routesLivrosInfantil";
import RoutesPrivatesLivrosLiteratura from "../../componentes/home/Routes-Livros/routesLivrosLiteratura";
import RoutesPrivatesLivrosReligiao from "../../componentes/home/Routes-Livros/routesLivrosReligiao";
import RoutesPrivatesLivrosRomance from "../../componentes/home/Routes-Livros/routesLivrosRomance";


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
              
                {/* routes homelivros private */}
                {user && <Route path="/livros/" element={<RoutesPrivatesLivros />} />}
                {user && <Route path="/livros/aventura/:id" element={<LivrosAventuraPorId />} />}
                {user && <Route path="/livros/romance/:id" element={<LivrosPorIdRomance />} />}
                {user && <Route path="/livros/religiao/:id" element={<LivrosPorIdReligiao />} />}
                {user && <Route path="/livros/historia/:id" element={<LivrosPorIdHistoria />} />}
                {user && <Route path="/livros/infantil/:id" element={<LivrosPorIdInfantil />} />}
                {user && <Route path="/livros/literatura/:id" element={<LivrosPorIdLiteratura />} />}
                {user && <Route path="/livros/destaque/:id" element={<LivrosDestaquePorId />} />}


                {user && <Route path="/filmes/" element={<RoutesPrivatesFilmes />} />}
                {user && <Route path="/filmes/acao/:id" element={<FilmesPorIdAcao />} />}
                {user && <Route path="/filmes/comedia/:id" element={<FilmesPorIdComedia />} />}
                {user && <Route path="/filmes/terror/:id" element={<FilmesPorIdTerror />} />}
                {user && <Route path="/filmes/infantil/:id" element={<FilmesPorIdDesenho />} />}
                {user && <Route path="/filmes/drama/:id" element={<FilmesPorIdDrama />} />}
                {user && <Route path="/filmes/romance/:id" element={<FilmesPorIdRomance />} />}
                {user && <Route path="/filmes/destaque/:id" element={<FilmesDestaquePorId />} />}.


                {user && <Route path="/livros/aventura" element={<RoutesPrivatesLivrosAventura />} />}
                {user && <Route path="/livros/historia" element={<RoutesPrivatesLivrosHistoria />} />}
                {user && <Route path="/livros/infantil" element={<RoutesPrivatesLivrosInfantil />} />}
                {user && <Route path="/livros/literatura" element={<RoutesPrivatesLivrosLiteratura />} />}
                {user && <Route path="/livros/religiao" element={<RoutesPrivatesLivrosReligiao />} />}
                {user && <Route path="/livros/romance" element={<RoutesPrivatesLivrosRomance />} />}


                {user && <Route path="/filmes/acao" element={<RoutesPrivatesFilmesAcao />} />}
                {user && <Route path="/filmes/comedia" element={<RoutesPrivatesFilmesComedia />} />}
                {user && <Route path="/filmes/infantil" element={<RoutesPrivatesFilmesDesenho />} />}
                {user && <Route path="/filmes/drama" element={<RoutesPrivatesFilmesDrama />} />}
                {user && <Route path="/filmes/romance" element={<RoutesPrivatesFilmesRomance />} />}
                {user && <Route path="/filmes/terror" element={<RoutesPrivatesFilmesTerror />} />}
                

                

                







            </Routes>
        </>
    );
}

export default routes;
