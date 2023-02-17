import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'
import LivrosDestaqueInfomacoes from "./LivrosDestaque";

const DestaqueEditLivros = () => {

  const [livros, setLivros] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/livroscarrossel`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
    .then(resp => resp.json())
     .then(data => {
      setLivros(data)
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
    <div className="destaque-livros">
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
     
     {livros.length > 0 &&
       livros.map((livros) => (
         <LivrosDestaqueInfomacoes
         titulo={livros.titulo}
         Id={livros._id}
         descricaoMin={livros.descricaoMin}
         imgCapa={livros.imgCapa}
         img={livros.img}
         data={livros.data}
         genero={livros.genero}
         />
       )     

         )}
    
</Carousel>
    </div>
  )
}

export default DestaqueEditLivros