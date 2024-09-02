import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dex from './pages/Dex'
import Animal from './pages/Animal'
import StartQuest from './pages/StartQuest'
import Quest from './pages/Quest'
import { useState } from 'react'

function App() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [time, setTime] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dex' element={<Dex />} />
        <Route path='dex/:animal' element={<Animal />} />
        <Route
          path='/startquest'
          element={
            <StartQuest
              setIsTimerActive={setIsTimerActive}
              isTimerActive={isTimerActive}
            />
          }
        />
        <Route
          path='/quest'
          element={
            <Quest
              setIsTimerActive={setIsTimerActive}
              isTimerActive={isTimerActive}
              setTime={setTime}
              time={time}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
