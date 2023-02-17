import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import AcaoFilmes1 from "./Filmes/Acao/RoutesAcao1/acaoRoutes";
import AcaoFilmes2 from "./Filmes/Acao/RoutesAcao2/acaoRoutes";
import AcaoFilmes3 from "./Filmes/Acao/RoutesAcao3/acaoRoutes";
import AcaoFilmes4 from "./Filmes/Acao/RoutesAcao4/acaoRoutes";
import AcaoFilmes5 from "./Filmes/Acao/RoutesAcao5/acaoRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Acao"><AcaoFilmes1 /></div>
                <div className="Romance"><AcaoFilmes2 /></div>
                <div className="Religiao"> <AcaoFilmes3 /> </div>
                <div className="Infantil"><AcaoFilmes4 /></div>
                <div className="Historia"><AcaoFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes