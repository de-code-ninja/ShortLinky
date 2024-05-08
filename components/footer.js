import React from 'react'

function Footer() {
  return (
    <div className='bg-lime-400 fixed bottom-0 w-full flex justify-center gap-2 items-center flex-col md:flex-row md:gap-6 p-2'> 
      <h1>Copyright &copy; 2024| All rights reserved</h1>
      {/* <h2 className='font-bold md:border-x-2 px-5 border-black'>Developed by Enzo </h2> */}

      <div className='hidden md:flex gap-3'>

        <button className='hover:bg-black border-2 border-black w-28 rounded-3xl p-1 hover:text-white font-sans font-semibold '>Github</button>
        <button className='hover:bg-black w-28 border-2 border-black rounded-3xl p-1 hover:text-white font-sans font-semibold '> X</button>
      </div>
    </div>
  )
}

export default Footer
