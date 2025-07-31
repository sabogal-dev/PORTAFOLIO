
import "../styles/experiencia.css"

const trabajos = [
  {
    id: "1",
    empresa: "CODE OPTIKAL",
    puesto: "Jefe de almacen / asistente tecnico",
    tiempo: "Junio 2023 - Actualidad",
    descripcion: "Gestione inventarios, picking y packing, liderando equipos en temporadas altas. Implementé el ERP Odoo, optimicé informes en Excel y creé scripts en Python para automatizar procesos. Brindo soporte técnico en hardware, software y redes. Mi desempeño me permitió apoyar también a empresas aliadas en asistencia técnica.",
    aportes: [
      "Desarrollo de herramientas con Node.js, React y JavaScript vanilla.",
      "Administracion de Servidor Ubuntu",
      "Implementación de ERP Odoo.",
      "Automatización de procesos con scripts en Python."
    ]
  },
  {
    id: "2",
    empresa: "LAMAR OPTICAL",
    puesto: "Auxiliar de manufactura",
    tiempo: "Enero 2023 - Mayo 2023",
    descripcion: "Trabaje en la elaboracion de Paños de microfibra, recibiendo ordenes de pedido y colabroando en equipo para la entrega de las ordenes, en esta empresa tambien realice sosporte tecnico basico con los equipos de la seccion de oficina",
    aportes: []
  },
  {
    id: "3",
    empresa: "Asesorias contables y organizacionales",
    puesto: "Auxiliar contable / practicas",
    tiempo: "Febrero 2022 - Julio 2022",
    descripcion: "Mi función era asistir a la contadora a mi cargo a transcribir y organizar información de clientes para su posterior uso, logre destacar entre mis compañeros al punto de ayudar a la doctora en jefe con la cual realice un análisis estadístico de clima laboral desde la organización de los datos hasta la redacción y presentación del mismo.",
    aportes: [
      "Creacion de informes estadisticos Alcaldia de Vélez-Santander"
    ]
  }
]

export default function Experiencia() {
  return (
    <section id='experiencia'>
      <h2>Experiencia</h2>
      {trabajos.map(({ id, empresa, puesto, tiempo, descripcion, aportes }) => {
        return (<CardExperience
          key={id}
          empresa={empresa}
          puesto={puesto}
          tiempo={tiempo}
          descripcion={descripcion}
          aportes={aportes}
        />
        )
      }
      )}

    </section>
  )
}

const CardExperience = (props) => {
  const { id, empresa, puesto, tiempo, descripcion, aportes } = props;
  return (
    <article>
      <div>
        <h3>{empresa}</h3>
        <p>{puesto}</p>
      </div>
      <div className="DescripcionTrabajo">
        <h4 className="fecha">{tiempo}</h4>
        <p>{descripcion}</p>
        {aportes.length > 0 && <h4>Principales aportes</h4>}
        <ul>
          {aportes.map((aporte, index) => {
            return <li key={index}>{aporte}</li>
          })}
        </ul>
      </div>
    </article>
  )
}
