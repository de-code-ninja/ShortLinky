import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-3 gap-5 lg:p-8">
        {/* <h1 className="font-black text-4xl text-center">Some Stats about shortLinky</h1> */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-20">
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-400 w-12 h-12 flex justify-center items-center rounded-3xl">
                <Image src="/diagram.png" width={30} height={30} alt="diagram icon" />
              </div>
              <h2 className="font-semibold text-xl text-center"><b className="block">80000+</b> total users</h2>
            </div>

          <div className="flex flex-col items-center">
            <div className="bg-lime-400 w-12 h-12 flex justify-center items-center rounded-3xl">
              <Image src="/users.png" width={30} height={30} alt="users icon" />
            </div>
            <h2 className="font-semibold text-xl text-center"><b className="block">3000+ </b>new signups daily</h2>
          </div>


          <div className="flex flex-col items-center">
            <div className="bg-lime-400 w-12 h-12 flex justify-center items-center rounded-3xl">
              <Image src="/shuttle.png" width={30} height={30} alt="shuttle icon" />
            </div>
            <h2 className="font-semibold text-xl text-center">
             <b className="block">50000+</b>  links generated daily
            </h2>
          </div>
        </div>
          <button className='bg-black text-white md:hidden font-bold font-sans px-7 py-2 text-2xl rounded-lg mt-2'>Sign up</button>
      </div>
      <div className="flex flex-col w-full items-center bg-black text-white p-4 mb-16">
        <h1 className="font-bold text-4xl m-3 border-b-2 border-lime-400 pb-2">
          Silent Features
        </h1>
        <ul className="lg:text-2xl">
          <li className="mb-3">
            <span className="font-bold text-lime-400 block">
              Customizable Links:
            </span>{" "}
            Allow users to create custom short URLs with their preferred alias.
          </li>
          <li className="mb-3">
            <span className="font-bold text-lime-400 block">
              Link Expiration:
            </span>{" "}
            Set a expiration date for shortened links.
          </li>
          <li className="mb-3">
            <span className="font-bold text-lime-400 block">
              Password Protection:
            </span>{" "}
            Add password protection to shortened links
          </li>
          <li className="mb-3">
            <span className="font-bold text-lime-400 block">
              QR Code Generation:
            </span>{" "}
            Generate QR codes for shortened links.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
