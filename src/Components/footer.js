import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About us</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact us</a></li>
      </ul>

      <p style={{ opacity: 0.75 }}>Made with🤍by Dan</p>
    </footer>
  );
}

export default Footer;
