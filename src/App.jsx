import { React, useState } from 'react'

import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Races from './pages/Races'
import Race from './pages/Race'
import LeaderBoard from './pages/LeaderBoard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App () {
  const [user, setUser] = useState(null)

  return (
    <>
    <Routes>

        <Route element={<Layout />} >
          <Route path='/' index element={user ? <Home/> : <Navigate to="/login"/> } />
          <Route path='/races' element={<Races />} />
          <Route path='/races/:id' element={<Race />} />
          <Route path='/leaderboard' element={<LeaderBoard/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

    </Routes>
    </>
  )
}

export default App
