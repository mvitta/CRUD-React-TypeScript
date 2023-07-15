import express from 'express'
import cors from 'cors'
import { data } from './data.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const { body } = req
  data.push(body)

  console.log(body)
  res.status(201).json({ status: 'created' })
})

app.get('/', (req, res) => {
  console.log(data)
  if (!(data.length === 0)) {
    const copy = JSON.parse(JSON.stringify(data))
    copy.forEach((user) => {
      delete user.password
    })

    res.status(200).json({ data: copy })
    return
  }
  res.json({ data })
})

// filtrar los datos hasta encontrar el id deseado, luego enviar al cliente
app.post('/:id', (req, res) => {
  const { id } = req.params
  console.log(id)
  const user = data.find((user) => user.id === id)
  return res.json(user)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
