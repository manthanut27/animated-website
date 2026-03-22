import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Nature from './pages/Nature'
import Navbar from './componets/navigation/navbar'
import FullScreenNav from './componets/navigation/FullScreenNav'


function App() {
  return (
      <div className='overflow-x-hidden'>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/nature" element={<Nature />} />
        </Routes>
      </div>
  )
}

export default App
