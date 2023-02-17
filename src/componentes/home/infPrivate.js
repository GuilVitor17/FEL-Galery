import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PrivateHome from "../home/Private-Carrossel";
import './infPrivate-modules.css'


const InfPrivate = () => {

    return(
         <div className="div-Infomacoes-Privada"> 
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <p>SOBRE LIVROS</p>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>LIVROS EM PDF</strong> - Baixe qualquer Livro, 100% grátis, trazemos os melhores. Livros para você assistir de diverso gênero <strong>Aventura, Religião, Romance, Drama, Infantil.</strong> Para assistir você sera redirecionado a plataforma do Google-drive, sera legal que você já tenha uma conta do Google.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <p>SOBRE FILMES</p>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>FILMES EM PDF</strong> - Assista qualquer filme, 100% grátis, trazemos os melhores. Filme para você assistir de diverso gênero <strong>Terror, Ação, Romance, Comedia, Drama, Desenho,</strong> para assistir você sera redirecionado a plataforma do Google-drive, sera legal que você já tenha uma conta do Google. 
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <p>SOBRE LOGO MARCAS</p>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>LOGO MARCAS EM PDF</strong> - Criamos sua logomarca para sua empresa do jeito que você quiser imagem vetorizada, prenha o formulário de contato e nos contate para mais informações sobre sua Logo.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <p>CONTATO</p>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong>MENSAGEM DE CONTATO</strong> - Digite uma mensagem, O que você gostaria, um filme, um livro, ou se você achar entesante e gostar das logo mande seus dados através do formulário e entrarei em contato.
      </div>
      
    </div>
  </div>
</div>
        </div>
    )
}

export default InfPrivate