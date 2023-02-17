
const Livros = ({ titulo, descricao, img, pagina, editora, nameImage}) => {
    return(
        <div> 
        <p>{titulo}</p>
        <p>{descricao}</p>
        <p>{pagina}</p>
        <p>{editora}</p>
        <p>{nameImage}</p>
        <img src={img}/>
        </div>
     )
}

export default Livros