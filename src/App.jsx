import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dex from './pages/Dex'
import Animal from './pages/Animal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dex' element={<Dex />} />
        <Route path='/Animal' element={<Animal />} />
      </Routes>
    </Router>
  )
}

export default App
