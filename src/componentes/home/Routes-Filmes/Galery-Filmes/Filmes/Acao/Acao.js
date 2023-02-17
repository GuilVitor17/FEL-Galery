import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './acao-modules.css'
import FilmeAcaoInfomacoes from "./FilmeAcao";

const FilmeAcao = () => {

  const [Filme, setFilme] = useState('')
    


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
      setFilme(data)
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
    <div calssName="Acao-Filme" id="Acao">
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
     
     {Filme.length > 0 &&
       Filme.map((Filme) => (
         <FilmeAcaoInfomacoes
         titulo={Filme.titulo}
         Id={Filme._id}
         descricaoMin={Filme.descricaoMin}
         img={Filme.img}
         data={Filme.data}
         />
       )     

         )}
    
</Carousel>
    </div>
  )

}

export default FilmeAcao;