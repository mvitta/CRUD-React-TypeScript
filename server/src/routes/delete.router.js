import { Router } from 'express'
import { data } from './../data.js'

export const deleteRouter = Router()

deleteRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  data.deleteByID(id)
  res.json({
    message: 'deleted',
    id,
  })
})
