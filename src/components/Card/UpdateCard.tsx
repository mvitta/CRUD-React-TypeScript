import { useState } from 'react'
import styles from './UpdateCard.module.css'
import { User } from '../../types'
import { LinkButton } from '../Button/LinkButton'

function UpdateCard(user: User): JSX.Element {
  const [value] = useState<User>(user)

  return (
    <>
      <form className={styles.container}>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>ID</strong>
              </td>
              <td>{value.id}</td>
            </tr>
            <tr>
              <td>
                <strong>Nombre</strong>
              </td>
              <td>{value.nombre}</td>
            </tr>
            <tr>
              <td>
                <strong>Apellido</strong>
              </td>
              <td>{value.apellido}</td>
            </tr>
            <tr>
              <td>
                <strong>Correo electronico</strong>
              </td>
              <td>{value.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Fecha de nacimiento</strong>
              </td>
              <td>{value.date}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.containerButton}>
          <LinkButton id={value.id} tag='Editar' color='#1f7922' />
          <LinkButton id={value.id} tag='Borrar' color='#a52a2a' />
        </div>
      </form>
    </>
  )
}

export default UpdateCard
