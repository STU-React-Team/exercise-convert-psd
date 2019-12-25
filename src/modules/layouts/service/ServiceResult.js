import React from 'react';

const ServiceResult = () => {
  return (
    <div className="service-result col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <h2 className="result-head">Some of our results</h2>
      <div className="result">
        <div className="result-detail type-1">
          <div className="result-title">Quisque euismod </div>
          <div className="number-result">80 %</div>
        </div>
        <div className="result-detail type-2">
          <div className="result-title">Curabitur at rhoncu</div>
          <div className="number-result">30 %</div>
        </div>
        <div className="result-detail type-3">
          <div className="result-title">Suspendisse dictum</div>
          <div className="number-result">75 %</div>
        </div>
        <div className="result-detail type-4">
          <div className="result-title">Nam eu ligula</div>
          <div className="number-result">60 %</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceResult;
