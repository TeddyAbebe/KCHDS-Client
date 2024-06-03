import React, { useState, Fragment } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <header className="th-header header-layout-default" id="navBar-sec">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:9046">9046</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="far fa-envelope" />
                      <a href="mailto:info@konta.com">
                        kegeberewrealestate@gmail.com
                      </a>
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
                  <div className="header-log text-xl sm:text-3xl sm:ml-14">
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src="assets/img/pbe-RE_logo-01-removebg-preview.png"
                      alt="Logo"
                    />
                    ትብብር ቤት
                  </div>
                </div>
                <div className="col-auto ml-10">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#about-sec">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#category-sec">Categories</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#service-sec">Service</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#steps-sec">Steps</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#role-sec">Role</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                    onClick={toggleMenu}
                  >
                    <i
                      className={isMenuOpen ? "far fa-times" : "far fa-bars"}
                    />
                  </button>
                  {isMenuOpen && (
                    <div className="mobile-menu pl-5">
                      <nav className="main-menu">
                        <ul>
                          <li className="menu-item-has-children">
                            <a href="/">Home</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#about-sec">About Us</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#category-sec">Categories</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#service-sec">Service</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#steps-sec">Steps</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#role-sec">Role</a>
                          </li>

                          <button className="bg-[#D7B15B] mx-auto p-3 rounded-md my-2 h-10 flex overflow-hidden justify-center items-center">
                            <a href="/signup" className="text-xs">
                              Become A Member{" "}
                              <i className="fas fa-arrow-right" />
                            </a>
                          </button>
                        </ul>
                      </nav>
                    </div>
                  )}
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="row">
                    <div className="col-auto">
                      <div className="header-button">
                        <a href="/signup" className="th-btn ml-20">
                          Become A Member{" "}
                          <i className="fas fa-arrow-right ms-1" />
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
