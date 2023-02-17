import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './romance-modules.css'
import FilmesRomanceInfomacoes from "./FilmesRomance";

const Romancefilmes = () => {

  const [filmess, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`http://localhost:3005/romance`, {
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
    <div calssName="Romance-filmes">
       
       <Link className="button-criar" to='createromancefilmes'><button>CRIAR filmes ROMANCE</button></Link>

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
     
     {filmess.length > 0 &&
       filmess.map((filmess) => (
         <FilmesRomanceInfomacoes
         titulo={filmess.titulo}
         Id={filmess._id}
         descricao={filmess.descricao}
         img={filmess.img}
         data={filmess.data}
         />
       )     

         )}
    
</Carousel>

    </div>
  )
}

export default Romancefilmes