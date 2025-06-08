import React from 'react'
import "../styles/proyectos.css"


const personas = [
    {
        id: 1,
        titulo: "Dashboard interactivo CODE",
        descripcion: "Visualiza métricas clave como ventas, desempeño por vendedor y productos por categoría. Construido con React, Chakra UI y Express para ofrecer datos en tiempo real y facilitar decisiones estratégicas.",
        imagen: "https://sabogal.tech/CDNportafolio/dashboard.png",
        url: "https://sabogal.top/dashboard/"
    },
    {
        id: 2,
        titulo: "FastPay",
        descripcion: "Aplicacion fullstack conectada a la Api de Odoo de la empresa, consulta facturas para que asesores comerciales calculen descuentos para sus clientes y muestra un historial de pagos de cada factura, agilizando un 30% los procesos",
        imagen: "https://sabogal.tech/CDNportafolio/aprovehaDescuento.png",
        url: "https://sabogal.top/calculadoraCode/"
    },
    // {
    //     id: 3,
    //     titulo: 'inventario',
    //     descripcion: 'Sistema de inventario, Crud en React conectado a supabase',
    //     imagen: '',
    //     url: '',
    // },
    {
        id: 4,
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
