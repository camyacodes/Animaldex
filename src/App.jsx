import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dex from './pages/Dex'
import Animal from './pages/Animal'
import StartQuest from './pages/StartQuest'
import Quest from './pages/Quest'
import Results from './pages/Results'
import { useState } from 'react'

function App() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [time, setTime] = useState(0)

  const [seenList, setSeenList] = useState([])

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
              seenList={seenList}
              setSeenList={setSeenList}
            />
          }
        />
        <Route
          path='/results'
          element={
            <Results
              time={time}
              seenList={seenList}
              setSeenList={setSeenList}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
