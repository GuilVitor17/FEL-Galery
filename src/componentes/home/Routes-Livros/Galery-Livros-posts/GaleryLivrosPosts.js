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
import DestaqueEditLivros from "./livros/Destaques edit/destaque";


const GaleryLivrosPosts = () => {

    return (
        <div className="Galery">



            <div className="carrossel-livro-destaque-edit">

                <Link className='Voltar' to='/livros'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg></Link>
                <Link className='Voltar' to='/posts/filmes'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></Link>
                <DestaqueEditLivros />
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

export default GaleryLivrosPosts