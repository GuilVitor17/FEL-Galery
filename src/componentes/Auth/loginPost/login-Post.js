import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import '../login-module.css'
import Logomarca from '../../img/LogoSite.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'



const LoginPost = () => {


      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('')
      // const [Id, setId] = useState('')

      // const { id } = useParams();

       const navigate = useNavigate();




      const handleEmail = (e)=>{
        setEmail(e.target.value)
      }

      const handlePassword = (e)=>{
        setPassword(e.target.value)
      }


      const AuthLogin = (e)=>{

        e.preventDefault()

        axios.post(`http://localhost:3000/authPost/authenticatePost`,{

        email:email,
        password: password

        })
        .then(response =>{
            console.log(response)
            console.log(response.data.msg)
            console.log(response.data.token)
            console.log(response.data.id)
            navigate("/posts")
            localStorage.setItem("tokenPost", response.data.token)
            localStorage.setItem("id", response.data.user._id)
            window.location = `/posts`
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Bem vindo - ${email}`,
              showConfirmButton: false,
              timer: 10000,
            })
             
        })
        .catch(function (error) {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha ou E-mail Incorretos',
          })
         

      });

      }


    return(
        <div className="div-login"> 
        <div className="div-login-center">
        <Link className='Voltar' to='/livros'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          <div className="div-login-image">
            
             <img src={Logomarca} /> </div>
            <form onSubmit={AuthLogin} className="formulario-Login" novalidate>
    
                <label>
                    E-mail:<input type='email' placeholder="Email" class="form-control" id="exampleFormControlInput1" value={email} onChange={handleEmail}  required/>
                </label>
                <label>
                    Senha:<input type='password' placeholder="Senha" class="form-control" id="exampleFormControlInput1" value={password} onChange={handlePassword} />
                </label>
                <button type="submit"><b>ENTRAR</b></button>     
            </form>
            <div className="div-login-link"> 
            </div>
            </div>
        </div>
     )
}

export default LoginPost