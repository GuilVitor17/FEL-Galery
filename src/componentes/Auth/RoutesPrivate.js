import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Props from '../../componentes/PropsDiv';
import Navbar from "../Navbar/navbar";
import PrivateHome from "../home/homePrivada";
import './privateRoutes-module.css'

const RoutesPrivates = () => {

    return(
         <div className="Rota-Privada"> 
         <Navbar />
         <PrivateHome />
         
       
        </div>
    )
}

export default RoutesPrivates