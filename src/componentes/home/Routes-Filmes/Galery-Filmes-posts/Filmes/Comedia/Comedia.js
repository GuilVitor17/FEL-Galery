import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './comedia-modules.css'
import FilmesComediaInfomacoes from "./FilmeComedia";

const Comediasfilmes = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/filmecomedia`, {
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
    <div calssName="Comedia-filmes">
      
      <Link className="button-criar" to='createcomedia'><button>CRIAR FILME COMEDIA</button></Link>

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
         <FilmesComediaInfomacoes
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

export default Comediasfilmes