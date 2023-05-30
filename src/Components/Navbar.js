import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Unicus from './Unicus';



const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (

    <nav>
    <ul>
   
    <li>
          <Unicus />
        </li>
      <li className={activePage === 'home' ? 'active' : ''}>
       <Link to="/"> <button onClick={() => handlePageChange('home')}>
          home
          <span></span><span></span><span></span><span></span>
        </button></Link>
      </li>
      <li className={activePage === 'product' ? 'active' : ''}>
      <Link to="/product"> <button onClick={() => handlePageChange('product')}>
          products
          <span></span><span></span><span></span><span></span>
        </button></Link>
      </li>
      <li className={activePage === 'about' ? 'active' : ''}>
      <Link to="/service"> <button onClick={() => handlePageChange('about')}>
          services
          <span></span><span></span><span></span><span></span>
        </button></Link>
      </li>
      <li className={activePage === 'contact' ? 'active' : ''}>
      <Link to="/contact"> <button onClick={() => handlePageChange('contact')}>
          contact
          <span></span><span></span><span></span><span></span>
        </button></Link>
      </li>
    </ul>
  </nav>



  );
};

export default Navbar;


