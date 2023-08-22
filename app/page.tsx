"use client";
import Link from 'next/link'
import '../styles/globals.css'
import Mobilenav from './Mobilenav'


const home = () => {
  return (
    <div className='h-screen xl:w-screen  xl:h-screen md:h-full bg-cover md:bg-center bg-Home-mobile-background  md:bg-Home-tablet-background  xl:bg-Home-desktop-background'>
      <Mobilenav/>
      <section className=" xl:flex justify-center items-start text-center xl:text-left  w-screen pt-[18%] md:pt-60 xl:pt-40 h-full">
      <div className=" flex w-full justify-center items-center">
          <div className=" flex flex-col xl:justify-start xl:items-start justify-center items-center  xl:w-1/2">
            <h1 className=" flex flex-col text-[#D0D6F9] font-light uppercase pt-20 xl:text-2xl text-lg justify-center items-center xl:justify-start xl:items-start tracking-widest sub-title ">so, you want to travel to </h1>
            <h1 className=" flex  md:h-[180px] text-8xl md:text-[167px] xl:text-8xl xl:h-full text-white font-extralight uppercase space-title">space</h1>
            <p className=" text-[#D0D6F9] md:w-[51%] xl:w-full px-10 xl:px-0 pt-3 xl:pt-8 md:text-xl text-[1rem] leading-loose text-center xl:text-left  font-light text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
             Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>
        <div className=" md:py-40 xl:pb-0 xl:pt-20 pt-[25%]  flex w-full justify-center items-center">
         <Link href='/destination'> <div className=" flex justify-center items-center rounded-full bg-white md:w-72 md:h-72   w-40 h-40 duration-[400ms,700ms] hover:scale-125 hover:shadow-3xl hover:shadow-white">
            <h1 className=" flex justify-center items-center  xl:font-extralight md:text-3xl text-xl uppercase">Explore</h1>
          </div></Link>
        </div>
      </section>
    
    </div>
  )
}

export default home