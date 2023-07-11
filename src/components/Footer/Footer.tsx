import styles from './Footer.module.css'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'

export function Footer(): JSX.Element {
  return (
    <footer>
      <section className={styles.container}>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} alt='react-logo' className='logo' />
        </a>
        <div>CRUD React - Vite</div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} alt='vite-logo' className='logo' />
        </a>
      </section>
      <section className={styles.sectionBottom}>
        <span>Copyright © 2023 Derechos Reservados</span>
        <span>Condiciones de servicios</span>
        <span>Politicas de privacidad</span>
        <span>Ajustes de cookies</span>
        <span>Politica de cookies</span>
        <span>Ayuda</span>
      </section>
      <hr />
    </footer>
  )
}
