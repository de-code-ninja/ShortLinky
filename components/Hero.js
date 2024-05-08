import React from 'react'

function Hero() {
  return (
    <div>
      <div className='bg-lime-50 w-full h-64 flex justify-center flex-col items-center'>
        <h1 className='font-black font-sans text-6xl lg:text-7xl'>Short<span className='text-lime-500'>Linky</span></h1>
        <h3 className='font-semibold text-2xl text-center'>helps you build stronger connections</h3>
        <button className='bg-black text-white font-bold font-sans px-7 py-2 text-2xl rounded-lg mt-2'>Sign up</button>
      </div>
    </div>
  )
}

export default Hero
