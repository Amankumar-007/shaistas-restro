import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import HeroSlider from './componets/Hero';
import './App.css';
import VideoComponent from './componets/VideoComponent';
import ServicesSection from './sections/ServicesSection';
import ScrollHandle from './componets/ScrollHandle';
import MenuHighlights from './componets/MenuHighlights';
import OpeningHoursSection from './sections/OpeningHoursSection';
import MenuSection from './sections/MenuSection';
import Testomonials from './sections/Testomonials';
import Menu from './pages/Menu';
import ContactSection from './sections/ContactSection';
import Map from './components/Map';
import Footer from './componets/Footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;500&family=Pacifico&family=Playball&family=Poppins:wght@400;600;800&display=swap');
          
          .font-script { font-family: 'Playball', cursive; }
          .font-cursive { font-family: 'Pacifico', cursive; }
          .font-serif { font-family: 'Merriweather', serif; }
          .font-sans { font-family: 'Poppins', sans-serif; }
          
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
        `}</style>

        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSlider />
              <ServicesSection />
              <VideoComponent />
              <ScrollHandle />  
              <MenuHighlights />
              <OpeningHoursSection />
              <MenuSection />
              <Testomonials />  
              <ContactSection />
              <Map />
              <Footer />
            </main>
          } />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
