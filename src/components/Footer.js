import React from "react";

function Footer() {
  return (
    <footer
      className="footer-wrapper footer-layout-default"
      data-bg-src="assets/img/bg/footer-bg.png"
    >
      <div className="widget-area space-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-white.svg" alt="Konta" />
                    </a>
                  </div>
                  <p className="about-text">
                    Quickly supply alternative strategic theme areas vis-à-vis
                    B2C mindshare. Objectively repurpose stand-alone. and
                    managing contractual agreement. A reliable company ensures.
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
                <h3 className="widget_title">About Us</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="project.html">Projects</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plans</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Support</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service-details.html">View All Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                    <li>
                      <a href="project.html">Our Projects</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Our Clients</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Single Post</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="team.html">Team Member</a>
                    </li>
                    <li>
                      <a href="blog.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="about.html">Company History</a>
                    </li>
                    <li>
                      <a href="team.html">Need a Career?</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="pricing.html">Our Process</a>
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
                Copyright © 2023 <a href="index.html">Konta</a> All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms &amp; Condition</a>
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
