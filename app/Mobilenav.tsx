import Link from 'next/link';
import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";


const mobilenav = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className=' flex flex-col   md:hidden absolute w-screen '>
        <div className="flex">
        <Link href={'/'} ><img src="/assets/shared/logo.svg" alt="" className=" z-30 cursor-pointer absolute mt-4 mx-3 h-8 w-8 xl:w-[6%] xl:h-[6%] " /></Link>
        <div className=" flex w-full justify-end ">
            <i className=" cursor-pointer absolute z-50  px-6 py-4" onClick={() => setNav(!nav)}>
            {nav ? <HiX className=' text-white w-8 h-8'></HiX> : <HiMenu className=' w-8 h-8 text-white '></HiMenu>}
            </i>
        </div>
        </div>
        <nav className={`${nav ? 'visible w-screen flex justify-end  ' : " hidden"} `}>
            <ul className=" text-white flex flex-col gap-6 text-xl uppercase z-40  py-32 px-6 bg-[rgba(128,109,109,0.1)] w-3/4 h-screen backdrop-filter  backdrop-blur-md  bg-opacity-30 ">
                <Link href={'/'} ><li className="text"><span className=' text text-white px-2 tracking-widest '>00</span> Home</li></Link>
                <Link href={'/destination'}><li className="text"><span className=' text text-white px-2 tracking-widest '>01</span> Destination</li></Link>
                <Link href={'/crew'}><li className="text"><span className=' text text-white px-2 tracking-widest '>02</span> Crew</li></Link>
                <Link href={'/technology'}><li className="text"><span className=' text text-white px-2 tracking-widest '>03</span> Technology</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default mobilenav