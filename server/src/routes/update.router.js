import { Router } from 'express'
import { data } from './../data.js'

export const updateRouter = Router()

updateRouter.put('/update/:id', (req, res) => {
  const user = req.body
  data.updateByID(user)
  res.json({ message: 'Updated' })
})
