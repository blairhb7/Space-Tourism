"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import App from "next/app"



const NavBar = () => {
  const [index, setIndex] = useState(0)



  return (
    <>
    <div className=" hidden md:flex z-50 flex-row justify-center items-center w-screen absolute ">
      <div className="  w-[75%] justify-center mt-[2.5em] relative pl-6">
      <img src="/assets/shared/logo.svg" alt="" className=" pl-2 h-10 w-12 xl:w-[6%] xl:h-[6%] " />
      <hr className=' hidden xl:flex w-[90%]  border-gray-700  absolute top-[55%] z-10 -right-[4%]  border-solid ' />
      </div>
      <nav className=" flex uppercase items-center w-full bg-[rgba(128,109,109,.254)] text-white backdrop-filter mt-7  backdrop-blur-sm  bg-opacity-40">
        <ul className={` flex justify-start items-center gap-5 pl-12  h-16 `}>
        <li className="hover:border-b-2 border-white h-full mx-2 py-1 font-light flex justify-center items-center"><Link href="/"><span className='  font-bold px-1'>00</span>Home</Link></li>
        <li className="hover:border-b-2 border-white h-full mx-2 py-1 font-light flex justify-center items-center"><Link href='/destination'><span className=' font-bold px-1'>01</span>Destination</Link></li>
        <li className="hover:border-b-2 border-white h-full mx-2 py-1 font-light flex justify-center items-center"><Link href="/crew"><span className=' font-bold px-1'>02</span>Crew</Link></li>
        <li className="hover:border-b-2 border-white h-full mx-2 py-1 font-light flex justify-center items-center"><Link href="/technology"><span className=' font-bold px-1'>03</span>Technology</Link></li>
        </ul>
      </nav>
    </div> 
    </>
  )
}

export default NavBar