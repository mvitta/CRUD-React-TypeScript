export type User = {
  id: number
  nombre: string
  apellido: string
  email: string
  date: string
}

export interface ResponseOneUser {
  theID?: number
  nombre: string
  apellido: string
  email: string
  date: string
  password: string
}

export interface LinkProps {
  id: number
  tag: string
  color: TypeColor
}

export type Response = {
  data: User[]
}

export interface FormProps {
  type: string
  id: string
  tag: string
  regex?: string
  placeholder?: string
  theValue?: string
}

type TypeColor = `#${string}${string}${string}${string}${string}${string}`
export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  tag: string
  color: TypeColor
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

export interface Params extends Omit<LinkProps, 'tag' | 'color'> {}
