import React from 'react';
import { Link } from 'react-router-dom';

const ExploreButton = () => {
  const buttonStyles = {
    fontFamily: 'Space Mono, monospace',
    letterSpacing: '1px',
    background: 'none',
    color: 'white',
    position: 'relative',
    outline: 'none',
    border: 'none',
    height: '50px',
    width: '190px',
    fontSize: '14px',
    zIndex: 1,
    right: 315,
    top: 450,
    transition: '.01s .23s ease-out all',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const beforeStyles = {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '55%',
    zIndex: -1,
    transition: '.3s ease-in all',
  };

  const afterStyles = {
    content: '',
    position: 'absolute',
    left: '-5%',
    top: '5%',
    height: '90%',
    width: '5%',
    zIndex: -1,
    transition: '.4s .02s ease-in all',
  };

  const iconRightStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    '&:after': {
      fontFamily: 'FontAwesome',
      content: '→',
      fontSize: '24px',
      display: 'inline-block',
      position: 'relative',
      top: '26px',
      transform: 'translate3D(0, -50%, 0)',
    },
    '&.after:after': {
      left: '-250px',
      color: 'black',
      transition: '.15s .25s ease left, .5s .05s ease color',
    },
    '&.after:before': {
      content: 'Explore',
      position: 'absolute',
      left: '-230px',
      top: '14px',
      opacity: 0,
      transition: '.2s ease-in all',
    },
  };



  

  return (
    <Link to="/product"><button style={buttonStyles}>
      Explore
      <span style={beforeStyles}></span>
      <span style={afterStyles}></span>
      <span className="icon-right after" style={iconRightStyles}></span>
    </button></Link>
  );
};

export default ExploreButton;
