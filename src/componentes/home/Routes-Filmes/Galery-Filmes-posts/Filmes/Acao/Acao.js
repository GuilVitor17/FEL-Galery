import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './acao-modules.css'
import FilmesAcaoInfomacoes from "./FilmesAcao";

const FilmesAcao = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/filmeacao`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
    .then(resp => resp.json())
     .then(data => {
      setFilmes(data)
      console.log(data)

     })
     .catch((err) => console.log(err))

    
  } catch (error) {
        console.log({ error:'Erro ao buscar usuários'})
        console.log(error)
  }
}
fetchUsers();

},[])





  return (
    <div calssName="Acao-filmes">

      <Link className="button-criar" to='createacao'><button>CRIAR FILMES ACAO</button></Link>

       <Carousel calssName="carrossel"
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ]}
            >
     
     {filmes.length > 0 &&
       filmes.map((filmess) => (
         <FilmesAcaoInfomacoes
         titulo={filmess.titulo}
         Id={filmess._id}
         descricao={filmess.descricao}
         descricaoMin={filmess.descricaoMin}
         img={filmess.img}
         data={filmess.data}
         />
       )     

         )}
    
</Carousel>
    </div>
  )

}

export default FilmesAcao;