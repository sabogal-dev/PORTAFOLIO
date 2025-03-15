import React from 'react'
import './principal.css'
export default function Principal() {
    return (
        <>
            <section className="principal">
                <div className='imagen'>
                    <img src="./src/assets/imgperfil.jpg" alt="img de perfil" />
                    <a href="https://www.linkedin.com/in/david-emilio-sabogal-herre%C3%B1o-898826299/" target="_blank">Disponible para trabajar</a>
                </div>
                <h1>Hey, soy David</h1>
                <p>He desarrollado soluciones funcionales, como herramientas para la empresa en la que trabajo, conectando una API del ERP Odoo mediante Node.js y con un front-end con js vanila, para automatizar cálculos y mejorar procesos internos.</p>
                <div className='contacto'>

                </div>
            </section>
        </>
    )
}
