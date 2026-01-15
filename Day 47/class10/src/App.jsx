import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <Section/>      
      <Footer/>
    </div>
  )
}

export default App
