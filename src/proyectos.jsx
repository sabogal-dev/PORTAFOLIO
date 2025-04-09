import React from 'react'
import './styles/proyectos.css'


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
        titulo: "WorkoutApp",
        descripcion: "Mejora tus entrenamietos con una agenda dedicada al Gym, multiples estadisticas, conectada a Supabase para BD y autenticacion de usuarios",
        imagen: "https://sabogal.tech/CDNportafolio/workoutapp.png",
        url: "#"
    },
    {
        id: 3,
        titulo: "En blanco",
        descripcion: "me falta hacer un proyecto mas para añadir por aca",
        imagen: "https://sabogal.tech/CDNportafolio/imgperfil.jpg",
        url: "#"
    }
]

export function Card(props) {
    const { titulo, descripcion, imagen, url } = props;
    return (
        <div className='card' >
            <img src={imagen} alt="prueba" />
            <div>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href={url} target='_blank' >Go app</a>
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
