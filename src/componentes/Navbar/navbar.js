import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Props from '../../componentes/PropsDiv';
import './navbar-modules.css'
import Logomarca from '../img/LogoSiteBranco.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
         <div className="div-navbar">
    <nav className="navbar navbar-expand-lg" id="navbar">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logomarca}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link to={'/userPosts'} className="post"><s>link</s></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/livros/user'><li className="nav-item">
          <a className="nav-link active" id="homepage" aria-current="page" href="#">Home</a>
        </li></Link>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Livros
          </a>
          <ul className="dropdown-menu">
            <Link to='/livros'><li><a className="dropdown-item">Destaques</a></li></Link>
            <Link to='/livros/aventuras'><li><a className="dropdown-item">Aventuras</a></li></Link>
            <Link to='/livros/romances'><li><a className="dropdown-item">Romance</a></li></Link>
            <Link to='/livros/religiaos'><li><a className="dropdown-item">Religiao</a></li></Link>
            <Link to='/livros/infantils'><li><a className="dropdown-item">Infantil</a></li></Link>
            <Link to='/livros/historias'><li><a className="dropdown-item">Historia</a></li></Link>
            <Link to='/livros/literaturas'><li><a className="dropdown-item">Literatura</a></li></Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filmes
          </a>
          <ul className="dropdown-menu">
            <Link to='/filmes'><li><a className="dropdown-item" href="#">Destaques</a></li></Link>
            <Link to='/filmes/acaos'><li><a className="dropdown-item">Ação</a></li></Link>
            <Link to='/filmes/Dramas'><li><a className="dropdown-item">Drama</a></li></Link>
            <Link to='/filmes/terrors'><li><a className="dropdown-item">Terror</a></li></Link>
            <Link to='/filmes/comedias'><li><a className="dropdown-item">Comedia</a></li></Link>
            <Link to='/filmes/infantils'><li><a className="dropdown-item">Desenho</a></li></Link>
            <Link to='/filmes/romances'><li><a className="dropdown-item">Romance</a></li></Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Logo
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Logos marcas</a></li>
            <li><a className="dropdown-item" href="#">3D</a></li>
            <li><a className="dropdown-item" href="#">lojas</a></li>
            <li><a className="dropdown-item" href="#">Comercio</a></li>
            <li><a className="dropdown-item" href="#">Mercado</a></li>
            <li><a className="dropdown-item" href="#">Games</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </div>
    )
}

export default Navbar