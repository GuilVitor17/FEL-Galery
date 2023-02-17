import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './infantil-modules.css'
import LivrosReligiaoInfomacoes from "./LivrosInfantil";

const InfantilLivros = () => {

  const [livros, setLivros] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/infantil`, {
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
    <div calssName="Infantil-livros">
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
     
     {livros.length > 0 &&
       livros.map((livros) => (
         <LivrosReligiaoInfomacoes
         titulo={livros.titulo}
         Id={livros._id}
         descricaoMin={livros.descricaoMin}
         img={livros.img}
         data={livros.data}
         />
       )     

         )}
    
</Carousel>
    </div>
  )

}

export default InfantilLivros;