import React from "react"
import './home-modules.css'
import Logomarca from '../img/Logomarca.png'
import { Link } from "react-router-dom"



const Home = () => {

    return(
        <div className="div-inicio">

            <div className="div-center">
            <div className="div-image"> <img src={Logomarca} /> </div>
            <Link to='/login'> <div className="div-button"> <button>ENTRAR</button></div></Link>
            </div>
        </div>
    )
}

export default Home