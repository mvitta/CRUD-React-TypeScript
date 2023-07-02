import { useState, useEffect } from 'react'
import { Response, User } from '../types'

// podria no ser necesario este customHook ya que los datos se cargan desde que se carga la pagina
// y se comparten a las rutas necesarias por medio un loader de react router dom
export function useRecords(): User[] {
  const [records, setRecords] = useState<Array<User>>([])

  useEffect(() => {
    const baseURL = new URL('http://localhost:3000/')
    async function fetchRecords(): Promise<void> {
      try {
        const response = await fetch(baseURL)
        const information: Response = await response.json()
        const { data } = information
        setRecords(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecords()
  }, [])

  return records
}
