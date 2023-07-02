import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const data = [
  {
    nombre: 'Jean',
    apellido: 'Vitta',
    email: 'Jean@gmail.com',
    password: '123456',
    date: '2023-06-23',
  },
  {
    nombre: 'Mike',
    apellido: 'Vitta',
    email: 'Mike@gmail.com',
    password: '123456',
    date: '2023-06-23',
  },
  {
    nombre: 'Alex',
    apellido: 'Vitta',
    email: 'Alex@gmail.com',
    password: '123456',
    date: '2023-06-23',
  },
]

app.post('/', (req, res) => {
  const { body } = req
  data.push(body)

  console.log(body)
  res.status(201).json({ status: 'created' })
})

app.get('/', (req, res) => {
  if (!(data.length === 0)) {
    const copy = [...data]
    copy.forEach((user) => {
      delete user.password
    })
    res.status(200).json({ data: copy })
    return
  }
  res.json({ data })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
