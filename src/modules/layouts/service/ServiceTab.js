import React from 'react';

const ServiceTab = () => {
  return (
    <div className="service-tab col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <ul className="service-tab-list nav nav-pills">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#flamingo"
            role="tab"
            aria-controls="pills-flamingo"
            aria-selected="true">
            TAB DATA
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#cuckoo"
            role="tab"
            aria-controls="pills-cuckoo"
            aria-selected="false">
            TAB DATA
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#ostrich"
            role="tab"
            aria-controls="pills-ostrich"
            aria-selected="false">
            TAB DATA
          </a>
        </li>
      </ul>
      <div className="service-tab-content tab-content">
        <div
          className="tab-pane fade show active"
          id="flamingo"
          role="tabpanel"
          aria-labelledby="flamingo-tab">
          Flamingos usually stand while the other is tucked beneath their
          bodies. The reason for this <br />
          <br />
          behaviour is not fully understood. One theory is that standing on one
          leg allows the birds to conserve more body heat, given that they spend
          a significant amount of time wading in cold water.
        </div>
        <div
          className="tab-pane fade"
          id="cuckoo"
          role="tabpanel"
          aria-labelledby="profile-tab">
          The cuckoos are generally slender birds. <br /> <br /> Most species
          live in trees, though a sizeable minority are ground-dwelling.
          <br />
          <br /> The family has a cosmopolitan distribution, with the majority
          of species being tropical.
        </div>
        <div
          className="tab-pane fade"
          id="ostrich"
          role="tabpanel"
          aria-labelledby="ostrich-tab">
          The common ostrich is farmed around the world, particularly for its
          feathers, which are decorative and are also used as feather dusters.
          Its skin is used for leather products and its meat is marketed
          commercially, with its leanness a common marketing point.
        </div>
      </div>
    </div>
  );
}
export default ServiceTab;
