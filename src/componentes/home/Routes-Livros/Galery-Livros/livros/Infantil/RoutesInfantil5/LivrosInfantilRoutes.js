import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../infantil-modules.css'


const LivrosInfantilInfomacoesRoutes = ({titulo, img,Id ,descricaoMin, data}) => {


     const saveId = () =>{

      localStorage.setItem("id", Id)

     }
    

  return (
    <div calssName="Infantil">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero-1"><b>Infantil</b></h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/livros/Infantil/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver livro
                  </button></Link>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default LivrosInfantilInfomacoesRoutes