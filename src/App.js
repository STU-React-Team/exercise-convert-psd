import React from 'react';
import './App.css';
// Import Components
import Navbar from './modules/layouts/navbar/Navbar';
import BannerSlider from './modules/layouts/bannerSlider/BannerSlider'
import WorkList from './modules/layouts/workList/WorkList'
import About from './modules/layouts/about/About';
import Service from './modules/layouts/service/Service'
import Price from './modules/layouts/price/Price';
import Contact from './modules/layouts/contact/Contact'
import Footer from './modules/layouts/footer/Footer'
import CopyRight from './modules/layouts/footer/CopyRight'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSlider />
      <WorkList />
      <About />
      <Service />
      <Price />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
