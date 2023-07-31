import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { attributesForm } from '../../utils/attributesForm'
import { Title } from '../Title/Title'
import { useEffect } from 'react'
import { isEmpty } from '../../utils/utils'
import { sendRecord } from '../../services/sendRecord'

//probar agregando evento click como el de la explciacion de desarroollo util:
//postdata: ver los 3 videos otra vez de render, useEffect, limpiar efectos

export default function Form(): JSX.Element {
  useEffect(() => {
    function handlerSubmit(e: SubmitEvent) {
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)
      if (!isEmpty(data)) {
        sendRecord(data)
      } else {
        alert('no puedes enviar campos vacios')
      }
      e.preventDefault()
    }

    const form = document.querySelector('.form') as HTMLFormElement
    form.addEventListener('submit', handlerSubmit)

    return () => form.removeEventListener('submit', handlerSubmit)
  }, [])

  return (
    <>
      <Title title='Formulario de Registro' />
      <form method='POST' className='form'>
        {attributesForm.map(({ id, regex, tag, type, placeholder }) => {
          return (
            <Input
              type={type}
              id={id}
              tag={tag}
              regex={regex}
              key={crypto.randomUUID()}
              placeholder={placeholder}
            />
          )
        })}
        <div className='section-buttons'>
          <Button tag='Registrar' type='submit' color='#0052d4' />
        </div>
      </form>
      {/* <div className={styles.separator}></div> */}
    </>
  )
}
