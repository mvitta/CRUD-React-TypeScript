import { useState, useId } from 'react'
import styles from './UpdateCard.module.css'
import { User } from '../../types'
import { Button } from '../Button/Button'

function UpdateCard(user: User): JSX.Element {
  const [value, setValue] = useState<User>(user)
  const inputID = useId()

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <div className={styles.container}>
      <label htmlFor={`${inputID}nombre`}>
        <strong>NOMBRE</strong>
        <input
          type='text'
          value={value.nombre}
          name='nombre'
          onChange={handlerChance}
          id={`${inputID}nombre`}
          autoComplete='off'
        />
      </label>
      <label htmlFor={`${inputID}apellido`}>
        <strong>APELLIDO</strong>
        <input
          type='text'
          value={value.apellido}
          name='apellido'
          onChange={handlerChance}
          id={`${inputID}apellido`}
          autoComplete='off'
        />
      </label>
      <label htmlFor={`${inputID}email`}>
        <strong>CORREO ELECTRONICO</strong>
        <input
          type='email'
          value={value.email}
          name='email'
          onChange={handlerChance}
          id={`${inputID}email`}
          autoComplete='off'
        />
      </label>
      <label htmlFor={`${inputID}date`}>
        <strong> FECHA DE NACIMIENTO</strong>
        <input
          type='date'
          value={value.date}
          name='date'
          onChange={handlerChance}
          id={`${inputID}date`}
          autoComplete='off'
        />
      </label>
      <div className={styles.containerButton}>
        <Button type='submit' tag='Actualizar' />
        <Button type='submit' tag='Eliminar' />
      </div>
    </div>
  )
}

export default UpdateCard
