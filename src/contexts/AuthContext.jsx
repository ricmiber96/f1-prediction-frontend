import { useState, useContext, createContext } from 'react'
import authService from '../services/auth'
import { Navigate, useNavigate } from 'react-router-dom'
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('loggedUser')) || null)
  console.log(user)
  const navigate = useNavigate()

  const login = async (email, password, rememberUser) => {
    try {
      const userLogged = await authService.login({ email, password })
      if (userLogged.token) {
        console.log(userLogged)
        setUser(userLogged)
        if (rememberUser) {
          localStorage.setItem('loggedUser', JSON.stringify(userLogged))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    try {
      setUser(null)
      localStorage.removeItem('loggedUser')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
