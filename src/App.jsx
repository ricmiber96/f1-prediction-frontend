import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AuthProvider from './contexts/AuthContext'
import Home from './pages/Home'
import LeaderBoard from './pages/LeaderBoard'
import Login from './pages/Login'
import Race from './pages/Race'
import Races from './pages/Races'
import SignUp from './pages/SignUp'

function App () {
  return (
    <>
    <AuthProvider>
      <Routes>
          <Route element={<Layout />} >
            <Route element={<PrivateRoute />}>
            {/* <Route path='/' index element={user ? <Home/> : <Navigate to="/login"/> } /> */}
            <Route path='/' index element={<Home/>} />
            <Route path='/races' element={<Races />} />
            <Route path='/races/:id' element={<Race />} />
            <Route path='/leaderboard' element={<LeaderBoard/>} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
