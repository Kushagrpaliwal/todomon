"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-col md:flex-row w-full h-auto md:h-[150px] p-[20px]'>
      <div className='flex items-center justify-between md:ml-[30px]'>
        <Image src="/logo.svg" alt="logo" width={150} height={150} className="md:w-[250px] md:h-[250px]"/>
        <button 
          className='md:hidden block text-black'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row list-none gap-8 items-center w-full justify-end ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li className='hover:text-green1 cursor-pointer'>Home</li>
        <li className='hover:text-green1 cursor-pointer'>About</li>
        <li className='hover:text-green1 cursor-pointer'>Features</li>
        <Link href="/Login"><li className='hover:text-green1 cursor-pointer'>Login</li></Link>
        <Link href="/Signup"><button className='rounded-lg p-2 mr-2 bg-green1 drop-shadow-md hover:drop-shadow-xl text-white'>Get Started</button></Link>
      </ul>
    </nav>
  )
}

export default Navbar;
