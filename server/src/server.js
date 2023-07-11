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
