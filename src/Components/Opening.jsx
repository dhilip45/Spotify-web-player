import React from 'react'
import background from '../assets/background-intro.mp4'

const Opening = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
          <video
        className='w-full h-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={background} type='video/mp4' />
      </video>
     
    </div>
  )
}

export default Opening