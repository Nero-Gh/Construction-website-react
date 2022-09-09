import React, { useState } from "react";
import "./Navbar.scss";
import { logo, menu, close } from "../../assets";
import Wrapper from "../Constant/Wrapper";

const pages = ["Home", "Services", "About Us", "Contact Us"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };

  const myToggle = toggle ? (
    <img
      src={close}
      alt="Construction close icon"
      onClick={onClickHandler}
      className="menu"
    />
  ) : (
    <img
      src={menu}
      alt="Construction menu icon"
      onClick={onClickHandler}
      className="menu"
    />
  );

  return (
    <div className="header-wrapper">
      <Wrapper>
        <header className="header">
          <div className="logo-section">
            <a href="/">
              <img src={logo} alt="Contruction Logo icon" className="logo" />
              <h3 className="logo-text">Construction</h3>
            </a>
          </div>

          {/* //mobile navigation */}
          <nav className={` ${toggle ? "nav-main" : "active"}`}>
            <ul className="nav-list">
              {myToggle}
              {pages.map((page, index) => (
                <li key={index} className="nav-item">
                  <a href="#" className="nav-link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destop nav */}

          <nav className="nav-desktop">
            <ul className="nav-desktop-list">
              {pages.map((page, index) => (
                <li key={index} className="nav-desktop-item">
                  <a href="#" className="nav-desktop-link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {myToggle}
        </header>
      </Wrapper>
    </div>
  );
};

export default Navbar;
