import React from 'react';
import './StoreButton.css';
import Navbar from '../HomePage/Navbar';
import About from '../HomePage/About';
import { FaTimes } from 'react-icons/fa';

function StoreButton() {
  return (
    <div className="store-page">
      <Navbar />
      <About />
      <div>
        <div className="form">
          <div className="form-content">
            <div className="forms-content">
              <FaTimes className="faTimes" />
              <h2>Woo-Hoo! You got here early</h2>
              <h3>Be the first to know when we go live.</h3>
              <div className="fields">
                <div className="email-field">
                  <input name="email" type="text" placeholder="Email" />
                </div>
                <div className="name-field">
                  <input
                    name="name"
                    type="text"
                    placeholder="What's your name?"
                  />
                </div>
                <div className="text-field">
                  <input
                    name="name"
                    type="text"
                    placeholder="Which devotional book would you like to read"
                  />
                </div>
              </div>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreButton;