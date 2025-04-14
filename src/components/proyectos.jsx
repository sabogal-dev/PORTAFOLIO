import React from 'react'
import "../styles/proyectos.css"


const personas = [
    {
        id: 1,
        titulo: "FastPay",
        descripcion: "Aplicacion fullstack conectada a la Api de Odoo de la empresa, consulta facturas para que asesores comerciales calculen descuentos para sus clientes y muestra un historial de pagos de cada factura, agilizando un 30% los procesos",
        imagen: "https://sabogal.tech/CDNportafolio/aprovehaDescuento.png",
        url: "https://sabogal.top"
    },
    {
        id: 2,
        titulo: "Dashboard CODE",
        descripcion: "Visualiza estadísticas, productos y objetivos con React, Tailwind y Tremor Charts. Herramienta clave para el seguimiento empresarial y la toma de decisiones.",
        imagen: "https://themes.getbootstrap.com/wp-content/uploads/2020/09/front-dashboard-v2-cover.jpeg",
        url: "https://sabogal.top/dashboard/"
    },
    {
        id: 3,
        titulo: "WorkoutApp",
        descripcion: "Mejora tus entrenamietos con una agenda dedicada al Gym, multiples estadisticas, conectada a Supabase para BD y autenticacion de usuarios",
        imagen: "https://sabogal.tech/CDNportafolio/workoutapp.png",
        url: "https://sabogal.tech/workoutapp/login.html"
    },
]


function Card(props) {
    const { titulo, descripcion, imagen, url } = props;
    return (
        <div className='card' >
            <img src={imagen} alt="prueba" />
            <div className='cardDiv'>
                <h2>{titulo}</h2>
                <div>
                    <p></p>
                    <p>{descripcion}</p>

                </div>
                <a href={url} target='_blank' className='boton'>Go app</a>
            </div>
        </div>
    )
};

export default function Proyectos() {
    return (
        <section className='proyectos'>
            <h2>Proyectos</h2>
            {personas.map((persona) => (
                <Card
                    key={persona.id}
                    titulo={persona.titulo}
                    descripcion={persona.descripcion}
                    imagen={persona.imagen}
                    url={persona.url}
                />
            ))}
        </section>
    )
}
