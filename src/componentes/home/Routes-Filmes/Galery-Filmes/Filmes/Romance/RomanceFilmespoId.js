import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './romance-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";
import FilmesDesenho from '../../Filmes/Desenho/Desenho'



const FilmesPorIdRomance = () => {


  const { id } = useParams()

  const [filmes, setFilmes] = useState('');

  const user = localStorage.getItem("id");



  useEffect(() => {

    const fetchUsers = async () => {
      try {

        await fetch(`http://localhost:3005/filmeromance/${user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'aplication/json',
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            setFilmes(data)
          })
      } catch (error) {
        console.log({ error: 'Erro ao buscar usuários' })
        console.log(error)
      }
    }
    fetchUsers();

  }, [])




  return (
    <div calssName="Romance">


      <Navbar />

      <div className="div-Id-filmes">

        <div className="div-inf-filmes">
        <div className="div-voltar">
          <Link className='Voltar' to='/filmes'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          </div>
          <div className="center-infor-filmes">

            <div className="div-caixa-img">

              <div className="div-img-id"><img src={filmes.img} /></div>
              <div className="div-inf-id">
                <p>TITULO - {filmes.titulo}</p>
                <p>DIRETOR - {filmes.diretor}</p>
                <p>DURACAO - {filmes.duracao} </p>
                <p>ANO - {filmes.ano}</p>
                <p>DATA - {filmes.data}</p>
                <p>GENERO - Romance</p>
                <p>FORMATO - Pdf</p>
              </div>

            </div>


            <div className="description-id">
              <div className="div-descricao-id">
                <h5>Descrição - <br /> {filmes.descricao} </h5>
              </div>
              <a href={filmes.linkfilmes}><div className="button-filmes-id"><button>BAIXAR OU LER</button></div></a>
            </div>

            
            <div className="div-inf-atores">

              <div>

                <div className="Img-autor"><img src={filmes.imgAutor1} /></div>
                <div className="nome-autor">
                  <h5>{filmes.nomeAutor1}</h5>
                  <h5>{filmes.nomeAutor1Filme}</h5>
                </div>

              </div>

              <div>

              <div className="Img-autor"><img src={filmes.imgAutor2} /></div>
                <div className="nome-autor">
                  <h5>{filmes.nomeAutor2}</h5>
                  <h5>{filmes.nomeAutor2Filme}</h5>
                </div>

              </div>

              <div>

              <div className="Img-autor"><img src={filmes.imgAutor3} /></div>
                <div className="nome-autor">
                  <h5>{filmes.nomeAutor3}</h5>
                  <h5>{filmes.nomeAutor3Filme}</h5>
                </div>

              </div>

              <div>

                <div className="Img-autor"><img src={filmes.imgAutor4} /></div>
                <div className="nome-autor">
                  <h5>{filmes.nomeAutor4}</h5>
                  <h5>{filmes.nomeAutor4Filme}</h5>
                </div>

              </div>

              <div>

              <div className="Img-autor"><img src={filmes.imgAutor5} /></div>
                <div className="nome-autor">
                  <h5>{filmes.nomeAutor5}</h5>
                  <h5>{filmes.nomeAutor5Filme}</h5>
                </div>

              </div>

            </div>


          </div>

        </div>

      </div>

      <div className="opcoesfilmes">


        <div className="div-filmes">

          <FilmesDesenho />


        </div>

      </div>

      <PrivatesForm />

    </div>
  )
}

export default FilmesPorIdRomance