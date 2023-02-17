import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PrivateHome from "../home/Private-Carrossel";
import RoutesPrivatesConteudo from "./privateConteudos";
import RoutesPrivatesInformacoes from "./private-home-infConteudo";
import PrivatesForm from "./private-formulario/form-private-home";

const RoutesPrivates = () => {

    return(
         <div className="Rota-Privada"> 
         <PrivateHome />
         <RoutesPrivatesConteudo />
         <RoutesPrivatesInformacoes />
         <PrivatesForm />
         
        </div>
    )
}

export default RoutesPrivates