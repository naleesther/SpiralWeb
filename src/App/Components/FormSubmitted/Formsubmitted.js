import React from 'react';
import './Formsubmitted.css';
import Navbar from '../HomePage/Navbar';
import About from '../HomePage/About';
import { FaCheckCircle } from 'react-icons/fa';

function Formsubmitted() {
  return (
    <div>
        <Navbar/>
        <About/>
        <div>
            <form className="form-submit">
                <div className="delivered">
                    <FaCheckCircle className="delivered-checked"/>
                    <h2>Thank You!</h2>
                    <p>Information successfully submitted.</p>
                    <button className="close">Close</button>


                </div>

            </form>
        </div>
    </div>
  )
}

export default Formsubmitted