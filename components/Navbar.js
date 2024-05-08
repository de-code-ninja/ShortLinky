"use client"
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
    const [panel, setpanel] = useState(false)
  return (
    <div className="flex justify-between p-4 bg-black">
      
      <Image src="/logo.png" width={200} height={200} alt="logo" />

      <Image onClick={()=>setpanel(!panel)}
        className="md:hidden cursor-pointer"
        src="/menu-white.png"
        width={40}
        height={40}
        alt="menu icon"
      />

    {panel?
      <div className="absolute w-8/12 h-screen bg-black text-white right-0 py-24 px-5 font-sans font-medium text-xl">
        
        <h1 onClick={()=>setpanel(!panel)} className="font-bold cursor-pointer font-sans text-4xl absolute top-1 right-6 hover:text-lime-400">X</h1>
        <Image src="/logo.png" width={200} height={200} alt="logo" />
        <ul className="flex flex-col gap-1 mt-3">
          <li className="border-b-2 p-2 m-2 hover:bg-lime-400 hover:text-black cursor-pointer">
            About
          </li>
          <li className="border-b-2 p-2 m-2 hover:bg-lime-400 hover:text-black cursor-pointer">
            Contact
          </li>
          <li className="border-b-2 p-2 m-2 hover:bg-lime-400 hover:text-black cursor-pointer">
            Privacy policy
          </li>
          <div className="mt-2">

          <li className="bg-lime-400 text-black p-2 m-2 hover:bg-lime-600 hover:text-black cursor-pointer">
            Follow on Github
          </li>
          <li className="bg-lime-400 text-black p-2 m-2 hover:bg-lime-600 hover:text-black cursor-pointer">
            Follow on X
          </li>
          </div>
        </ul>
      </div>:""}

      <div className="hidden md:block text-white mr-3">
        <ul className="flex font-sans gap-6 font-bold text-xl">
          <li className="hover:text-lime-400 cursor-pointer p-1">Home</li>
          <li className="hover:text-lime-400 cursor-pointer p-1">My URLs</li>
          <li className="hover:text-white text-lime-400 cursor-pointer border-2 hover:border-white border-lime-400 py-1 px-5 rounded-3xl">Login</li>
        </ul>
      </div>
    </div>
  );
} 

export default Navbar;
