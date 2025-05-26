// src/pages/Home.jsx
import React from 'react';
import SearchBox from '../components/SearchBox';
import Services from '../components/Services';
import OurStory from '../components/OurStory';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <>
      <SearchBox />
      <Services />
      <OurStory />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Subscribe />
    </>
  );
};

export default Home;