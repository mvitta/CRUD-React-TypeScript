import { SinglyLinkedList } from './LinkedList/linkedList.js'

let id = 10

function generateID() {
  return String(id++)
}
export function validateBody(body) {
  return (
    Object.prototype.hasOwnProperty.call(body, 'nombre') &&
    Object.prototype.hasOwnProperty.call(body, 'apellido') &&
    Object.prototype.hasOwnProperty.call(body, 'email') &&
    Object.prototype.hasOwnProperty.call(body, 'password') &&
    Object.prototype.hasOwnProperty.call(body, 'date')
  )
}

export class User {
  constructor({ nombre, apellido, email, password, date }) {
    this.id = generateID()
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.password = password
    this.date = date
  }
}

export const data = new SinglyLinkedList(
  new User({
    nombre: 'Jeanaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    apellido: 'Vittaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    email: 'Jeanaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com',
    password: '123456aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    date: '2023-06-23',
  })
)

data.prepend(
  new User({
    nombre: 'Jean',
    apellido: 'Vitta',
    email: 'Jean@gmail.com',
    password: '123456',
    date: '2023-06-23',
  })
)

data.prepend(
  new User({
    nombre: 'Mike',
    apellido: 'Vitta',
    email: 'Mike@gmail.com',
    password: '123456',
    date: '2023-06-23',
  })
)

// export const data = [
//   new User({
//     nombre: 'Jean',
//     apellido: 'Vitta',
//     email: 'Jean@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Mike',
//     apellido: 'Vitta',
//     email: 'Mike@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alex',
//     apellido: 'Vitta',
//     email: 'Alex@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Yuranis',
//     apellido: 'Mendoza',
//     email: 'yura@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alberto',
//     apellido: 'Polo',
//     email: 'alberto@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Jean',
//     apellido: 'Vitta',
//     email: 'Jean@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Mike',
//     apellido: 'Vitta',
//     email: 'Mike@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alex',
//     apellido: 'Vitta',
//     email: 'Alex@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Yuranis',
//     apellido: 'Mendoza',
//     email: 'yura@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alberto',
//     apellido: 'Polo',
//     email: 'alberto@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),

//   new User({
//     nombre: 'Jean',
//     apellido: 'Vitta',
//     email: 'Jean@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Mike',
//     apellido: 'Vitta',
//     email: 'Mike@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alex',
//     apellido: 'Vitta',
//     email: 'Alex@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Yuranis',
//     apellido: 'Mendoza',
//     email: 'yura@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alberto',
//     apellido: 'Polo',
//     email: 'alberto@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Jean',
//     apellido: 'Vitta',
//     email: 'Jean@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Mike',
//     apellido: 'Vitta',
//     email: 'Mike@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alex',
//     apellido: 'Vitta',
//     email: 'Alex@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Yuranis',
//     apellido: 'Mendoza',
//     email: 'yura@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
//   new User({
//     nombre: 'Alberto',
//     apellido: 'Polo',
//     email: 'alberto@gmail.com',
//     password: '123456',
//     date: '2023-06-23',
//   }),
// ]
