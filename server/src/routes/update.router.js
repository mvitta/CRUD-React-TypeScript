import { Router } from 'express'
import { data } from './../data.js'
import cryptoJS from 'crypto-js'

export const updateRouter = Router()

updateRouter.put('/update/:id', (req, res) => {
  try {
    const { user } = req.body
    if (!user) throw 'Error Body, incorrect information'
    const decryptedUser = JSON.parse(
      cryptoJS.AES.decrypt(user, 'clavesecreta').toString(cryptoJS.enc.Utf8)
    )
    data.updateByID(decryptedUser)
    res.json({ message: 'Updated' })
  } catch (error) {
    res.json({ error })
  }
})
