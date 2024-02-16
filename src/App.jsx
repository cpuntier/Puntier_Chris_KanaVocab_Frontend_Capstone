import { useState, useContext, createContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Chart from './pages/Chart'
import Home from './pages/Home'
import Selection from './pages/Selection'
import StartGame from './pages/StartGame'

export const SelectedContext = createContext()

function App() {
  const [selected2, setSelected2] = useState([]);

  return (
    <>

      <SelectedContext.Provider value = {[selected2,setSelected2]}>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/startgame" element={<StartGame />} />
      </Routes>
      </SelectedContext.Provider>
    </>
  )
}

export default App
