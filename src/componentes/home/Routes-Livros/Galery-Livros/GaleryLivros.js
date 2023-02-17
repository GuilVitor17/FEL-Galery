import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import AventurasLivros from "./livros/Aventuras/aventuras";
import RomanceLivros from "./livros/Romance/Romance";
import ReligiaoLivros from "./livros/Religiao/Religiao";
import InfantilLivros from "./livros/Infantil/Infantil";
import LiteraturaLivross from "./livros/Literatura/Literatura";
import HistoriaLivross from "./livros/Historia/Historia";
import DestaqueLivros from "./livros/Destaques/destaque";


const GaleryLivros = () => {

    return(
         <div className="Galery">

            <div className="carrossel-livro-destaque">
           
            <DestaqueLivros />
            </div>

            <div className="caixaLivros">
                <div className="Aventuras"><AventurasLivros /></div>
                <div className="Romance"><RomanceLivros /></div>
                <div className="Religiao"> <ReligiaoLivros /> </div>
                <div className="Infantil"> <InfantilLivros /></div>
                <div className="Historia"> <HistoriaLivross /></div>
                <div className="Literatura"> <LiteraturaLivross /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivros