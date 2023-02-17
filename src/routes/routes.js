import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesLogin from "./Rotas/Routeslogin";
import RoutesPost from "./Rotas/RoutesPost";
import RouteLivroId from "./Rotas/routesLivros-Id";
import RouteFilmesId from "./Rotas/routesFilmes-Id";
import RouteGeneroLivros from "./Rotas/routesLivrosGenero";
import RouteGeneroFilmes from "./Rotas/routesFilmesGenero";

function routes() {


    return (

        <>

        <RoutesLogin />
        <RoutesPost />
        <RouteLivroId />
        <RouteFilmesId />
        <RouteGeneroFilmes />
        <RouteGeneroLivros />
           
        </>
    );
}

export default routes;
