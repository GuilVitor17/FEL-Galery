import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './romance-modules.css'
import LivrosRomanceInfomacoes from "./LivrosRomance";

const RomanceLivros = () => {

  const [livros, setLivros] = useState('')
    


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
    <div calssName="Romance-livros">
       
       <Link className="button-criar" to='createromance'><button>CRIAR LIVRO ROMANCE</button></Link>

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
         <LivrosRomanceInfomacoes
         titulo={livros.titulo}
         Id={livros._id}
         descricao={livros.descricao}
         img={livros.img}
         data={livros.data}
         />
       )     

         )}
    
</Carousel>

    </div>
  )
}

export default RomanceLivros