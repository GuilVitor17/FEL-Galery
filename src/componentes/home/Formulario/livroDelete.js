import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


 const LivroDelete = (LivrosUpdate) => {

  
  const { id } = useParams()


    console.log(LivrosUpdate.div)


    const [livro, setLivroUpdate] = useState()


    const Delete = (e)=>{
      e.preventDefault()
   

 axios.delete(`http://localhost:3000/livros/${id}`, {
  
})
 .then(data =>{
  setLivroUpdate(data.id)
  console.log(data.id)
  alert('Livro Excluido')
 })
 .catch((err) => console.log(err))

 
}

    return(
      <section className='LivrosUpdate' id='divs'>
       <div>
       <form onSubmit={Delete} id="container">
                <button type='submit'>Excluir</button>
            </form>

        
       
       </div>
      </section>
     )
}

export default LivroDelete