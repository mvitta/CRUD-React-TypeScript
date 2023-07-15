import { useRecords } from '../../hooks/useRecords'
import { Title } from '../Title/Title'
import styles from './Card.module.css'

function Card(): JSX.Element {
  const results = useRecords()
  // arreglar el desbordamiento de main, a medida que agregamos mas registro se deborda por debeajo del footer
  return (
    <div>
      <Title title='Usuarios Registrados' />
      {results.map(({ nombre, apellido, email, date, id }, index) => {
        return (
          <div className={styles.card} key={crypto.randomUUID()}>
            <div>
              <span>{`Usuario `}</span>
              {index}
            </div>
            <hr />
            <div>
              ID
              <div>{id}</div>
            </div>
            <div>
              NOMBRE
              <h2>
                {nombre} {apellido}
              </h2>
            </div>
            <div>
              CORREO ELECTRONICO
              <p>{email}</p>
            </div>
            <div>
              FECHA DE NACIMIENTO
              <p>{date}</p>
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Card
