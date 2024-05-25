/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = [
  {
    imgSrc: "assets/img/properties/downtown.jpg",
    iconClass: "fas fa-city",
    title: "Downtown (First Grade Central City Areas)",
    text: "10-20 million",
    Features: [
      "4 Floor Houses",
      "25 Floor Residential Apartment Houses",
      "100 Organizing people",
    ],
    detailsLink: "service-details.html",
  },
  {
    imgSrc: "assets/img/properties/midtown.jpg",
    iconClass: "fas fa-building",
    title: "Midtown (Second Grade central city areas)",
    text: "7-10 million",
    Features: [
      "4 Floor houses",
      "15 Floor Residential Apartment Houses",
      "60 organizing people",
    ],
    detailsLink: "service-details.html",
  },
  {
    imgSrc: "assets/img/properties/suburban.jpg",
    iconClass: "fas fa-home",
    title: "Sub-Urban (Third Grade city margin areas)",
    text: "4-7 million",
    Features: [
      "4 Floor houses",
      "8 Floor Residential Apartment Houses",
      "32 organizing people",
    ],
    detailsLink: "service-details.html",
  },
  {
    imgSrc: "assets/img/properties/single_familly.jpg",
    iconClass: "fas fa-home",
    title: "Single family",
    text: "4-12 million Birr",
    Features: [
      "Luxury: 10-12 million Birr",
      "Medium: 7-10 million Birr",
      "Fair: 4-7 million Birr",
    ],
    detailsLink: "service-details.html",
  },
  {
    imgSrc: "assets/img/properties/diaspora.jpg",
    iconClass: "fas fa-plane",
    title: "Diaspora",
    text: "4-12 million Birr",
    Features: [
      "Downtown: 10-12 million Birr",
      "Midtown: 7-10 million Birr",
      "SubUrb: 4-7 million Birr",
      "Single Family: 10-12 million Birr",
    ],
    detailsLink: "service-details.html",
  },
  {
    imgSrc: "assets/img/properties/business_shops.jpg",
    iconClass: "fas fa-store",
    title: "Business Shops",
    Features: [
      "Apartment Bureaus",
      "Condominium mall",
      "Mixed use buildings",
      "Recreational centers",
    ],
    detailsLink: "service-details.html",
  },
];

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
        cssEase: "ease-in-out",
        speed: 500,
        infinite: false,
      });

      $(serviceSlideThumbRef.current).slick({
        asNavFor: serviceGridSliderRef.current,
        slidesToShow: 2,
        vertical: true,
        focusOnSelect: true,
        arrows: false,
        cssEase: "ease-in-out",
        speed: 500,
        verticalSwiping: true,
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
    <section className="bg-title space overflow-hidden" id="category-sec">
      <div className="container">
        <div className="row justify-content-lg-between align-items-end">
          <div className="col-lg-7 mb-n2 mb-lg-0">
            <div className="title-area">
              <span className="sub-title7">
                <span className="box" />
                OUR PACKAGES
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
              {Categories?.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="service-grid">
                    <div className="service-grid_img">
                      <img src={service.imgSrc} alt="Category Image" />
                    </div>

                    <div className="service-grid_content">
                      <div className="service-grid_icon">
                        <i className={service.iconClass}></i>
                      </div>
                      <div className="service-grid_icon-overlay">
                        <i className={service.iconClass}></i>
                      </div>
                      <h3 className="service-grid_title">
                        <a href={service.detailsLink}>{service.title}</a>
                      </h3>
                      <h4 className="service-grid_text">{service.text}</h4>
                      <div className="checklist style5">
                        <ul>
                          {service.Features?.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="th-btn">
                        VIEW DETAILS
                        <i className="fas fa-arrow-right ms-2" />
                      </button>
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
                    imgSrc: "assets/img/properties/downtown.jpg",
                    title: "Downtown (First Grade Central City Areas)",
                  },
                  {
                    imgSrc: "assets/img/properties/midtown.jpg",
                    title: "Midtown (Second Grade central city areas)",
                  },
                  {
                    imgSrc: "assets/img/properties/suburban.jpg",
                    title: "SubUrb (third grade city margin areas)",
                  },
                  {
                    imgSrc: "assets/img/properties/single-familly.jpg",
                    title: "Single family",
                  },
                  {
                    imgSrc: "assets/img/properties/diaspora.jpg",
                    title: "Diaspora",
                  },
                  {
                    imgSrc: "assets/img/properties/commercial.jpg",
                    title: "Business Shops",
                  },
                ].map((thumb, index) => (
                  <div key={index}>
                    <div className="service-thumb">
                      <div className="service-thumb_img">
                        <img
                          src={thumb.imgSrc}
                          alt="service image"
                          className="categoryIcon"
                        />
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
