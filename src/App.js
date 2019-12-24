import React, {useState} from 'react';
import './App.css';
// Import Component
import Navbar from 'modules/layouts/navbar/Navbar';
import BannerSlider from 'modules/layouts/bannerSlider/BannerSlider';
import WorkList from 'modules/layouts/workList/WorkList';
import About from 'modules/layouts/about/About';
import Service from 'modules/layouts/service/Service';
import Price from 'modules/layouts/price/Price';
import Contact from 'modules/layouts/contact/Contact';
import Footer from 'modules/layouts/footer/Footer';
import CopyRight from 'modules/layouts/footer/CopyRight';
import NavbarMobi from 'modules/layouts/navbar-mobi/NavbarMobi'

const App = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => setDisplay(!display)
  const navbarmobi =  display ? <NavbarMobi /> : null;
  return (
    <div className="App">
      <Navbar  handleClick={handleClick} />
      {navbarmobi}
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
