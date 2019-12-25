import React from 'react';
import PriceDetail from './PriceDetail';
import SignUp from './SignUp';
import './PriceStyle.css';

const Price = () => {
  const priceList = [
    {
      title: 'Light',
      price: 'Free',
      features: ['Sed laoreet ullamcorper', 'Smetus semper olestie'],
      footer: 'Sign Up For Free',
    },
    {
      title: 'Standard',
      price: '$ 10 per/m',
      features: [
        'Sed laoreet ullamcorper',
        'Smetus semper molesti3',
        'Ametus semper molestie',
      ],
      footer: 'Buy NOW',
    },
    {
      title: 'Business',
      price: '$ 35 per/m',
      features: [
        'Sed laoreet ullamcorper',
        'Smetus semper molesiee',
        'Ametus semper olesiea',
        'Ametus semper molesti',
      ],
      footer: 'Buy NOW',
    },
    {
      title: 'Enterprise',
      price: '$ 50 per/m',
      features: [
        'Sed laoreet ullamcorper',
        'Smetus seper mlestie',
        'Ametus semper molestie',
      ],
      footer: 'Buy NOW',
    },
  ];

  return (
    <div className="price container-fluid">
      <div className="container">
        <div className="row">
          <h1 className="price-head heading w-100">
            SEE OUR PRICES AND COMPARE!
            <i className="fas fa-arrow-up" />
          </h1>
          <div className="price-list">
            <div className="row">
              {priceList.map(price => {
                return (
                  <PriceDetail
                    key={price.price}
                    title={price.title}
                    footer={price.footer}
                    price={price.price}
                    features={price.features}
                  />
                );
              })}
            </div>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Price;
