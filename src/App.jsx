import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Chart from './pages/Chart'
import Home from './pages/Home'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>

    </>
  )
}

export default App
