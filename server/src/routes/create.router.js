import { Router } from 'express'
import { data, User } from './../data.js'

export const createRouter = Router()

createRouter.post('/', (req, res) => {
  const { body } = req
  data.prepend(new User(body))
  res.status(201).json({ status: 'created' })
})
