import api from '../api'

export const sendContact = () => {
  return api.post('/contact', { name: 'Helloo', lastName: 'World' })
}
