import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './literatura-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";
import ReligiaoLivross from "../Religiao/Religiao";


const LivrosPorIdLiteratura = () => {


  const { id } = useParams()

  const [livros, setLivros] = useState('');

  const user = localStorage.getItem("id");



  useEffect(() => {

    const fetchUsers = async () => {
      try {

        await fetch(`http://localhost:3005/literatura/${user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'aplication/json',
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            setLivros(data)
          })
      } catch (error) {
        console.log({ error: 'Erro ao buscar usuários' })
        console.log(error)
      }
    }
    fetchUsers();

  }, [])




  return (
    <div calssName="Literatura">


      <Navbar />

      <div className="div-Id-livro">

        <div className="div-inf-livro">
        <div className="div-voltar">
          <Link className='Voltar' to='/livros'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          </div>
          <div className="center-infor-livro">

            <div className="div-caixa-img">

              <div className="div-img-id"><img src={livros.img} /></div>
              <div className="div-inf-id">
                <p>TITULO - {livros.titulo}</p>
                <p>AUTOR - {livros.autor}</p>
                <p>PAGINA - {livros.pagina} </p>
                <p>ANO - {livros.ano}</p>
                <p>DATA - {livros.data}</p>
                <p>GENERO - Infantil</p>
                <p>FORMATO - Pdf</p>
              </div>

            </div>


            <div className="description-id">
              <div className="div-descricao-id">
                <h5>Descrição - <br /> {livros.descricao} </h5>
              </div>
              <a href={livros.linkLivro}><div className="button-livro-id"><button>BAIXAR OU LER</button></div></a>
            </div>



          </div>

        </div>

      </div>

      <div className="opcoesLivros">


        <div className="div-livros">

          <ReligiaoLivross />

        </div>
      </div>

      <PrivatesForm />

    </div>
  )
}

export default LivrosPorIdLiteratura;