import React, { useEffect } from 'react';
import './Home.css'
import Header from '../Header';
import Welcome from "../Welcome"

const Home = () => {
  useEffect(() => {
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');

    const handleScroll = () => {
      const value = window.scrollY; 
      wave1.style.backgroundPositionX = 400 + value * 1.5 + 'px';
      wave2.style.backgroundPositionX = 300 + value * -1.5 + 'px';
      wave3.style.backgroundPositionX = 200 + value * 0.5 + 'px';
      wave4.style.backgroundPositionX = 100 + value * -0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <section className='wave-section'>
        <div class="grid-container">
            <Header />
            <Welcome />
            <div className="wave" id="wave1" style={{ "--i": 1 }}></div>
            <div className="wave" id="wave2" style={{ "--i": 2 }}></div>
            <div className="wave" id="wave3" style={{ "--i": 3 }}></div>
            <div className="wave" id="wave4" style={{ "--i": 4 }}></div>
        </div>
    </section>
  );
};

export default Home;
