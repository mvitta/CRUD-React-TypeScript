import { useState } from 'react'
import styles from './UpdateCard.module.css'
import { User } from '../../types'
import { Button } from '../Button/Button'

function UpdateCard(user: User): JSX.Element {
  const [value] = useState<User>(user)

  return (
    <>
      <section className={styles.container}>
        <table>
          <tbody>
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
          <Button type='submit' tag='Editar' />
          <Button type='submit' tag='Borrar' />
        </div>
      </section>
    </>
  )
}

export default UpdateCard
