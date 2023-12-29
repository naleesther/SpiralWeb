import React,{useState} from "react";
import logo from "../../img/Asset 17@2x 1.png";
import "./Navbar.css";
import { FaBars,FaTimes} from 'react-icons/fa';

function App() {
   const [open, setOpen] = useState(false);
   const openNav = () => {
     setOpen(!open);
   };

  return (
    <div>
      <nav className={`navbar ${open ? "active" : ""}`}>
        <div className="navTop">
          <img className="logo" src={logo} />
          <div>
            <div className="menu-icon" onClick={openNav}>
              <span>{open ? <FaTimes /> : <FaBars className="fabars" />}</span>
            </div>
            <ul className={`nav-element ${open ? "active" : ""}`}>
              <li className="nav-items">
                <a>About</a>
              </li>

              <li className="nav-items">
                <a>Features</a>
              </li>

              <li className="nav-items">
                <a>Contact</a>
              </li>
              <li className="nav-items">
                <button className="for-authors">For Authors</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
