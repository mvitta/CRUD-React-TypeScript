import styles from './Header.module.css'
import task from '../../assets/lista.png'
import { Link } from 'react-router-dom'

export function Header(): JSX.Element {
  return (
    <nav>
      <ul className={styles.container}>
        <section className={styles.containerLeft}>
          <li>
            <a href='#'>Iniciar session</a>
          </li>
          <li>
            <a href='#'>Registrarse</a>
          </li>
        </section>
        <section className={styles.containerRight}>
          <li>
            <a href='#'>
              <img src={task} alt='tasks' />
            </a>
          </li>
        </section>
      </ul>
      <section className={styles.menuBar}>
        <ul>
          <li>
            <Link to={`/`}>Crear</Link>
          </li>
          <li>
            <Link to={`Show/`}>Mostrar</Link>
          </li>
          <li>
            <Link to={`Update/`}>Actualizar y Borrar</Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}
