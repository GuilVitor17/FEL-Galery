import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './privateHome-Informacoes-modules.css'
import InfPrivate from "./infPrivate";


const RoutesPrivatesInformacoes = () => {

    return(
         <div className="Rota-Privada-Informacoes"> 
         
         <div className="caixa-Privada-Informacoes"> 

         <div className="InformacoesConteudos"> 

       <InfPrivate />
       
         </div>
       
         </div>

       
       
         </div>
    )
}

export default RoutesPrivatesInformacoes