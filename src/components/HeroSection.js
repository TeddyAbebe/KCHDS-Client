/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <Fragment>
      <div className="th-hero-wrapper hero-5" id="hero">
        <Slider {...settings} className="hero-slider-5 th-carousel">
          <div className="th-hero-slide">
            <div
              className="th-hero-bg"
              style={{
                backgroundImage: "url(assets/img/properties/downtown.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-8 col-xl-7 col-lg-7">
                  <div className="hero-style5">
                    <span
                      className="hero-subtitle"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      Crafting Dreams Together
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Building Communities, Building Dreams
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="th-hero-slide">
            <div
              className="th-hero-bg"
              style={{
                backgroundImage: "url(assets/img/properties/midtown.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-8 col-xl-7 col-lg-7">
                  <div className="hero-style5">
                    <span
                      className="hero-subtitle"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      Building Together for a Better Tomorrow
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Collaborating to Create Inspiring Spaces
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="th-hero-slide">
            <div
              className="th-hero-bg"
              style={{
                backgroundImage: "url(assets/img/properties/suburban.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-8 col-xl-7 col-lg-7">
                  <div className="hero-style5">
                    <span
                      className="hero-subtitle"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      Dreaming Together, Building Tomorrow
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Together, We Shape the Future
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="scroll-down">
          <a href="#about-sec" className="hero-5-scroll-wrap"></a>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
