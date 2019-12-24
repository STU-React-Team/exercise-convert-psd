import React from 'react';
import Header from 'components/header/Header';
import './Home.scss';
import Services from 'components/services';
import Clients from 'components/clients';
import Logo from 'components/logo';
import Team from 'components/team';
import Footer from 'components/footer/Footer';

const Home = () => {
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
};

export default Home;
