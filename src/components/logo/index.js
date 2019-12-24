import React from 'react';
import Envota from 'assets/images/Envato.png';
import WordPress from 'assets/images/WordPress.png';
import Tuts from 'assets/images/Tuts+.png';
import Microlancer from 'assets/images/Microlancer.png';
import LogoItem from 'components/logo/LogoItem';

const Logo = () => {
  const dataLogo = [
    {
      img: Envota,
      name: 'Envota',
    },
    {
      img: WordPress,
      name: 'WordPress',
    },
    {
      img: Tuts,
      name: 'Tuts+',
    },
    {
      img: Microlancer,
      name: 'Microlancer',
    },
  ];

  const listLogo = dataLogo.map(({ name, img }) => (
    <LogoItem key={name} name={name} img={img} />
  ));
  return <div className="logo container">{listLogo}</div>;
};

export default Logo;
