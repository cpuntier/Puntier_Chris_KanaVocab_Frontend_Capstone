import { useState, useContext, createContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Chart from './pages/Chart'
import Home from './pages/Home'
import Selection from './pages/Selection'
import StartGame from './pages/StartGame'
import FlashCardGroups from './pages/FlashCardGroups'
import FlashCards from './pages/FlashCards'
import Footer from './components/Footer'

export const SelectedContext = createContext()
export const KanaContext = createContext()

function App() {
  const [selected, setSelected] = useState([]);
  const [kanaState, setKanaState] = useState("hiragana");

  return (
    <>

      <KanaContext.Provider value={[kanaState, setKanaState]}>
        <SelectedContext.Provider value={[selected, setSelected]}>

          <NavBar />
          <div style={{height:"100vh", position:"relative"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/startgame" element={<StartGame />} />
            <Route path="/flashcards" element={<FlashCardGroups />} />
            <Route path="/flashcards/:groupName" element={<FlashCards />} />;
          </Routes>

          </div>
          <div>
          <Footer />

          </div>
        </SelectedContext.Provider>
      </KanaContext.Provider>
    </>
  )
}

export default App
