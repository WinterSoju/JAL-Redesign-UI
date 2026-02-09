import React from 'react'
import './HeroSection.css';
import heroImage from '../assets/heropic.jpg'; 
import FlightSearch from './FlightSearch';
import ColorToggleButton from './TripToggle';

function HeroSection() {
  return (
    <div className='hero-container'>
       <img src={heroImage} alt="jal" className="hero-section-img" />
       <h1>Experience omotenashi above the clouds</h1>
       <p>Explore the world with Japan Airlines</p>
       <FlightSearch />
    </div>
  )
}

export default HeroSection
