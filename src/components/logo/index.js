import React, { useState } from 'react';
import Envota from '../../assets/images/Envato.png';
import WordPress from '../../assets/images/WordPress.png';
import Tuts from '../../assets/images/Tuts+.png';
import Microlancer from '../../assets/images/Microlancer.png';
import LogoItem from './LogoItem';

function Logo() {
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

  const [logo] = useState(dataLogo);

  const listLogo = logo.map(
    item => <LogoItem key={item.name} name={item.name} img={item.img} />
  );
  return <div className="logo container">{listLogo}</div>;
}

export default Logo;
