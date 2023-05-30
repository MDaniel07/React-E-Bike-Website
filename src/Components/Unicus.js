import React from 'react';
import './Unicus.css';

const Unicus = () => {
  return (
    <div className="container">
      Unicus
      <div className="stack" style={{ '--stacks': 3 }}>
        <span style={{ '--index': 0 }}>MOBILITY</span>
        <span style={{ '--index': 1 }}>MOBILITY</span>
        <span style={{ '--index': 2 }}>MOBILITY</span>
      </div>
      <span className="right">E-Bike</span>
    </div>
  );
};

export default Unicus;
