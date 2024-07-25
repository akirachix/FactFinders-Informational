import './index.css';
import React, { useState } from 'react';

const Homepage =() =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };
  return (
    <div className='home-page'>
  
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
          <li><a href="home">Home</a></li>
          <li><a href="about"> About Us</a></li>
          <li><a href="services">Products</a></li>
          <li><a href="team">Team</a></li>
          <li><a href="contact us">Contact Us</a></li>
        </ul>
      </div>

      <div className="container">
      
        <div id='details'>
        <h1>Loop & Wear</h1>
        
        <div id='detail-explanation'>
        <p>Revive, reimagine and reuse the art
        of upcycling for your garment.</p>
        </div>
  
     

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

