import { useAuth } from '@/contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user } = useAuth()
  console.log(user)
  if (!user) return <Navigate to="/login" />
  return <Outlet />
}

export default PrivateRoute
