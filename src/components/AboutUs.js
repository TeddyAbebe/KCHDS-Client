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
                    Goal of Kegeberew Real Estate
                  </span>
                  <h2 className="sec-title">
                    <strong>ትብብር ቤት</strong>, Build Your Home Together!
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  In the world huge success were achieved not individually but
                  being in collaboration with others. Construct your houses
                  collaboratively.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checklist style5 mb-45">
                      <ul>
                        <li>Organize 100 groups in the next 2 months.</li>
                        <li>
                          In the next year, enable approximately 5,000 people to
                          become homeowners.
                        </li>
                        <li>Provide special services for diasporas.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checklist style5 mb-45">
                      <ul>
                        <li>Develop real city dwellings.</li>
                        <li>
                          Resolve housing demand issues and make significant
                          contributions to addressing this issue.
                        </li>
                        <li>Avail this service in all regional states.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button className="th-btn">
                  ABOUT MORE
                  <i className="far fa-arrow-right ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
