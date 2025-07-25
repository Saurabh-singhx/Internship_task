import React, { useState } from 'react'
import logo from '../assets/whole.png'
import dropdown from '../assets/drop-down.svg';
function Navbar({setloginsignup}) {
  return (
    <div className='flex items-center font-ibm justify-between px-[5%] h-[72px]'>

      <div className='shrink-0'>
        <img src={logo} alt="Logo" className='w-[163px] h-[24px]' />
      </div>

      <div className=" items-center hidden lg:flex md:flex">
        <label className="input flex items-center gap-2 w-[360px] h-[42px] rounded-full bg-[#F2F2F2]">
          <svg
            className="w-4 h-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search for your favorite groups in ATG" className="grow font-medium text-[14px] leading-[100%] tracking-[0]" />
        </label>
      </div>

      <div className='flex items-center'>
        <span className='font-medium text-[16px] leading-[100%] tracking-[0] text-right'>Create account.</span>
        <button 
        onClick={() => setloginsignup(true)}
        
        className='flex items-center'>
          <span className='text-indigo-600 font-bold text-[16px] leading-[100%] tracking-[0] text-right'> It’s free!</span>
          <img src={dropdown} alt="" className='inline-block' />
        </button>
        
      </div>

    </div>
  )
}

export default Navbar