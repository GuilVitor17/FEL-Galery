import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'


const LivrosDestaqueInfomacoes = ({ titulo, img,imgCapa, Id, descricaoMin, data, genero }) => {


  const saveId = () => {

    localStorage.setItem("id", Id)

  }


  return (
    <div className="Destaque">

      <div class="card text-bg-dark">
        <img src={imgCapa} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-textt">{titulo}</h5>
          <h6 class="card-title"><b>DESTAQUES</b></h6>
          <h5 class="card-text">{descricaoMin}</h5>
          <h5 class="card-textt-data"><small>{data}</small></h5>
          <Link className="Btn-livro-destaque" to={`/livros/destaque/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
          Ver livro
        </button></Link>
        <h5 class="card-genero">{genero}</h5>

        </div>
      </div>

    </div>
  )
}

export default LivrosDestaqueInfomacoes