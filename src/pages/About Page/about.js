import React, { useEffect, useRef } from 'react';
import './about.css';
import aboutvideo from '../../Assets/aboutvideo.mp4';

const About = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const fadeInOnScroll = () => {
      const paragraphs = paragraphsRef.current;
      const screenHeight = window.innerHeight || document.documentElement.clientHeight;

      paragraphs.forEach((paragraph) => {
        const rect = paragraph.getBoundingClientRect();

        if (rect.top <= screenHeight * 0.8 && rect.bottom >= 0) {
          paragraph.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);

  return (
    <section className="third">
      <div className="video-container">
        <video className="videothree" src={aboutvideo} autoPlay loop muted />
      </div>
      <div className="background">
        <div className="content">
          <h1 className="title">Unicus Mobility</h1>
          <p className="description" ref={(el) => (paragraphsRef.current[0] = el)}>
            Unicus Mobility is a startup venture that intends to improve people's access to efficient, eco-friendly, and technologically advanced mobility solutions. We are on a mission to revolutionize the world of transportation with cutting-edge electric vehicles that blend brains, brawn, and sustainability. Inspired by the sight of frantic delivery fleets zipping through gridlocked streets on fossil-fueled bikes, we knew there had to be a better way. Further, we observed the hassles involved in the daily commute that are faced by students and urban professionals. And so, we set out to manufacture e-bikes that would not only ease the daily commute for all of them but would also be kind to the environment and their wallets.
          </p>
          <p className="description" ref={(el) => (paragraphsRef.current[1] = el)}>
            Starting with a college project, we built an electric street bike with a 3000W hub motor and 72V battery pack, allowing us to reach a top speed of 80 kmph. But we did not stop there. For months, we ideated and convened numerous brainstorming sessions to come up with a plan to break into the micro-mobility segment. Our e-bikes are not your run-of-the-mill, dime-a-dozen electric bikes. They are lean, mean, eco-friendly machines that boast not only a sleek, space-saving design but also a rugged build to handle difficult Indian roads. Plus, we have loaded them up with the latest and greatest technology to give riders a truly intelligent, hassle-free ride. And the best part? Our e-bikes will not break the bank, so anyone can join the sustainable mobility revolution.
          </p>
          <p className="description" ref={(el) => (paragraphsRef.current[2] = el)}>
            The founding team has creative thinkers and innovators who are ardent believers that ideas without execution are just hallucinations. What truly distinguishes the sheeps from goats is the way in which they put their ideas into action. The enthusiastic engineers, designers, marketers, and operators that make up our team know everything there is to know about the EV business. It is our mission to provide our customers with smart mobility options that are tailored to their ever-changing requirements. Our seasoned advisors and mentors have equipped us to face the challenges of the business world and propel our startup forward.
          </p>
          <p className="description" ref={(el) => (paragraphsRef.current[3] = el)}>
            At Unicus Mobility, we differentiate ourselves through our cutting-edge technology, top-notch functionality, and sleek aesthetic. Our electric bikes are meticulously crafted to ensure a fun and satisfying ride every time. Our bikes are designed with urban commuters in mind, featuring amenities like long battery life, fast charging, and cutting-edge connection. Our top priority is keeping our riders safe, so we've built-in state-of-the-art features like LED lighting, anti-theft devices, and anti-lock brakes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
