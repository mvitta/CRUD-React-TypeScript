import { Response } from '../types'

export async function getRecords(url: string): Promise<Response> {
  const OK = true
  const SUCCES = 200
  const alternativeResponse: Response = { data: [] }
  try {
    const response = await fetch(url)
    if (response.ok === OK && response.status === SUCCES) {
      const users: Response = await response.json()
      return users
    }

    return alternativeResponse
  } catch (error) {
    console.log(error)
    return alternativeResponse
  }
}
