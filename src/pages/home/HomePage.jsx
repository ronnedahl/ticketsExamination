import React from 'react'
import './home.css'
import Navigation from '../../Components/navigation/Navigation'
function HomePage() {
  return (
    <div className="home-wrapper">
      <div className='home'>
        <img src="./src/assets/logo.png" alt="logo" />
        <h1>Where It's@</h1>
        <h2>Ticketing made easy</h2>

        
      </div>
    <Navigation />
    
    
    </div>
  )
}

export default HomePage
