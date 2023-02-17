/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './crud-modules.css'

const createAventura = () => {

  const [Titulo, setTitulo] = useState()
  const [Autor, setAutor] = useState()
  const [Data, setData] = useState()
  const [Pagina, setPagina] = useState()
  const [DescricaoMin, setDescricaoMin] = useState()
  const [Descricao, setDescricao] = useState()
  const [Img, setImg] = useState()
  const [LinkLivro, setLinkLivro] = useState()
  const [Ano, setAno] = useState()

  const user = localStorage.getItem("id")

  const handleTitulo = (e) => {
    setTitulo(e.target.value)
  }
  const handleAutor = (e) => {
    setAutor(e.target.value)
  }
  const handleAno = (e) => {
    setAno(e.target.value)
  }
  const handlePagina = (e) => {
    setPagina(e.target.value)
  }
  const handleDescricao = (e) => {
    setDescricao(e.target.value)
  }
  const handleDescricaoMin = (e) => {
    setDescricaoMin(e.target.value)
  }
  const handleData = (e) => {
    setData(e.target.value)
  }
  const handleImg = (e) => {
    setImg(e.target.value)

  }

  const handleLinkLivro = (e) => {
    setLinkLivro(e.target.value)

  }



  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
    console.log('fui-clicado')


    axios.post('http://localhost:3005/aventura', {
      titulo: Titulo,
      autor: Autor,
      pagina: Pagina,
      descricaoMin: Descricao,
      descricao: DescricaoMin,
      data: Data,
      img: Img,
      linkLivro: LinkLivro,
      ano: Ano,
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
      <form class="row g-3" onSubmit={aoSalvar}>
        <Link className='Voltar' to='/posts'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg></Link>

        <h5>publicar livro em Aventura</h5>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Titulo</label>
          <input type="text" onChange={handleTitulo} required placeholder="TITULO DO LIVRO" value={Titulo} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Autor</label>
          <input type="text" onChange={handleAutor} placeholder="AUTOR DO LIVRO" value={Autor} class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Data de Publicação</label>
          <input type="date" onChange={handleData} placeholder="DATA DO LIVRO" value={Data} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Ano do Livro</label>
          <input type="text" class="form-control" onChange={handleAno} placeholder='ANO DE LANÇAMENTO' value={Ano} id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Descrição minima</label>
          <input type="text" onChange={handleDescricaoMin} placeholder='DESCRIÇÃO MINIMA DO LIVRO' value={DescricaoMin} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Url da Imagem</label>
          <input type="text" onChange={handleImg} placeholder="URL - MAX 50KB" value={Img} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Descrição Detalhada</label>
          <input type="text" class="form-control" onChange={handleDescricao} required placeholder="DESCRIÇAO DETALHADA DO LIVRO" value={Descricao} id="inputAddress2" />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Link do livro</label>
          <input type="text" onChange={handleLinkLivro} placeholder='LINK DO LIVRO' value={LinkLivro} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">Numero de Paginas</label>
          <input type="number" onChange={handlePagina} required placeholder="NUMERO DE PAGIANS DO LIVRO" value={Pagina} class="form-control" id="inputCity" />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">CRIAR LIVRO DE AVENTURA</button>

        </div>

      </form>



    </section>
  )
}

export default createAventura