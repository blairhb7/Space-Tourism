"use client";
import { type } from 'os';
import { useEffect, useState } from 'react'
import data from '../Data'
import Mobilenav from '../Mobilenav';

const crew = () => {
  const [crew, setCrew] = useState<any>(data)
  const [index, setIndex] = useState(0)


  useEffect(() => {
    const lastIndex = crew.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, crew]);


  return (
    <div className='CrewBg h-screen relative w-screen'>
      <Mobilenav/>
      <section className="  w-full  flex absolute  h-full overflow-hidden ">
        {crew.crew.map((people: {
          length: number; name: string; id: number; role: string; bio: string; num:string; description: string; images:string 
}, crewIndex:number, data:any) => {
          const {images, role, bio, name, id} = people
          
          let postion = 'nextSlide'
          if(crewIndex === index){
            postion = 'activeSlide'
          }
          if(crewIndex === index -1 || (index === 0 && crewIndex === people.length - 1)){
            postion = 'lastSlide'
          }

          return(
            <article className={`${postion} lg:ml-[10%] mt-6  lg:mt-0  flex-col  h-full  xl:flex-row flex     lg:justify-center   overflow-hidden `}>
          <div className=" md:pl-[5%]  justify-center items-center lg:h-screen lg:justify-end lg:items-start block lg:flex flex-col  xl:flex-col text-left lg:pb-20  ">
               <div className=" flex justify-center lg:justify-start flex-col-reverse lg:flex-cols">
                <div className=" z-50 cursor-pointer flex lg:absolute justify-center lg:justify-start mt-[80%] lg:mt-0  lg:pb-8 md:hidden gap-3  ">
                      <button key={id} onClick={() => setIndex(0)} className={`cursor-pointer h-3 flex w-3 rounded-full ${index === 0 ? 'bg-white ' : ' bg-[#858585] '}`}></button>
                      <button key={id} onClick={() => setIndex(1)} className={`cursor-pointer h-3 flex w-3 rounded-full ${index === 1 ? 'bg-white ' : ' bg-[#858585] '}`}></button>
                      <button key={id} onClick={() => setIndex(2)} className={`cursor-pointer h-3 flex w-3 rounded-full ${index === 2 ? 'bg-white ' : ' bg-[#858585] '}`}></button>
                      <button key={id} onClick={() => setIndex(3)} className={`cursor-pointer h-3 flex w-3 rounded-full ${index === 3 ? 'bg-white ' : ' bg-[#858585] '}`}></button>
                </div>
                <h1 className="  pt-10 pb-4 lg:pt-0  lg:relative md:justify-start lg:items-start justify-center items-center flex   text-white p-[0.5em] mb-6  lg:text-[1.6vw] text uppercase tracking-widest"> <span className=' text text-[#858585] tracking-widest text-3xl'>02</span> meet your crew</h1>
               </div>
                <div className=" lg:pb-6 flex flex-col w-full text-center lg:text-left lg:block justify-center lg:justify-start  ">
                  <h2 className=" text-[#858585] uppercase text-2xl lg:pt-8 my-4 md:my-4 space-title justify-start ">{people.role}</h2>
                  <h1 className=" text-white text-[3.1vw] md:text-6xl lg:text-[3.1vw] md:pb-6 space-title uppercase ">{people.name}</h1>
                  <p className=" text-white opacity-75 px-8 text-sm  md:px-[15%] lg:px-0  lg:w-[88%] mb-[5vw] text md:text-2xl lg:text-lg leading-loose">{people.bio}</p>
                </div>
                <div className="hidden md:flex justify-center gap-3 ">
                  {crew.crew.map((people:{id:number; name:string}) => {
                     const {name, id,} = people
                    return (
                        <div key={id} onClick={() => setIndex(id)} className={`cursor-pointer h-3 flex w-3 rounded-full bg-[#858585] ${index === id ? 'bg-white ' : ' bg-[#858585] '}`}></div>
                    )
                   })}
                </div>
              </div>
              <div className="md:flex mt-28 md:mt-16  absolute md:relative lg:relative justify-center  lg:items-end lg:justify-start w-full lg:mt-[-2em] ">
                <img src={people.images} alt="" className=" h-72 md:w-[54%] md:h-full lg:w-[80%] lg:h-[80%] block mx-auto border-b border-gray-600 mb-[0.5vw] " />
              </div>  
            </article> 
          )
        })}
      </section>
    </div>
  )
}

export default crew

/* 
     <div className=" md:pl-[5%] justify-center items-center h-full lg:justify-end lg:items-start flex flex-col  xl:flex-col text-left mb-10 ">
                <h1 className="  text-white p-[0.5em] mb-[5vw] text-[1.8vw] text uppercase tracking-widest"> <span className=' text text-[#858585] tracking-widest text-3xl'>02</span> meet your crew</h1>
                <div className="md:hidden  flex-col my-5 flex justify-center items-center lg:items-end lg:justify-start w-full mt-[-2em] ">
                  <img src={people.images} alt="" className=" w-60 flex ml-12 " />
                  <hr className="border w-full border-gray-600 " />
                </div>
                <div className=" flex absolute mt-72  md:hidden gap-3 my-40 ">
                    <button key={id} onClick={() => setIndex(0)} className="cursor-pointer h-3 flex w-3 rounded-full bg-[#858585]"></button>
                    <button key={id} onClick={() => setIndex(1)} className="cursor-pointer h-3 flex w-3 rounded-full bg-[#858585]"></button>
                    <button key={id} onClick={() => setIndex(2)} className="cursor-pointer h-3 flex w-3 rounded-full bg-[#858585]"></button>
                    <button key={id} onClick={() => setIndex(3)} className="cursor-pointer h-3 flex w-3 rounded-full bg-[#858585]"></button>
                </div>
                <h2 className=" text-[#858585] uppercase text-2xl pt-8 my-4 md:my-8 space-title ">{people.role}</h2>
                <h1 className=" text-white text-[3.1vw] space-title uppercase ">{people.name}</h1>
                <p className=" text-white opacity-75 w-[88%] mb-[5vw] text text-lg leading-loose">{people.bio}</p>
                <div className="hidden md:flex gap-3 ">
                  {crew.crew.map((people:{id:number; name:string}) => {
                     const {name, id,} = people
                    return (
                        <div key={id} onClick={() => setIndex(id)} className="  cursor-pointer h-3 flex w-3 rounded-full bg-[#858585]"></div>
                    )
                   })}
                </div>
              </div>
              <div className="md:flex hidden items-end justify-start w-full mt-[-2em] ">
                <img src={people.images} alt="" className=" h-[68%]  border-b border-gray-600 mb-[0.5vw] " />
              </div>              })}*/