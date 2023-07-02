import styles from './Footer.module.css'
import react from '../../assets/react.svg'

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <div>
        <img src={react} alt='react' />
      </div>
      <div>CRUD React - Vite</div>
      <div>
        <img src={react} alt='' />
      </div>
    </footer>
  )
}
