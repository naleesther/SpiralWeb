import React from "react";
import "./About.css";
import Google from "../../img/logo_play-store.png";
import Store from "../../img/logo_apple-app-store.2928664f.png";
import Hero from "../../img/Hero-right.png";
import Phones from "../../img/phone mockup 1.png"


function About() {
  return (
    <div>
      <div className="about-section">
        <div className="words-section">
          <h1 className="nurture">
            Nurturing Your Soul,
            <span className="one-devotion">One Devotion At A Time.</span>
          </h1>
          <p>
            Explore a world of spirituality, community, and enlightenment right
            at your fingertips. Elevate your daily devotion with Spiral, the
            mobile app designed to enrich your spiritual journey.
          </p>
          <h3 className="get-access">DOWNLOAD APP NOW</h3>
          <div>
            <img src={Google} />
            <img src={Store} className="store-image" />
          </div>
        </div>
        <div className="image-section">
          <img src={Hero} className="hero-right" />
          <img src={Phones} className="phone-mockup" />
        </div>
      </div>
    </div>
  );
}

export default About;
