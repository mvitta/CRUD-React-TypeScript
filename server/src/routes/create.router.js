import { Router } from 'express'
import { data, User } from './../data.js'
import { validateBody } from './../data.js'
import cryptoJS from 'crypto-js'

export const createRouter = Router()

createRouter.post('/', (req, res) => {
  try {
    const { user } = req.body
    const decryptedUser = JSON.parse(
      cryptoJS.AES.decrypt(user, 'clavesecreta').toString(cryptoJS.enc.Utf8)
    )
    if (!validateBody(decryptedUser)) {
      throw 'Error Body'
    }
    data.prepend(new User(decryptedUser))
    res.status(201).json({ status: 'created' })
  } catch (error) {
    res.json({ error })
  }
})
