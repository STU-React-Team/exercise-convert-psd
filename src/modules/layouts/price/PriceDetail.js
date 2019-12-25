import React from 'react';
import PropTypes from 'prop-types';

const PriceDetail = React.memo(({ title, price, features, footer }) => {
  const PRICE_BUSINESS = "Business";

  return (
    <div className="price-detail col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
      { title === PRICE_BUSINESS ? (
        <h2 className="price-title blue">{title}</h2>
      ) : (
        <h2 className="price-title red">{title}</h2>
      )}

      <div className="features">
        <h2 className="features-head">{price}</h2>
        <ul className="list-features">
          { features.map(feature => {
            return (
              <li key={feature}>
                <i className="far fa-check-square" />
                {feature}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="price-footer">
        { title === PRICE_BUSINESS ? (
          <a href="foo">
            <h2 className="footer-title blue">{footer}</h2>
          </a>
        ) : (
          <a href="foo">
            <h2 className="footer-title red">{footer}</h2>
          </a>
        )}
      </div>
    </div>
  );
});
PriceDetail.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  footer: PropTypes.string.isRequired,
};
export default PriceDetail;
