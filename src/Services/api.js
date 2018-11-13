// A library to make API calls
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:8081'
})

export default api
