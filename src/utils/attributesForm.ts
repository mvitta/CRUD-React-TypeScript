import { FormProps } from '../types'

export const attributesForm: FormProps[] = [
  {
    type: 'text',
    id: 'nombre',
    tag: 'Nombre',
    regex: '^[A-Za-z]+$',
    placeholder: 'Ingresa tu nombre',
  },
  {
    type: 'text',
    id: 'apellido',
    tag: 'Apellido',
    regex: '^[A-Za-z]+$',
    placeholder: 'Ingresa tu apellido',
  },
  {
    type: 'email',
    id: 'email',
    tag: 'Correo Electronico',
    regex: '^w+([.-_+]?w+)*@w+([.-]?w+)*(.w{2,10})+$',
    placeholder: 'Ingresa tu email',
  },
  {
    type: 'password',
    id: 'password',
    tag: 'Contraseña',
    regex: '^[0-9]+$',
    placeholder: 'Ingresa un password',
  },
  {
    type: 'date',
    id: 'date',
    tag: 'Fecha de nacimiento',
    regex: '',
    placeholder: 'Seleccionar Fecha',
  },
]
