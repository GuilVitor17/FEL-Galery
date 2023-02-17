/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'


const FilmesUpdateromance = (filmesUpdate) => {


    const { id } = useParams()


    console.log(filmesUpdate.div)


    const [Titulo, setTitulo] = useState()
    const [Diretor, setDiretor] = useState()
    const [Data, setData] = useState()
    const [Duracao, setDuracao] = useState()
    const [DescricaoMin, setDescricaoMin] = useState()
    const [Descricao, setDescricao] = useState()
    const [Img, setImg] = useState()
    const [LinkFilme, setLinkFilme] = useState()
    const [Ano, setAno] = useState()
    const [NomeAtor1, setAtor1] = useState()
    const [ImageAtor1, setAtorImage1] = useState()
    const [NomeAtor1Filme, setAtor1Filme] = useState()
    const [NomeAtor2, setAtor2] = useState()
    const [ImageAtor2, setAtorImage2] = useState()
    const [NomeAtor2Filme, setAtor2Filme] = useState()
    const [NomeAtor3, setAtor3] = useState()
    const [ImageAtor3, setAtorImage3] = useState()
    const [NomeAtor3Filme, setAtor3Filme] = useState()
    const [NomeAtor4, setAtor4] = useState()
    const [ImageAtor4, setAtorImage4] = useState()
    const [NomeAtor4Filme, setAtor4Filme] = useState()
    const [NomeAtor5, setAtor5] = useState()
    const [ImageAtor5, setAtorImage5] = useState()
    const [NomeAtor5Filme, setAtor5Filme] = useState()
  
  
    const user = localStorage.getItem("id")
  
    const handleTitulo = (e) => {
      setTitulo(e.target.value)
    }
    const handleDiretor = (e) => {
      setDiretor(e.target.value)
    }
    const handleAno = (e) => {
      setAno(e.target.value)
    }
    const handleDuracao = (e) => {
      setDuracao(e.target.value)
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
  
    const handleLinkFilme= (e) => {
      setLinkFilme(e.target.value)
  
    }
  
  
    const handleAtor1 = (e)=>{
      setAtor1(e.target.value)
    }
  
    const handleAtorImage1 = (e)=>{
      setAtorImage1(e.target.value)
    }
    const handleAtor1Filme = (e)=>{
      setAtor1Filme(e.target.value)
    }
  
    const handleAtor2 = (e)=>{
      setAtor2(e.target.value)
    }
  
    const handleAtorImage2 = (e)=>{
      setAtorImage2(e.target.value)
    }
    const handleAtor2Filme = (e)=>{
      setAtor2Filme(e.target.value)
    }
  
  
    const handleAtor3 = (e)=>{
      setAtor3(e.target.value)
    }
  
    const handleAtorImage3 = (e)=>{
      setAtorImage3(e.target.value)
    }
    const handleAtor3Filme = (e)=>{
      setAtor3Filme(e.target.value)
    }
  
  
    const handleAtor4 = (e)=>{
      setAtor4(e.target.value)
    }
  
    const handleAtorImage4 = (e)=>{
      setAtorImage4(e.target.value)
    }
    const handleAtor4Filme = (e)=>{
      setAtor4Filme(e.target.value)
    }
  
    const handleAtor5 = (e)=>{
      setAtor5(e.target.value)
    }
  
    const handleAtorImage5 = (e)=>{
      setAtorImage5(e.target.value)
    }
    const handleAtor5Filme = (e)=>{
      setAtor5Filme(e.target.value)
    }
  

    const Update = (e) => {
        e.preventDefault()


        axios.put(`http://localhost:3005/romance/${id}`, {
            titulo: Titulo,
            diretor: Diretor,
            duracao: Duracao,
            descricaoMin: Descricao,
            descricao: DescricaoMin,
            data: Data,
            img: Img,
            linkFilme: LinkFilme,
            ano: Ano,
            nomeAutor1: NomeAtor1,
            nomeAutor1filme: NomeAtor1Filme,
            imgAutor1: ImageAtor1,
            nomeAutor2: NomeAtor2,
            nomeAutor2filme: NomeAtor2Filme,
            imgAutor2: ImageAtor2,
            nomeAutor3: NomeAtor3,
            nomeAutor3filme: NomeAtor3Filme,
            imgAutor3: ImageAtor3,
            nomeAutor4: NomeAtor4,
            nomeAutor4filme: NomeAtor4Filme,
            imgAutor4: ImageAtor4,
            nomeAutor5: NomeAtor5,
            nomeAutor5filme: NomeAtor5Filme,
            imgAutor5: ImageAtor5,
        })
            .then(data => {
                // setfilmesUpdate(data.id)
                console.log(data.id)
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'FILME ROMANCE ATUALIZADO',
                  showConfirmButton: false,
                  timer: 10000
                })
            })
            .catch((err) => console.log(err))
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'ALGO SAIU ERRADO',
            })


    }

    return (
        <section className="formulario">
            <div>
                <form class="row g-3" onSubmit={Update}>
                <Link className='Voltar' to='/posts/filmes'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg></Link>

                    <h5>Editar filmes em ROMANCE</h5>
                    <div class="col-md-4">
          <label for="inputEmail4" class="form-label">Titulo</label>
          <input type="text" onChange={handleTitulo} required placeholder="TITULO DO FILME" value={Titulo} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputPassword4" class="form-label">Diretor</label>
          <input type="text" onChange={handleDiretor} placeholder="DIRETOR DO FILME" value={Diretor} class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-2">
          <label for="inputEmail4" class="form-label">Data de Publicação</label>
          <input type="date" onChange={handleData} placeholder="DATA DO filme" value={Data} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputPassword4" class="form-label">Ano do filme</label>
          <input type="text" class="form-control" onChange={handleAno} placeholder='ANO DE LANÇAMENTO' value={Ano} id="inputPassword4" />
        </div>
        <div class="col-md-4">
          <label for="inputEmail4" class="form-label">Descrição minima</label>
          <input type="text" onChange={handleDescricaoMin} placeholder='DESCRIÇÃO MINIMA DO LIVRO' value={DescricaoMin} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputEmail4" class="form-label">Url da Imagem</label>
          <input type="text" onChange={handleImg} placeholder="URL - MAX 50KB" value={Img} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-5">
          <label for="inputAddress2" class="form-label">Descrição Detalhada</label>
          <input type="text" class="form-control" onChange={handleDescricao} required placeholder="DESCRIÇAO DETALHADA DO LIVRO" value={Descricao} id="inputAddress2" />
        </div>
        <div class="col-md-3">
          <label for="inputCity" class="form-label">Link do FILME</label>
          <input type="text" onChange={handleLinkFilme} placeholder='LINK DO FILME' value={LinkFilme} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-3">
          <label for="inputCity" class="form-label">DURACAO DO FILME </label>
          <input type="text" onChange={handleDuracao} required placeholder="DURACAO DO FILME" value={Duracao} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 1 </label>
          <input type="text" onChange={handleAtor1} required placeholder="NOME AUTOR" value={NomeAtor1} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 1 </label>
          <input type="text" onChange={handleAtor1Filme} required placeholder="NOME FILME" value={NomeAtor1Filme} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">IMAGE AUTOR 1 </label>
          <input type="text" onChange={handleAtorImage1} required placeholder="NOME AUTOR " value={ImageAtor1} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 2 </label>
          <input type="text" onChange={handleAtor2} required placeholder="NOME AUTOR" value={NomeAtor2} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 2 </label>
          <input type="text" onChange={handleAtor2Filme} required placeholder="NOME FILME" value={NomeAtor2Filme} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">IMAGE AUTOR 2 </label>
          <input type="text" onChange={handleAtorImage2} required placeholder="NOME AUTOR " value={ImageAtor2} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 3 </label>
          <input type="text" onChange={handleAtor3} required placeholder="NOME AUTOR" value={NomeAtor3} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 3 </label>
          <input type="text" onChange={handleAtor3Filme} required placeholder="NOME FILME" value={NomeAtor3Filme} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">IMAGE AUTOR 3 </label>
          <input type="text" onChange={handleAtorImage3} required placeholder="NOME AUTOR " value={ImageAtor3} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 4 </label>
          <input type="text" onChange={handleAtor4} required placeholder="NOME AUTOR" value={NomeAtor4} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 4 </label>
          <input type="text" onChange={handleAtor4Filme} required placeholder="NOME FILME" value={NomeAtor4Filme} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">IMAGE AUTOR 4 </label>
          <input type="text" onChange={handleAtorImage4} required placeholder="NOME AUTOR " value={ImageAtor4} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 5 </label>
          <input type="text" onChange={handleAtor5} required placeholder="NOME AUTOR" value={NomeAtor5} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">NOME AUTOR 5 </label>
          <input type="text" onChange={handleAtor5Filme} required placeholder="NOME FILME" value={NomeAtor5Filme} class="form-control" id="inputCity" />
        </div>
        <div class="col-md-2">
          <label for="inputCity" class="form-label">IMAGE AUTOR 5 </label>
          <input type="text" onChange={handleAtorImage5} required placeholder="NOME AUTOR " value={ImageAtor5} class="form-control" id="inputCity" />
        </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">EDITAR filmes DE AVENTURA</button>

                    </div>

                </form>

                </div>
        </section>
    )
}

export default FilmesUpdateromance