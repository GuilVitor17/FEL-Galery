import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesPrivatesPosts from '../../componentes/Auth/loginPost/RoutePostsPrivate';
import CreateAventura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/crud-livro/createAventura';
import LivrosUpdateAventura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/crud-livro/updateAventura';
import CreateHistoria from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/crud-historia/createhistoria';
import LivrosUpdateHistoria from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/crud-historia/updatehistoria';
import LivrosUpdateInfantil from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/crud-Infantil/updateInfantil';
import CreateInfantil from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/crud-Infantil/createInfantil';
import Createliteratura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/crud-literatura/createliteratura';
import LivrosUpdateliteratura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/crud-literatura/updateliteratura';
import Createreligiao from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/crud-Religiao/createReligiao';
import LivrosUpdatereligiao from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/crud-Religiao/updateReligiao';
import Createromance from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/crud-romance/createRomance';
import LivrosUpdateromance from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/crud-romance/updateRomance';
import LivrosUpdateDestaque from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Destaques edit/edit/updateDestaque';
import LoginPost from '../../componentes/Auth/loginPost/login-Post';
import GaleryFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryFilmesPosts";



import CreateComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/crud-filme/createComedia";
import FilmeUpdateComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/crud-filme/updateComedia";
import CreateAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/crud-Acao/createAcao";
import FilmessUpdateAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/crud-Acao/updateAcao";
import FilmesUpdateDestaque from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Destaques edit/edit/updateDestaque";
import FilmesUpdateDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/crud-Drama/updateDrama";
import CreateDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/crud-Drama/createDrama";
import Createromancefilmes from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/crud-romance/createRomance";
import FilmesUpdateromance from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/crud-romance/updateRomance";
import FilmessUpdateTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/crud-terror/updateterror";
import CreateTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/crud-terror/createterror";
import FilmessUpdateInfantil from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/crud-Infantil/updateInfantil";
import CreateInfantilFilmes from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/crud-Infantil/createInfantil";


function routesPost() {


    const userPost = localStorage.getItem("tokenPost");




    return (

        <>
            <Routes>
                
                {/* routesPostPrivate-AVENTURA */}
                {userPost && <Route path="/posts/createAventura" element={<CreateAventura />} />}
                {userPost && <Route path="/posts/updateAventura/:id" element={<LivrosUpdateAventura />} />}

                {/* routesPostPrivate-historia */}
                {userPost && <Route path="/posts/createhistoria" element={<CreateHistoria />} />}
                {userPost && <Route path="/posts/updatehistoria/:id" element={<LivrosUpdateHistoria />} />}

                {/* routesPostPrivate-Infantil */}
                {userPost && <Route path="/posts/createinfantil" element={<CreateInfantil />} />}
                {userPost && <Route path="/posts/updateinfantil/:id" element={<LivrosUpdateInfantil />} />}

                 {/* routesPostPrivate-Literatura */}
                 {userPost && <Route path="/posts/createliteratura" element={<Createliteratura />} />}
                {userPost && <Route path="/posts/updateliteratura/:id" element={<LivrosUpdateliteratura />} />}

                {/* routesPostPrivate-religiao */}
                {userPost && <Route path="/posts/createreligiao" element={<Createreligiao />} />}
                {userPost && <Route path="/posts/updatereligiao/:id" element={<LivrosUpdatereligiao />} />}


                {/* routesPostPrivate-romance */}
                {userPost && <Route path="/posts/createromance" element={<Createromance />} />}
                {userPost && <Route path="/posts/updateromance/:id" element={<LivrosUpdateromance />} />}

                {/* routesPostPrivate-Destaque */}
                {userPost && <Route path="/posts/updatedestaque/:id" element={<LivrosUpdateDestaque />} />}

                {/* routes login Post private */}
                <Route path="/userPosts" element={<LoginPost />} />
                {userPost && <Route path="/posts" element={<RoutesPrivatesPosts />} />}


                {/* filmes */}
                {userPost && <Route path="/posts/filmes" element={<GaleryFilmesPosts />} />}

                {/* routesPostPrivate--filmes-Comedia */}
                {userPost && <Route path="/posts/filmes/createcomedia" element={<CreateComedia />} />}
                {userPost && <Route path="/posts/filmes/updatecomedia/:id" element={<FilmeUpdateComedia/>} />}

                 {/* routesPostPrivate--filmes-Comedia */}
                 {userPost && <Route path="/posts/filmes/createacao" element={<CreateAcao />} />}
                 {userPost && <Route path="/posts/filmes/updateacao/:id" element={<FilmessUpdateAcao/>} />}
                 {userPost && <Route path="/posts/filmes/updatedestaquefilmes/:id" element={<FilmesUpdateDestaque/>} />}
                 {userPost && <Route path="/posts/filmes/updatedrama/:id" element={<FilmesUpdateDrama/>} />}
                 {userPost && <Route path="/posts/filmes/createdrama" element={<CreateDrama/>} />}
                 {userPost && <Route path="/posts/filmes/createromancefilmes" element={<Createromancefilmes />} />}
                 {userPost && <Route path="/posts/filmes/updateromancefilmes/:id" element={<FilmesUpdateromance />} />}
                 {userPost && <Route path="/posts/filmes/updateterrorfilmes/:id" element={<FilmessUpdateTerror />} />}
                 {userPost && <Route path="/posts/filmes/createterror" element={<CreateTerror />} />}
                 {userPost && <Route path="/posts/filmes/createinfantilfilmes" element={<CreateInfantilFilmes />} />}
                 {userPost && <Route path="/posts/filmes/updateinfantilfilme/:id" element={<FilmessUpdateInfantil />} />}


            </Routes>
        </>
    );
}

export default routesPost;
