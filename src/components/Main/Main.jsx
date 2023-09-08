import React from 'react'
import "./Main.css"


function Main() {
  return (
    <div className='Main' id='home'>
        <video autoPlay muted loop>
          <source src="/videos/video.mp4" />
        </video>
    </div>

  )
}

export default Main