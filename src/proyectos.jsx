import React from 'react'
import './proyectos.css'


const personas = [
    { id: 1, titulo: "primer proyecto", descripcion: "es un proyecto genial", imagen: "./src/assets/imgperfil.jpg" },
    { id: 2, titulo: "segundo proyecto", descripcion: "es un proyecto mediocre", imagen: "./src/assets/imgperfil.jpg"},
    { id: 3, titulo: "tecer proyecto", descripcion: "es un proyecto malo", imagen: "./src/assets/imgperfil.jpg"}
]

function Avatar(props) {
    const { imagen, titulo, descripcion } = props;
    return (
        <div className='card' >
            <img src={imagen} alt="prueba" />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
};

export default function Proyectos() {
    return (
        <div>
            {personas.map((persona) => (
                <Avatar key={persona.id} persona={persona.descripcion} imagen={persona.imagen} titulo={persona.titulo} />
            ))}
        </div>
    )
}
