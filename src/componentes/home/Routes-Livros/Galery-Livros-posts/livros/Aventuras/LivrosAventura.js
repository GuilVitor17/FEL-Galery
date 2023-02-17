import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './aventuras-modules.css'


const LivrosAventuraInfomacoes = ({titulo, img,Id ,descricaoMin, data}) => {


     const saveId = () =>{

      localStorage.setItem("id", Id)

     }


     const Delete = (e)=>{
      e.preventDefault()
   

 axios.delete(`http://localhost:3005/aventura/${Id}`, {
  
})
 .then(data =>{
  console.log(data.id)
  alert('Livro Excluido')
 })
 .catch((err) => console.log(err))

 
}

    

  return (
    <div calssName="Aventura">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero">Aventura</h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/livros/aventura/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver livro
                  </button></Link>
                  <div className="button-crud">
                  <Link className="button-editar" to={`updateAventura/${Id}`}><button>Editar</button></Link>
                  <button onClick={Delete} className="button-apagar">Apagar</button>
                  </div>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default LivrosAventuraInfomacoes