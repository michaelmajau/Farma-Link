import Contact from './components/Contact'
import FarmersStory from './components/FarmersStory'
import Featured from './components/Featured'
import Hero from './components/Hero'
import HowitWorks from './components/HowitWorks'
import Navbar from './components/Navbar'
import ProduceSlider from './components/ProduceSlider'
import ShopNow from './components/ShopNow'
import Signup from './components/Signup'
import WhyFarmMarket from './components/WhyFarmMarket'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero/>
    <ProduceSlider />
    <WhyFarmMarket/>
    <ShopNow />
    <Featured/>
    <FarmersStory />
    <HowitWorks />
    <Contact />
    <Signup />
    </>
  )
}

export default App
