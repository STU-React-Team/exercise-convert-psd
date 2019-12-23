import React from 'react';
import Header from './header/Header';
import './Home.scss';
import Services from './services';
import Clients from './clients';
import Logo from './logo'

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Clients />
      <Logo /> 
    </>
  );
}

export default Home;
