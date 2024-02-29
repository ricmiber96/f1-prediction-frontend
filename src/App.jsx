import { React, useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Races from './pages/Races'
import Race from './pages/Race'

function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/races' element={<Races />} />
        <Route path='/races/race/:id' element={<Race />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
