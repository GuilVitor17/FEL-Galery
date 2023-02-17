import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'
import FilmesDestaqueInfomacoes from "./FilmesDestaque";

const DestaqueEditfilmes = () => {

  const [filmes, setFilmess] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/filmescarrossel`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
    .then(resp => resp.json())
     .then(data => {
      setFilmess(data)
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
    <div className="destaque-filmes">
       <Carousel calssName="carrossel"
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ]}
            >
     
     {filmes.length > 0 &&
       filmes.map((filmes) => (
         <FilmesDestaqueInfomacoes
         titulo={filmes.titulo}
         Id={filmes._id}
         descricaoMin={filmes.descricaoMin}
         imgCapa={filmes.imgCapa}
         img={filmes.img}
         data={filmes.data}
         genero={filmes.genero}
         />
       )     

         )}
    
</Carousel>
    </div>
  )
}

export default DestaqueEditfilmes