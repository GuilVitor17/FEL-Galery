import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'

import FilmeAcao from "./Filmes/Acao/Acao";
import FilmesComedia from "./Filmes/Comedia/Comedia";
import TerrorFilmes from "./Filmes/Terror/terror";
import Desenhofilmes from "./Filmes/Desenho/Desenho";
import Dramafilmes from "./Filmes/Drama/Drama";
import Romancefilmes from "./Filmes/Romance/Romance";
import Destaquefilmes from "./Filmes/Destaques/destaque";

const GaleryFilmes = () => {

    return(
         <div className="Galery">

            <div className="carrossel-filmes-destaque">
           
            <Destaquefilmes />
            </div>

            <div className="caixaFilmes">
                <div className="Aventuras"><FilmeAcao /></div>
                <div className="Romance"><FilmesComedia/></div>
                <div className="Religiao"><TerrorFilmes /></div>
                <div className="Infantil"><Desenhofilmes /></div>
                <div className="Historia"><Dramafilmes /></div>
                <div className="Literatura"><Romancefilmes /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmes