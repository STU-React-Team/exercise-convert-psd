import React from 'react';
import imgclient from 'assets/images/Untitled_optimized.jpg';
import imgclient1 from 'assets/images/Untitled1_optimized.jpg';
import ClientsItem from 'components/clients/ClientsItem';
import Title from 'components/common/Title';

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
  const titleClient = {
    title: 'Awesome Clients',
    desc: 'See watch nice things our clients said about us.',
  };

  const listClient = dataClient.map(({ name, desc, img, textRight }) => {
    return (
      <ClientsItem
        key={name}
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
        <Title title={titleClient.title} desc={titleClient.desc} />
        <div className="clients__content">{listClient}</div>
      </div>
    </div>
  );
};

export default Clients;
