import React from 'react';
import './home.css';
import bgImage from '../../Assets/bgimg.png';
import ArrowScroll from '../../Animation/ArrowScroll';
import bikevideo from '../../Assets/bikevideo.mp4';
import Battery from '../../Animation/Battery';
import photo1 from '../../Assets/photo1.jpg';
import ExploreButton from '../../Animation/ExploreButton';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-image">
          <img src={bgImage} alt="Background" />
        </div>
        <h1 className="header-sujet__hl">Born &amp; Raised in India</h1>
        <h2 className="h5 header-sujet__preline">Handcrafted E-Bikes</h2>
        <ArrowScroll />
      </section>

      <section className='second'>
        <div className='video'>
          <video src={bikevideo} autoPlay loop muted />
          <div className="battery-container">
            <Battery />
          </div>
          <div className="textboxr">
            <div className='wrapper'>
              <h2>MODEL A</h2>
              <img src={photo1} alt='2nd page' className="image-left" />
            </div>
            <ExploreButton/>
            <span>Fast charging</span>
            <span>Sleek aesthetic</span>
            <span>Goes Upto 80kmph</span>
            <span>Anti Theft Pocket Friendly</span>
            <span>Long battery life</span>
            <span>GPS Tracking</span>
          </div>
        </div>
      </section>

      


      {/* <section className='section3'>

    
      </section> */}
    </div>
  );
};

export default Home;
