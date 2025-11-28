import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HeroSlider from './components/Hero';
import './App.css';
import VideoComponent from './components/VideoComponent';
import ServicesSection from './sections/ServicesSection';
import MenuHighlights from './components/MenuHighlights';
import OpeningHoursSection from './sections/OpeningHoursSection';
import Testomonials from './sections/Testomonials';
import Menu from './pages/menu/Menu';
import Map from './components/Map';
import Gallery from './sections/Gallery';
import ContactPage from './pages/Contact/ContactPage';
import About from './pages/About-us/About';
import Catering from './pages/catering/Catering';
import GalleryPage from './pages/gallery-page/GalleryPage';
import MommyliciousMealbox from './pages/MommyliciousMealbox/MommyliciousMealbox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <ScrollToTop />
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
              <section id="home">
                <HeroSlider />
              </section>
              <section id="about">
                <ServicesSection />
              </section>
              <section id="zaika-e-khaas">
                <VideoComponent />
              </section>
              <MenuHighlights /> <section id="catering">
                <OpeningHoursSection />
              </section>
                 {/* <section id="menu">
                    <MenuSection />
                  </section>*/}
              <section id="gallery">
                <Gallery />
              </section>
              <section id="testomonials">
                <Testomonials />
              </section>
            {/* <section id="contact">
                <ContactSection />
              </section> */}
              <section id="map">
                <Map />
              </section>
            </main>
          } />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/mommylicious-mealbox" element={<MommyliciousMealbox />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App