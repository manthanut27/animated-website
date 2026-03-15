import { useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Nature from './pages/Nature'
import Navbar from './componets/navigation/navbar'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/nature" element={<Nature />} />
        </Routes>
      </div>
    </>
  )
}

export default App
