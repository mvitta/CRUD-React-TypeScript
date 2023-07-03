import { useLoaderData } from 'react-router-dom'
import { Response } from '../../types'
import { UpdateCard } from '../Card/UpdateCard'
import styles from './Update.module.css'

function Update(): JSX.Element {
  const results = useLoaderData() as Response
  const { data } = results

  console.log(styles)

  return (
    <>
      <h1>Actualizar Datos</h1>
      <div className={`${styles.containerUpdate}`}>
        {/* agregar el formulario para revisar como enviar los datos */}
        {data.map(({ nombre, apellido, email, date }) => {
          return (
            <UpdateCard
              apellido={apellido}
              nombre={nombre}
              email={email}
              date={date}
              key={crypto.randomUUID()}
            />
          )
        })}
      </div>
    </>
  )
}

export default Update
