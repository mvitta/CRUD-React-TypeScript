import { Response, ResponseOneUser } from '../types'
// este metodo se utiliza en main.tsx para cargar los registros en el loader de react router

export class FetchServices {
  SUCCES = 200
  BASEURL = 'http://localhost:3000'

  async fetchMain(method = 'GET', id = '') {
    try {
      const response = await fetch(`${this.BASEURL}/${id}`, {
        method: method,
      })
      if (response.ok && response.status === this.SUCCES) {
        const users = await response.json()
        return users
      }
      return null
    } catch (error) {
      return null
    }
  }

  async fetchAll(method?: string): Promise<Response> {
    const information = await this.fetchMain(method)
    if (!information) {
      return { data: [] }
    }
    return information
  }

  async fetchOne(id: string, method?: string): Promise<ResponseOneUser> {
    const information = await this.fetchMain(method, id)
    console.log(information)

    if (!information) {
      return {
        theID: 0,
        nombre: '',
        apellido: '',
        email: '',
        date: '',
        password: '',
      }
    }
    return information
  }

  async fetchOneDelete(id: string, method?: string): Promise<void> {
    const response = await fetch(`${this.BASEURL}/delete/${id}`, {
      method: method,
    })
    return response.json()
  }
}
