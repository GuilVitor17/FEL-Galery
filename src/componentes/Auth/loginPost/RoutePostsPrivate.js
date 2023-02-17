import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import '../privateRoutes-module.css'
import GaleryLivrosPosts from "../../home/Routes-Livros/Galery-Livros-posts/GaleryLivrosPosts";
import GaleryFilmesPosts from "../../home/Routes-Filmes/Galery-Filmes-posts/GaleryFilmesPosts";

const RoutesPrivatesPosts = () => {

    return(
         <div className="Rota-Privada"> 
         <GaleryLivrosPosts />
        </div>
    )
}

export default RoutesPrivatesPosts