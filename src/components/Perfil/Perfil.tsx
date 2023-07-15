// import { Input } from '../Input/Input'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { FetchServices } from '../../services/fetchServices'
import { useState } from 'react'
import { ResponseOneUser } from './../../types'
import { attributesForm } from './../../utils/attributesForm'
import styles from './Perfil.module.css'
import { Title } from '../Title/Title'
import { Button } from '../Button/Button'

export default function Perfil() {
  const { id } = useParams()
  const [user, setUser] = useState<ResponseOneUser>({
    apellido: '',
    date: '',
    email: '',
    nombre: '',
    password: '',
  })

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (id) {
      new FetchServices().fetchOne(id, 'POST').then((res) => {
        setUser(res)
      })
    }
  }, [id])

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  return (
    <>
      <Title title='Editar Perfil' />
      <form className={styles.container}>
        <label htmlFor='id'>
          <span>{id}</span>
        </label>
        <label htmlFor='nombre'>
          Nombre
          <input
            type='text'
            value={user.nombre}
            pattern={attributesForm[0].regex}
            name='nombre'
            id='nombre'
            onChange={handlerChance}
          />
        </label>
        <label htmlFor='apellido'>
          Apellido
          <input
            type='text'
            value={user.apellido}
            name='apellido'
            id='apellido'
            pattern={attributesForm[1].regex}
            onChange={handlerChance}
          />
        </label>
        <label htmlFor='email'>
          Correo Electronico
          <input
            type='email'
            value={user.email}
            name='email'
            id='email'
            pattern={attributesForm[2].regex}
            onChange={handlerChance}
          />
        </label>
        <label htmlFor='password'>
          Contraseña
          <input
            type='password'
            value={user.password}
            name='password'
            id='password'
            pattern={attributesForm[3].regex}
            onChange={handlerChance}
          />
        </label>
        <label htmlFor='date'>
          <input
            type='date'
            value={user.date}
            name='date'
            id='date'
            onChange={handlerChance}
          />
        </label>
        <hr />
        <div>
          <Button color='#008000' tag='Actualizar' type='submit' />
        </div>
      </form>
    </>
  )
}
