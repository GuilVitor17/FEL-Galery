import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './literatura-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";


const LivrosPorIdLiteratura = () => {


    const { id } = useParams()

    const [livros, setLivros] = useState('');

    const user = localStorage.getItem("id");



    useEffect(()=>{ 

      const fetchUsers = async () => { 
        try {
    
       await fetch(`http://localhost:3005/literatura/${user}`, {
           method:'GET',
           headers:{
             'Content-Type': 'aplication/json',
         }})
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        setLivros(data)
        })   
      } catch (error) {
        console.log({ error:'Erro ao buscar usuários'})
        console.log(error)
  }
}
fetchUsers();
       
 },[])



     
  return (
    <div calssName="Literatura">
               
          
          <Navbar />

          <div className="div-Id-livro">

            <div className="div-inf-livro">

              <div className="center-infor-livro">

                <div className="div-caixa-img">

                  <div className="div-img-id"><img src={livros.img}/></div>
                  <div className="div-inf-id">
                    <p>TITULO - {livros.titulo}</p>
                    <p>AUTOR - {livros.autor}</p>
                    <p>PAGINA - {livros.pagina} </p>
                    <p>ANO - {livros.ano}</p>
                    <p>DATA - {livros.data}</p>
                    <p>GENERO - Literatura</p>
                    <p>FORMATO - Pdf</p>
                  </div>

                </div>


                <div className="description-id">
                  <div className="div-descricao-id">
                    <h5>Descrição - <br /> {livros.descricao} </h5>
                  </div>
                 <a href={livros.linkLivro}><div className="button-livro-id"><button>link</button></div></a> 
                </div>



              </div>

            </div>

          </div>
            {/* <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={livros.img} />
                    <div className="InfomacoesLivro">
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">TITULO -
                       {livros.titulo}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">AUTOR - {livros.editora} </h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">PAGINAS - {livros.pagina}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">ANO - {livros.ano}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">FORMATO - PDF</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">GENERO - {livros.genero}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">NOME IMAGE - {livros.nameImg}</h5>
                    </div>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="DescricaoLivro">
                      <h6 className="modal-title fs-7" id="staticBackdropLabel">
                        DESCRIÇÃO - <br /> {livros.descricao} 
                      </h6>

                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                   <a href={livros.linkLivro}><button type="button" className="btn btn-primary">Baixar</button></a>
                  </div>
                </div>

              </div>

              </div>


            */}

<PrivatesForm />

    </div>
  )
}

export default LivrosPorIdLiteratura;