import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'
const App = () => {

  const [Theme, setTheme] = useState('light')
  return (
    <div className='bg-black text-white ' >
      <Navbar Theme={Theme}
        setTheme={setTheme}
      />
        
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </div>
  )
}

export default App
