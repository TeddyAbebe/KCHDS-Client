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
                backgroundImage: "url(assets/img/hero/hero_bg_5_1.jpg)",
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
                      Design is making sense of things
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Crafting Beauty In <span>Architecture</span>
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <a href="project.html" className="th-btn style3">
                        View Projects <i className="fas fa-arrow-right ms-2" />
                      </a>
                      <a href="about.html" className="th-btn style2">
                        Our Story <i className="fas fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="th-hero-slide">
            <div
              className="th-hero-bg"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_5_2.jpg)",
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
                      Inspiration, Innovation, and Architecture.
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Where Vision Meets <span>Architect</span>
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <a href="project.html" className="th-btn style3">
                        View Projects <i className="fas fa-arrow-right ms-2" />
                      </a>
                      <a href="about.html" className="th-btn style2">
                        Our Story <i className="fas fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="th-hero-slide">
            <div
              className="th-hero-bg"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_5_3.jpg)",
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
                      Architects of Innovation and Imagination.
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      Designing Dreams Inspire <span>Architect</span>
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <a href="project.html" className="th-btn style3">
                        View Projects <i className="fas fa-arrow-right ms-2" />
                      </a>
                      <a href="about.html" className="th-btn style2">
                        Our Story <i className="fas fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="scroll-down">
          <a href="#about-sec" className="hero-5-scroll-wrap">
            Scroll
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
