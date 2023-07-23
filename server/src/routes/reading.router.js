import { Router } from 'express'
import { data } from './../data.js'

export const readingRouter = Router()

readingRouter.get('/', (req, res) => {
  res.status(200).json({ data: data.linkedListToArrayWithoutP() })
  return
})

readingRouter.post('/:id', (req, res) => {
  return res.json(data.find(req.params.id).value)
})
