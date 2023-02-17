import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


 const LivrosUpdate = (LivrosUpdate) => {

  
  const { id } = useParams()


    console.log(LivrosUpdate.div)


    const [Titulo, setTitulo] = useState()
    const [Autor, setAutor] = useState()
    const [Editora, setEditora] = useState()
    const [Pagina, setPagina] = useState()
    const [Descricao, setDescricao] = useState()
    const [NameImage, setNameImage] = useState()
    const [ImageUrl, setImageUrl] = useState()
    const [livro, setLivroUpdate] = useState()


    const handleTitulo = (e)=>{
        setTitulo(e.target.value)
    }
    const handleAutor = (e)=>{
        setAutor(e.target.value)
    }
    const handleEditora = (e)=>{
        setEditora(e.target.value)
    }
    const handlePagina = (e)=>{
        setPagina(e.target.value)
    }
    const handleDescricao = (e)=>{
        setDescricao(e.target.value)
    }
    const handleNameImage = (e)=>{
        setNameImage(e.target.value)
    }
    const handleImageUrll = (e)=>{
        setImageUrl(e.target.value)
    }

    const Update = (e)=>{
      e.preventDefault()
   

 axios.put(`http://localhost:3000/livros/${id}`, {
  titulo : Titulo,
  autor : Autor,
  editora : Editora,
  pagina : Pagina,
  descricao : Descricao,
  nameImage : NameImage,
  img : ImageUrl
})
 .then(data =>{
  setLivroUpdate(data.id)
  console.log(data.id)
  alert('livroAtualizado')
 })
 .catch((err) => console.log(err))

 
}

    return(
      <section className='LivrosUpdate' id='divs'>
       <div>
       <form onSubmit={Update} id="container">
               <Link to='/'><button>Voltar</button></Link>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <label label="Titulo" id="Titulo" name="titulo" placeholder="Digite seu titulo">
                <input onChange={handleTitulo}  placeholder="Titulo" value={Titulo} name="Titulo" />
                </label>

                <label  label="Autor" id="Autor" name="autor" placeholder="Digite seu autor">
                <input onChange={handleAutor}  placeholder="Autor" value={Autor} name="Autor" />
                </label>

                <label  label="Editora" id="Editora" name="editora" placeholder="Digite seu editora">
                <input onChange={handleEditora}  placeholder="Editora" value={Editora} name="Editora" />
                </label>

                <label  label="Paginas" id="Pagina" name="pagina" placeholder="Digite Paginas">
                <input type='Number' onChange={handlePagina}  placeholder="Pagina" value={Pagina} name="Pagina" />
                </label>

                <label  label="Descriçao" id="Descricao" name="descricao" placeholder="Digite a descricao">
                <input onChange={handleDescricao}  placeholder="Descricao" value={Descricao} name="Descricao" />
                </label>

                <label  label="Nome-Image" id="NameImage" name="nameImage" placeholder="Digite o nome-Image">
                <input onChange={handleNameImage}  placeholder="NameImage" value={NameImage} name="NameImage" />
                </label>

                <label  label="Imagem-url" id="ImageUrl" name="ImageUrl" placeholder="Digite o endereço url da imagem">
                <input onChange={handleImageUrll}  placeholder='ImageUrl' value={ImageUrl} name="image" />
                </label>
                <button type='submit'>CRIAR</button>
            </form>

        
       
       </div>
      </section>
     )
}

export default LivrosUpdate