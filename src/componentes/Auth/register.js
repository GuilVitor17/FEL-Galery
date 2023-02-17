import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logomarca from '../img/LogoSite.png'
import './register-modules.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Register = () => {

     const [name, setName ] = useState('');
     const [email, setEmail ] = useState('');
     const [password, setPassword ] = useState('');
     const [comfirmPAssword, setComfirmPassword ] = useState('');


     const handleName = (e)=> {
        setName(e.target.value)
     }

     const handleEmail = (e)=> {
        setEmail(e.target.value)
     }

     const handlePassword = (e)=> {
        setPassword(e.target.value)
     }

     const navigate = useNavigate();


     

     const createAcc = (evento)=>{

        evento.preventDefault()
        console.log('fui-clicado')


        axios.post('http://localhost:3000/auth/register',{
          name:name,
          email:email,
          password:password,
        })
        .then(response =>{
            alert('Conta criada')
            console.log(response)
            console.log(response.data)
            navigate("/login")
            window.location = `/login`
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Conta criada com sucesso - ${name}`,
                showConfirmButton: false,
                timer: 7000,
              })
        })
        .catch(function (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Não foi possivel criar sua conta! - ${name}`,
              })
        });

     }

    return(
        <div className="div-register"> 
        <div className="div-register-center">
        <Link className='Voltar' to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          <div className="div-register-image"> <img src={Logomarca} /> </div>
            <form onSubmit={createAcc} className="formulario-register">
                <label>
                    Name:<input type='name' class="form-control" id="exampleFormControlInput1" placeholder="Name" required value={name} onChange={handleName} />
                </label>
                <label>
                    E-mail:<input type='email' class="form-control" id="exampleFormControlInput1" placeholder="E-mail" required value={email} onChange={handleEmail} />
                </label>
                <label>
                    Senha:<input type='password' class="form-control" id="exampleFormControlInput1" placeholder="Senha" required value={password} onChange={handlePassword} />
                </label>
               
                <button type="submit"><b>CRIAR CONTA</b></button>
            </form>
        </div>
        </div>
     )
}

export default Register