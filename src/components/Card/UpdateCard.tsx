import { useState, useId } from 'react'
import styles from './UpdateCard.module.css'
import { User } from '../../types'
import { Button } from '../Button/Button'

export function UpdateCard(user: User): JSX.Element {
  const [value, setValue] = useState<User>(user)
  const inputID = useId()

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <div className={styles.container}>
      <label htmlFor={`${inputID}nombre`}>
        <strong>Nombre</strong>
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
        <strong>Apellido</strong>
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
        <strong>E-mail</strong>
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
        <strong> Fecha de Nacimiento</strong>
        <input
          type='date'
          value={value.date}
          name='date'
          onChange={handlerChance}
          id={`${inputID}date`}
          autoComplete='off'
        />
      </label>
      <div>
        <Button type='submit' tag='Actualizar' />
      </div>
    </div>
  )
}
