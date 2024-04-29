import axios from 'axios'

const baseURL = import.meta.env.VITE_ENV === 'dev' ? 'http://localhost:3003/api' : 'https://api.example.com/api'

const login = async (credentials) => {
  console.log(credentials)
  try {
    const response = await axios.post(`${baseURL}/auth/login`, credentials)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const signup = async (credentials) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, credentials)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export default { login, signup }
