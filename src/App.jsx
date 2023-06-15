import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login/Login'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import Offers from './componets/Offers'
import Plan from './componets/Plan'
import Room from './componets/Room'
import ImageSlider from './componets/ImageSlider'
import Footer from './componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Offers/>
    <Plan/>
    <Room/>
    <ImageSlider/>
    <Footer/>
    </>
  )
}

export default App
