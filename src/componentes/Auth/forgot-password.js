import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './forgot-modules.css'
import Logomarca from '../img/LogoSite.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const forgotPassword = () => {

      

    return(
        <div className="div-forgot"> 
        <div className="div-forgot-center">
        <Link className='Voltar' to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          <div className="div-forgot-image"> <img src={Logomarca} /> </div>
            <form className="formulario-forgot">    
             <h4>Digiste seu E-mail para trocar senha</h4>
                <label>
                    E-mail:<input type='email' class="form-control" id="exampleFormControlInput1" placeholder="Email"  />
                </label>
                <Link className="editar-password" to='/forgot-password-token'><button type="submit"><b>PROXIMO</b></button></Link>  
            </form>
            </div>
        </div>
     )
}

export default forgotPassword