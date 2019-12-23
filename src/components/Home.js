import React from 'react';
import Header from './header/Header';
import './Home.scss';
import Services from './services';
import Clients from './clients';
import Logo from './logo';
import Team from './team';
import Footer from './footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Clients />
      <Logo />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
