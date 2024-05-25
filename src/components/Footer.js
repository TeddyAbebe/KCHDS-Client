/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Footer() {
  return (
    <footer
      className="footer-wrapper footer-layout-default"
      data-bg-src="assets/img/bg/footer-bg.png"
      id="footer-sec"
    >
      <div className="widget-area space-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo text-3xl text-center">
                    {/* <a href="index.html">
                      <img src="assets/img/logo-white.svg" alt="ትብብር ቤት" />
                    </a> */}
                    ትብብር ቤት
                  </div>
                  <p className="about-text">
                    Kegeberew Real Estate is committed to revolutionizing the
                    way homes are built. We believe in collaborative
                    construction, empowering individuals to shape their dream
                    homes within their means. By offering flexible options and
                    prioritizing community involvement, we aim to redefine the
                    housing industry. Together, let's build a future where
                    everyone can realize their homeownership dreams.
                  </p>

                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="#hero">Home</a>
                    </li>
                    <li>
                      <a href="#about-sec">About Us</a>
                    </li>
                    <li>
                      <a href="#category-sec">Category</a>
                    </li>
                    <li>
                      <a href="#service-sec">Services</a>
                    </li>
                    <li>
                      <a href="#steps-sec">Steps</a>
                    </li>
                    <li>
                      <a href="#role-sec">Role</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Our Gallery</h3>
                <div className="widget-gallery">
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_1.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      href="assets/img/widget/gallery_1_1.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_2.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      href="assets/img/widget/gallery_1_2.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_3.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      href="assets/img/widget/gallery_1_3.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gallery_1_4.jpg"
                      alt="Gallery Image"
                    />
                    <a
                      href="assets/img/widget/gallery_1_4.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright © 2023 <a href="#footer-sec">ትብብር ቤት</a> All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#footer-sec">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#footer-sec">Terms &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
