import React from 'react'
import "../styles/proyectos.css"
import dashboard from '../assets/proyectos/dashboard.png'
import gafasForm from '../assets/proyectos/gafasForm.png'
import whatsapp from '../assets/proyectos/whatsapp.png'
const proyectos = [
    {
        id: 1,
        titulo: "Dashboard interactivo CODE",
        descripcion: "Visualiza métricas clave como ventas, desempeño por vendedor y productos por categoría. Construido con React, Chakra UI y Express para ofrecer datos en tiempo real y facilitar decisiones estratégicas.",
        imagen: dashboard,
        url: "https://sabogal.top/dashboard/"
    },
    {
        id: 2,
        titulo: "GafasForm",
        descripcion: "Descubre la forma de tu Rostro y elije los mejores lentes de acuerdo a tu estilo, creada con React, konva-js para el manejo de imagenes y chakra UI",
        imagen: gafasForm,
        url: "https://codeoptikal.com/gafasForm/"
    },
    {
        id: 3,
        titulo: "FastPay",
        descripcion: "Aplicacion fullstack conectada a la Api de Odoo de la empresa, consulta facturas para que asesores comerciales calculen descuentos para sus clientes y muestra un historial de pagos de cada factura, agilizando un 30% los procesos",
        imagen: "https://sabogal.tech/CDNportafolio/aprovehaDescuento.png",
        url: "https://sabogal.top/calculadoraCode/"
    },
    {
        id: 4,
        titulo: 'Mensajeria Automatica',
        descripcion: 'Control total de mensajeria automatica, usando tu propio numero de telefono conectado directamente a la lista de facturas de la empresa, recordatorios de pago, recordatorios de cartera vencida, aumenta la efectividad de los recaudos un 30% sobre la asistencia humana tradicional',
        imagen: whatsapp,
        url: '',
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
                {url && <a href={url} target='_blank' className='boton'>Go app</a>}

            </div>
        </div>
    )
};

export default function Proyectos() {
    return (
        <section className='proyectos'>
            <h2>Trabajos</h2>
            {proyectos.map((proyecto) => (
                <Card
                    key={proyecto.id}
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    imagen={proyecto.imagen}
                    url={proyecto.url}
                />
            ))}
        </section>
    )
}
