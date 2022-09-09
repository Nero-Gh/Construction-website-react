import React from "react";
import { construct1, construct2 } from "../../assets";
import Button from "../Constant/Button";
import Wrapper from "../Constant/Wrapper";
import "./_hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Wrapper>
        <div className="hero">
          <div className="hero-image">
            <img src={construct1} alt="" className="hero-img1" />
            <img src={construct2} alt="" className="hero-img2" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              We Shape Our Buildings- Thereafter,
              <br />
              <span className="hero-title-span">They Shape Us</span>
            </h1>
            <p className="hero-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              aspernatur exercitationem.maxime corporis expedita.
            </p>
            <Button>Get Started</Button>

            <div className="sub-note">
              <div className="sub1">
                <h1 className="sub1-title">10+</h1>
                <p className="sub1-content">Lorem, ipsum dolor.</p>
              </div>
              <div className="sub2">
                <h1 className="sub2-title">300</h1>
                <p className="sub2-content">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
