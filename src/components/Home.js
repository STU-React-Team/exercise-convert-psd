import React from 'react';
import Header from './header/Header';
import './Home.scss';
import Services from './services';
import Clients from './clients';
import Logo from './logo';
import Team from './team';

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Clients />
      <Logo />
      <Team />
    </>
  );
}

export default Home;
