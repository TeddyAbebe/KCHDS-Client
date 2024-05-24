import React, { Fragment } from "react";

function AboutUs() {
  return (
    <Fragment>
      <div className="overflow-hidden space" id="about-sec">
        <div
          className="shape-mockup jump d-md-block d-none"
          data-right={0}
          data-bottom="10%"
        >
          <img src="assets/img/normal/about_2_shape1.png" alt="shapes" />
        </div>
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-xl-6 mb-50 mb-xl-0">
              <div className="img-box2 tilt-active">
                <div className="img1">
                  <img src="assets/img/normal/about_2_1.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about2-title-wrap">
                <div className="title-area mb-30">
                  <span className="sub-title2">
                    <img
                      className="me-1"
                      src="assets/img/icon/subtitle-img2-1.svg"
                      alt="img"
                    />
                    About Us Company
                  </span>
                  <h2 className="sec-title">
                    Real Estate Excellence, Your Lifestyle Upgrade
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Real estate construction companies may also engage in sales
                  and marketing activities to promote their developed
                  properties. This includes creating marketing strategies,
                  conducting property tours.
                </p>
                <p className="mb-35">
                  Post-construction, real estate construction companies may
                  provide after-sales services, including maintenance support
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checklist style5 mb-45">
                      <ul>
                        <li>Quality Architect Designs</li>
                        <li>Highly Professional Members</li>
                        <li>High Quality Land space</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checklist style5 mb-45">
                      <ul>
                        <li>Deliver Always on Time</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>Affordable Pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="about.html" className="th-btn">
                  ABOUT MORE
                  <i className="far fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
