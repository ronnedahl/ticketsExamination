import React from 'react'
import './navigation.css'
import { Link } from'react-router-dom'
function Navigation() {
  return (
    <div className='home__navigation'>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/orders">Orders</Link>
    </div>
  )
}

export default Navigation
