import React from 'react';
import Hero from '../components/hero';

const Home = () => {
  return (
    <div>
      <h1 className="welcome">WELCOME TO ADI PROPERTIES</h1>
      <p className="welcome-para">
        Smart Property Search Website Designed To Make Your Work Easier
      </p>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <Hero />
    </div>
  );
};

export default Home;