import React, { useState } from 'react';
import imgclient from 'assets/images/Untitled_optimized.jpg';
import imgclient1 from 'assets/images/Untitled1_optimized.jpg';
import ClientsItem from 'components/clients/ClientsItem';

const Clients = () => {
  const dataClient = [
    {
      name: '- Jamie Richardson, Founder of Cocoa Media',
      desc:
        ' “ Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit aenean rhoncus. ” ',
      img: imgclient,
      textRight: true,
    },
    {
      name: '- Bart Thompson, Founder of Rainel',
      desc:
        ' “ Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit aenean rhoncus. ” ',
      img: imgclient1,
      textRight: false,
    },
  ];

  const [clients] = useState(dataClient);
  const listClient = clients.map(item => {
    const { name, desc, img, textRight } = item;
    return (
      <ClientsItem
        key={item.name}
        name={name}
        desc={desc}
        img={img}
        textRight={textRight}
      />
    );
  });
  return (
    <div className="clients">
      <div className="container">
        <div className="title">
          <span> Awesome </span>
          <span> Clients </span>
          <p>See watch nice things our clients said about us.</p>
        </div>

        <div className="clients__content">{listClient}</div>
      </div>
    </div>
  );
};

export default Clients;
