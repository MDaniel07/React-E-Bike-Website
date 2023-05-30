
import React from 'react';
import './ArrowScroll.css';

const ArrowScroll = () => {
  const scrollDown = () => {
    const offset = 170; 
    window.scrollTo({
      top: window.innerHeight + offset,
      behavior: 'smooth',
    });
  };

  return (
    <a href="/#" className="arrow-container" onClick={scrollDown}>
      <div className="arrow"></div>
      <div className="arrow"></div>
      <div className="arrow"></div>
    </a>
  );
};

export default ArrowScroll;
