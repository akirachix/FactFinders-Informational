import './index.css';
import React, { useState } from 'react';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };
  return (
    <div>
  
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Logo" id="logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#"> About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="container">
      
        <div id='details'>
        <h1>Loop & Wear</h1>
    
       <p>Revive, reimagine and reuse the art</p>
        <p>of upcycling for your garment.</p>

       <button id="button"><b>Let's Make It Happen</b></button>
        </div>

        <div>
        <img src="/images/clothingdonation.jpeg" alt="donate" id='donors-clothing' />
      </div>

      </div>

    </div>

  );
}
export default Homepage;

