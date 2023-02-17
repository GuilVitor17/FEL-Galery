import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './form-home-modules.css'
import PrivatesInfLogo from "./inf-logo";


const PrivatesForm = () => {

    return(
         <div className="form-contato">

            <div className="div-caixa-form">
              <div className="div-form">
                <form>
                    <label className="label-name">Nome:
                        <br/>
                    <input type='name'  />
                    </label>
                    <label className="label-Sobrename">SobreNome:
                        <br/>
                    <input type='name' required  />
                    </label>
                    <label>E-mail:
                        <br/>
                    <input type='email'  />
                    </label>
                    <label>Telefone:
                        <br/>
                    <input type='name'  />
                    </label>
                    <label>Mensagem:
                        <br/>
                    <input type='name'  />
                    </label>

                    <button type="">Enviar</button>

                </form>
              </div>
              <div className="div-inf-logo"> <PrivatesInfLogo /> </div>    
            </div> 
        
       
        </div>
    )
}

export default PrivatesForm