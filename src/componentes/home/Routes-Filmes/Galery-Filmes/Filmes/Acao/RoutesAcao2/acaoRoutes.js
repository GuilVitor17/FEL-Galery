import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../acao-modules.css'
import FilmesAcaoInfomacoesRoutes from "../RoutesAcao2/FilmesAcaoRoutes";

const AcaosfilmesRoutes = () => {

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
       filmes.map((filmes) => (
         <FilmesAcaoInfomacoesRoutes
         titulo={filmes.titulo}
         Id={filmes._id}
         descricaoMin={filmes.descricaoMin}
         img={filmes.img}
         data={filmes.data}
         />
       )     

         )}
    
</Carousel>
    </div>
  )
}

export default AcaosfilmesRoutes