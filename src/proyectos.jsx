import React from 'react'
import './styles/proyectos.css'


const personas = [
    { id: 1, titulo: "fastPay - Consultora de facturas", descripcion: "Aplicacion fullstack conectada a la Api de Odoo de la empresa, consulta facturas para que asesores comerciales calculen descuentos para sus clientes y muestra un historial de pagos de cada factura, agilizando un 30% los procesos", imagen: "https://sabogal.tech/CDNportafolio/aprovehaDescuento.png" },
    { id: 2, titulo: "workoutApp - Agenda de entrenamiento", descripcion: "Mejora tus entrenamietos con una agenda dedicada al Gym, multiples estadisticas, conectada a Supabase para BD y autenticacion de usuarios", imagen: "https://sabogal.tech/CDNportafolio/workoutapp.png" },
    { id: 3, titulo: "En blanco", descripcion: "me falta hacer un proyecto mas para añadir por aca", imagen: "https://sabogal.tech/CDNportafolio/imgperfil.jpg" }
]

export function Card(props) {
    const { titulo, descripcion, imagen } = props;
    return (
        <div className='card' >
            <img src={imagen} alt="prueba" />
            <div>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <button>demo</button>
            </div>
        </div>
    )
};

export default function Proyectos() {
    return (
        <section>
            <h2>Proyectos</h2>
            {personas.map((persona) => (
                <Card key={persona.id} titulo={persona.titulo} descripcion={persona.descripcion} imagen={persona.imagen} />
            ))}
        </section>
    )
}
