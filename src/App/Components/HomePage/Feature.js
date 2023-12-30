import React from "react";
import "./Feature.css";
// import SpiralImage from "../../img/Rectangle 14.png";
import { FaCheckCircle } from "react-icons/fa";
import Iphone from "../../../img/iPhone 13 Pro.png";
import Google from "../../../img/logo_play-store.png";
import Store from "../../../img/logo_apple-app-store.2928664f.png";
import Person from "../../../img/Rectangle 37.png";
import Cards from "./cards";

function Feature() {
  return (
    <div className="spiral-main-section">
        <div className="spiral">
            <div className="spiral-content">
              <h2>HOW WE DO IT</h2>
              <p>
                Deepen your relationship with God, one devotion at a time. In a
                world filled with constant distractions and busyness, we offer a
                serene oasis for your soul, a place to find solace, wisdom, and
                growth.
              </p>
            </div>
            <div className="columns">
              <div className="first-column">
                <div className="card1">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={"DIVERSE CONGREGATIONS"}
                    paragraph="Experience the unity of faith with content from different
                    churches and preachers."
                  />
                </div>

                <div className="card2">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={"COMMUNITY CONNECTIONS"}
                    paragraph="Transcend the barriers of distance, and tap into a vibrant
                    community of believers."
                  />
                </div>
                <div className="card3">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={"PERSONALIZED REMINDERS"}
                    paragraph="Get a daily nudge for an enriching devotional time that fit
                    your schedule."
                  />
                </div>
              </div>
              <div className="iphone13">
                <img src={Iphone} className="Iphone-13" />
              </div>

              <div className="second-column">
                <div className="card1">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={"DAILY DEVOTION"}
                    paragraph="Start each day with devotion: your daily spiritual compass
                    to guide you"
                  />
                </div>

                <div className="card2">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={" AUDIO SUPPORT"}
                    paragraph="Amplify your spiritual journey with the power of sound for
                    you to listen on the go."
                  />
                </div>
                <div className="card3">
                  <Cards
                    icon={<FaCheckCircle className="checked-circle" />}
                    header={"INSPIRATIONAL CONTENT"}
                    paragraph="Fuel your soul and uplift your spirit with a daily dose of
                    positivity and enlightenment."
                  />
                </div>
              </div>
            </div>
        </div>
      <div>
        <div className="download-app-section">
          <div className="download-app">
            <h1>DOWNLOAD APP NOW</h1>
            <p>
              Ready to elevate your daily devotion? Join the Spiral community
              and experience the difference in your spiritual life. Download the
              app now and embark on a journey of enlightenment and faith.
            </p>
            <div className="google-store">
              <img src={Google} />
              <img src={Store} className="store-image" />
            </div>
          </div>
          <div className="person-prayers">
            <img src={Person} className="person" />
            <div className="prayers">
              <h3>Prayer</h3>
              <p>
                Et vulputate interdum suspendisse odio sagittis. Purus commodo,
                non risus, vestibulum. Nunc turpis ullamcorper arcu, sodales
                faucibus cras est. Proin velit in ipsum in in eu vel pulvinar.
                Aliquet semper amet id dignissim tellus tristique. Integer
                porttitor a mattis dolor velit arcu. Sagittis vulputate cursus
                molestie quis ridiculus venenatis tempor. aliquam pellentesque
                morbi. Tellus eu euismod id porttitor tempus, ante tincidunt
                aliquet semper. Amen
              </p>
              <button className="amen-button">Amen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
