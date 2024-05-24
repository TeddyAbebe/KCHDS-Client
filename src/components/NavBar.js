import React, { Fragment } from "react";

function NavBar() {
  return (
    <Fragment>
      <header className="th-header header-layout-default">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+256214203215">256 214 203 215</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="far fa-envelope" />
                      <a href="mailto:info@konta.com">info@konta.com</a>
                    </li>
                    <li>
                      <i className="far fa-location-dot" />
                      258 Helano Street, New York
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links header-right">
                  <ul>
                    <li>
                      <div className="header-social">
                        <span className="social-title">Follow Us:</span>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube" />
                        </a>
                        <a href="https://www.skype.com/">
                          <i className="fab fa-skype" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="index.html">
                      <img src="assets/img/logo.svg" alt="Konta" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="index.html">Home</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Multipage</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="index.html">Home Construction</a>
                              </li>
                              <li>
                                <a href="home-2.html">Home Real Estate</a>
                              </li>
                              <li>
                                <a href="home-3.html">Home Solar Power</a>
                              </li>
                              <li>
                                <a href="home-4.html">Home Industry</a>
                              </li>
                              <li>
                                <a href="home-5.html">Home Architech</a>
                              </li>
                              <li>
                                <a href="home-6.html">Home Building Company</a>
                              </li>
                              <li>
                                <a href="home-7.html">Home Build Craft</a>
                              </li>
                              <li>
                                <a href="home-8.html">
                                  Home Industry Manufacture
                                </a>
                              </li>
                              <li>
                                <a href="home-9.html">
                                  Home Solar Energy
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-10.html">
                                  Home Infinite Construction
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-11.html">
                                  Home Company Solution
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-12.html">
                                  Home Elite Renovation
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-13.html">
                                  Home Industry Solution
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Onepage</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="home1-onepage.html">
                                  Construction Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home2-onepage.html">
                                  Real Estate Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home3-onepage.html">
                                  Solar Power Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home4-onepage.html">
                                  Industry Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home5-onepage.html">
                                  Architech Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home6-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home7-onepage.html">
                                  Build Craft Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home8-onepage.html">
                                  Industry Manufacture Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home9-onepage.html">
                                  Solar Energy Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home10-onepage.html">
                                  Infinite Construction Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home11-onepage.html">
                                  Company Solution Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home12-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home13-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">Home Pagelist</a>
                            <ul className="mb-4">
                              <li>
                                <a href="index.html">Home Construction</a>
                              </li>
                              <li>
                                <a href="home-2.html">Home Real Estate</a>
                              </li>
                              <li>
                                <a href="home-3.html">Home Solar Power</a>
                              </li>
                              <li>
                                <a href="home-4.html">Home Industry</a>
                              </li>
                              <li>
                                <a href="home-5.html">Home Architech</a>
                              </li>
                              <li>
                                <a href="home-6.html">Home Building Company</a>
                              </li>
                              <li>
                                <a href="home-7.html">Home Build Craft</a>
                              </li>
                              <li>
                                <a href="home-8.html">
                                  Home Industry Manufacture
                                </a>
                              </li>
                              <li>
                                <a href="home-9.html">
                                  Home Solar Energy
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-10.html">
                                  Home Infinite Construction
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-11.html">
                                  Home Company Solution
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-12.html">
                                  Home Elite Renovation
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home-13.html">
                                  Home Industry Solution
                                  <span className="new-label">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Home Onepage list</a>
                            <ul>
                              <li>
                                <a href="home1-onepage.html">
                                  Construction Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home2-onepage.html">
                                  Real Estate Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home3-onepage.html">
                                  Solar Power Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home4-onepage.html">
                                  Industry Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home5-onepage.html">
                                  Architech Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home6-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home7-onepage.html">
                                  Build Craft Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home8-onepage.html">
                                  Industry Manufacture Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home9-onepage.html">
                                  Solar Energy Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home10-onepage.html">
                                  Infinite Construction Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home11-onepage.html">
                                  Company Solution Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home12-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home13-onepage.html">
                                  Building Company Onepage
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Pagelist 2</a>
                            <ul>
                              <li>
                                <a href="about.html">About Company</a>
                              </li>
                              <li>
                                <a href="client.html">Trusted Clients</a>
                              </li>
                              <li>
                                <a href="project.html">Project</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                              <li>
                                <a href="team.html">Team Page</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact Us</a>
                              </li>
                              <li>
                                <a href="blog.html">Blog Standard</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="gallery.html">Gallery Page</a>
                              </li>
                              <li>
                                <a href="service.html">Service Page</a>
                              </li>
                              <li>
                                <a href="service-details.html">
                                  Service Details
                                </a>
                              </li>
                              <li>
                                <a href="pricing.html">Pricing</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Pagelist 3</a>
                            <ul>
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout Page</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist Page</a>
                              </li>
                              <li>
                                <a href="error.html">Error Page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="row">
                    <div className="col-auto">
                      <div className="header-button">
                        <button
                          type="button"
                          className="icon-btn searchBoxToggler"
                        >
                          <i className="far fa-search" />
                        </button>
                        <button
                          type="button"
                          className="icon-btn sideMenuToggler"
                        >
                          <i className="fas fa-grid" />
                        </button>
                        <a href="contact.html" className="th-btn ml-20">
                          GET A QUOTE <i className="fas fa-arrow-right ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg"
              data-bg-src="assets/img/bg/logo-bg-2.png"
            />
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default NavBar;
