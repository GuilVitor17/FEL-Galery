import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import '@brainhubeu/react-carousel/lib/style.css';
import './acao-modules.css'


const FilmesAcaoInfomacoes = ({titulo, img,Id ,descricaoMin, data}) => {


    const [filmes, setFilmes] = useState('')

    const { id } = useParams()


    useEffect(()=>{ 
    
       fetch(`http://localhost:3005/Acao`, {
          method:'GET',
          headers:{
            'Content-Type': 'aplication/json',
        }})
      .then(resp => resp.json())
       .then(data => {
        setFilmes(data)
        console.log(data)
        console.log(data.id)
  
       })
       .catch((err) => console.log(err))
  
      
},[])


     const saveId = () =>{

      localStorage.setItem("id", Id)

     }
    

  return (
    <div calssName="Acao">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero-1"><b>Acao</b></h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/Filmes/acao/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver livro
                  </button></Link>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default FilmesAcaoInfomacoes