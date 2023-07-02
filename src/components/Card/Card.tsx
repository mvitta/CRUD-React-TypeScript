import { useRecords } from '../../hooks/useRecords'
import styles from './Card.module.css'

export function Card(): JSX.Element {
  const results = useRecords()
  // arreglar el desbordamiento de main, a medida que agregamos mas registro se deborda por debeajo del footer
  return (
    <div>
      <h1>Usuarios Registrados</h1>
      {results.map(({ nombre, apellido, email, date }) => {
        return (
          <div className={styles.card} key={crypto.randomUUID()}>
            <hr />
            <h1>
              Nombre: {nombre} {apellido}
            </h1>
            <h2>E-mail: {email}</h2>
            <h3>Fecha de nacimiento: {date}</h3>
            <hr />
          </div>
        )
      })}
    </div>
  )
}
