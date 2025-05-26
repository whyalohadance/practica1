import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/poppins';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OurStory from './components/OurStory';
import ServicesPreview from './components/ServicesPreview';
import Services from './components/Services';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <ServicesPreview />
      <OurStory />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
    </div>
  );
}

export default App;