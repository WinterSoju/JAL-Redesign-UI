import React from 'react'
import './MobileApp.css';

function mobileApp() {
  return (
    <>
   
    <div className='mobile-app-container'>
        <div className="mobile-app-content-row">
          <img 
            src="images/mApp.png" 
            className="mobile-app-image"
            alt="Mobile App"
          />
          <div className="mobile-app-text">
            <h1 className="mobile-app-title">Get Our JAL Mobile App!</h1>
            <p className="mobile-app-description">
              Experience seamless travel planning with our mobile app. Book flights, manage your itinerary, and access exclusive offers on the go!
            </p>
            <div className="mobile-app-buttons">
            <input
              type="image"
              src="images/appstore.png"
              width="120"
              height="35"
            />
            <input
              type="image"
              src="images/googleplay.png"
              width="120"
              height="35"
            />
        </div>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default mobileApp