export type User = {
  nombre: string
  apellido: string
  email: string
  date: string
}

export type Response = {
  data: User[]
}

export interface FormProps {
  type: string
  id: string
  tag: string
  regex: string
  placeholder?: string
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  tag: string
}

export type PropsError = {
  message: string
  stack: string
}

export interface ErrorResponse {
  data: string
  error: PropsError
  internal: boolean
  status: number
  statusText: string
}
