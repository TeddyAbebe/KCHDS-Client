import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
  const serviceGridSliderRef = useRef(null);
  const serviceSlideThumbRef = useRef(null);

  useEffect(() => {
    if (serviceGridSliderRef.current && serviceSlideThumbRef.current) {
      $(serviceGridSliderRef.current).slick({
        asNavFor: serviceSlideThumbRef.current,
        slidesToShow: 1,
        vertical: true,
        arrows: false,
      });

      $(serviceSlideThumbRef.current).slick({
        asNavFor: serviceGridSliderRef.current,
        slidesToShow: 3,
        vertical: true,
        focusOnSelect: true,
        arrows: false,
      });

      $(".prev").click(() => {
        $(serviceSlideThumbRef.current).slick("slickPrev");
      });

      $(".next").click(() => {
        $(serviceSlideThumbRef.current).slick("slickNext");
      });
    }

    return () => {
      if (serviceGridSliderRef.current && serviceSlideThumbRef.current) {
        $(serviceGridSliderRef.current).slick("unslick");
        $(serviceSlideThumbRef.current).slick("unslick");
      }
    };
  }, []);

  return (
    <section className="bg-title space overflow-hidden" id="service-sec">
      <div className="container">
        <div className="row justify-content-lg-between align-items-end">
          <div className="col-lg-7 mb-n2 mb-lg-0">
            <div className="title-area">
              <span className="sub-title7">
                <span className="box" /> OUR PACKAGES
              </span>
              <h2 className="sec-title text-white">
                We Provide Suitable Categories
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-8">
            <div
              className="row th-carousel"
              id="serviceGridSlider"
              ref={serviceGridSliderRef}
            >
              {[
                {
                  imgSrc: "assets/img/update1/service/service_2_1_v2.jpg",
                  iconSrc: "assets/img/update1/icon/service_1_1.svg",
                  iconOverlaySrc: "assets/img/update1/icon/service_2_1.svg",
                  title: "Building Construction",
                  text: "Professionally benchmark real-time quality vectors for ubiquitous catalysts for change.",
                  detailsLink: "service-details.html",
                },
                {
                  imgSrc: "assets/img/update1/service/service_2_2_v2.jpg",
                  iconSrc: "assets/img/update1/icon/service_1_2.svg",
                  iconOverlaySrc: "assets/img/update1/icon/service_2_2.svg",
                  title: "Projects Plannings",
                  text: "Traditional to benchmark real-time quality vectors for ubiquitous catalysts for makeup.",
                  detailsLink: "service-details.html",
                },
                {
                  imgSrc: "assets/img/update1/service/service_2_3_v2.jpg",
                  iconSrc: "assets/img/update1/icon/service_1_3.svg",
                  iconOverlaySrc: "assets/img/update1/icon/service_2_3.svg",
                  title: "Interior Developments",
                  text: "Technical were benchmark real-time quality vectors for ubiquitous catalysts for change.",
                  detailsLink: "service-details.html",
                },
                {
                  imgSrc: "assets/img/update1/service/service_2_4.jpg",
                  iconSrc: "assets/img/update1/icon/service_1_4.svg",
                  iconOverlaySrc: "assets/img/update1/icon/service_2_4.svg",
                  title: "Virtual design & build",
                  text: "Get up for the benchmark real-time quality vectors for ubiquitous catalysts for geting.",
                  detailsLink: "service-details.html",
                },
              ].map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="service-grid">
                    <div className="service-grid_img">
                      <img src={service.imgSrc} alt="service image" />
                    </div>
                    <div className="service-grid_content">
                      <div className="service-grid_icon">
                        <img src={service.iconSrc} alt="Icon" />
                      </div>
                      <div className="service-grid_icon-overlay">
                        <img src={service.iconOverlaySrc} alt="Icon" />
                      </div>
                      <h3 className="service-grid_title">
                        <a href={service.detailsLink}>{service.title}</a>
                      </h3>
                      <p className="service-grid_text">{service.text}</p>
                      <div className="checklist style5">
                        <ul>
                          <li>Home Architecture</li>
                          <li>Perfect Design</li>
                          <li>Efficient Building</li>
                          <li>Big Landspace</li>
                        </ul>
                      </div>
                      <a href={service.detailsLink} className="th-btn">
                        VIEW DETAILS
                        <i className="fas fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4">
            <div className="service-thumb-wrap">
              <button className="arrow-btn prev">
                <i className="far fa-arrow-up" />
              </button>
              <div
                className="th-carousel"
                id="serviceSlideThumb"
                ref={serviceSlideThumbRef}
              >
                {[
                  {
                    imgSrc:
                      "assets/img/update1/service/service_thumb_2_1_v2.png",
                    title: "Building Construction",
                  },
                  {
                    imgSrc:
                      "assets/img/update1/service/service_thumb_2_2_v2.png",
                    title: "Projects Plannings",
                  },
                  {
                    imgSrc:
                      "assets/img/update1/service/service_thumb_2_3_v2.png",
                    title: "Interior Developments",
                  },
                  {
                    imgSrc: "assets/img/update1/service/service_thumb_2_4.jpg",
                    title: "Virtual design & build",
                  },
                ].map((thumb, index) => (
                  <div key={index}>
                    <div className="service-thumb">
                      <div className="service-thumb_img">
                        <img src={thumb.imgSrc} alt="service image" />
                      </div>
                      <h3 className="service-thumb_title">{thumb.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <button className="arrow-btn next">
                <i className="far fa-arrow-down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
