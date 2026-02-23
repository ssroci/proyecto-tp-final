import React from "react";
import "./Login.css"

function Login(){
    return(
        <section className="login">
         <form className="Formulario">
          
            <label htmlFor="Usuario"> Usuario </label>
            <br />
            <input type="text"  className="usuario" />
            <br />
            <label htmlFor="Password">Contraseña</label>
            <br />
            <input type="password" className="password" />
            <br />
            <br />
            <button className="BotonIngresar"> Ingresar </button>

         </form>
        
        </section>
    )
}

export default Login