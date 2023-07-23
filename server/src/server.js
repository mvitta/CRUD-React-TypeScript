import express from 'express'
import cors from 'cors'
import { readingRouter } from './routes/reading.router.js'
import { createRouter } from './routes/create.router.js'
import { deleteRouter } from './routes/delete.router.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

//ROUTES
app.use(createRouter)
app.use(readingRouter)
app.use(deleteRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
