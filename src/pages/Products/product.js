import React from 'react';
import { ebikeProducts } from './data';
import './product.css';

const Product = () => {
  return (
    <div className='productcard-container'>
      {ebikeProducts.map(({ name, picture, specifications, price }, id) => (
        <div className='productcard' key={id}>
          <img src={picture} alt={name} />
          <h1>{name}</h1>
          <div className='details'>
            <p>Motor Power: {specifications.motorPower}</p>
            <p>Battery Capacity: {specifications.batteryCapacity}</p>
            <p>Max Speed: {specifications.maxSpeed}</p>
            <p>Range: {specifications.range}</p>
          </div>
          <h2>{price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;
