import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Formulario = () => {

    // const url = 'http://localhost:3000/livros'

    const [Titulo, setTitulo] = useState()
    // const [Autor, setAutor] = useState()
    const [Editora, setEditora] = useState()
    const [Pagina, setPagina] = useState()
    const [Descricao, setDescricao] = useState()
    const [NameImage, setNameImage] = useState()
    const [ImageUrl, setImageUrl] = useState()

    const user = localStorage.getItem("id")

    const handleTitulo = (e)=>{
        setTitulo(e.target.value)
    }
    // const handleAutor = (e)=>{
    //     setAutor(e.target.value)
    // }
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
        const filename = document.getElementById("fileInput").files[0].name;
        console.log(filename)
    }

    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
        console.log('fui-clicado')

       
        axios.post('http://localhost:3005/livros', {
            titulo : Titulo,
            editora : Editora,
            pagina : Pagina,
            descricao : Descricao,
        })
        .then(response => {
            console.log(response.data);
            console.log(response);
            alert('Livro Criado Com sucesso')
        })
        .catch(function (error) {
            console.error(error);
        });
        // 

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar} id="container" method='POST' encType='multipart/form-data'>
               <Link to='/'><button>Voltar</button></Link>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <label label="Titulo" id="Titulo" name="titulo" placeholder="Digite seu titulo">
                <input onChange={handleTitulo} required placeholder="Titulo" value={Titulo} name="Titulo" />
                </label>

                {/* <label required label="Autor" id="Autor" name="autor" placeholder="Digite seu autor">
                <input onChange={handleAutor}  placeholder="Autor" value={Autor} name="Autor" />
                </label> */}

                <label  label="Editora" id="Editora" name="editora" placeholder="Digite seu editora">
                <input onChange={handleEditora}  placeholder="Editora" value={Editora} name="Editora" />
                </label>

                <label required label="Paginas" id="Pagina" name="pagina" placeholder="Digite Paginas">
                <input type='Number' onChange={handlePagina} required placeholder="Pagina" value={Pagina} name="Pagina" />
                </label>

                <label required label="Descriçao" id="Descricao" name="descricao" placeholder="Digite a descricao">
                <input onChange={handleDescricao} required placeholder="Descricao" value={Descricao} name="Descricao" />
                </label>

                <label required label="Nome-Image" id="NameImage" name="nameImage" placeholder="Digite o nome-Image">
                <input onChange={handleNameImage}  placeholder="NameImage" value={NameImage} name="NameImage" />
                </label>

                <label required label="Imagem-url" id="ImageUrl" name="ImageUrl" placeholder="Digite o endereço url da imagem">
                <input onChange={handleImageUrll} type="file" id="fileInput" value={ImageUrl} />

                </label>
                <button type='submit'>CRIAR</button>
                
            </form>
            

        </section>
    )
}

export default Formulario