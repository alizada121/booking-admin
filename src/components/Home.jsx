import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='home-general'>
      <h1>Hello to LEMLEM hotel system</h1>
      <Link to="/rooms">
          ROOMS
      </Link>

    </div>
  )
}

export default Home