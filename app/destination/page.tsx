"use client";
import { type } from 'os';
import { useEffect, useState } from 'react'
import data from '../Data'
import Mobilenav from '../Mobilenav';



const destination: React.FC = () => {
  const [places, setplaces] = useState<any>(data)
  const [index, setIndex] = useState(0)


  useEffect(() => {
    const lastIndex = places.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, places]);


  return (
    
    <div className='bg-destination-mobile-background  md:bg-destination-tablet-background  xl:bg-destination-desktop-background bg-cover bg-center h-[900px] md:h-screen  overflow-hidden w-screen'>
      <Mobilenav/>
      <div className="xl:h-screen   xl:flex-row xl:flex flex flex-col xl:justify-center xl:items-center w-screen  xl:w-[70%] xl:mx-auto text-white">
       
        {places.destinations.map((planets: {
          length: number; name: string; id: string; distance: string; travel: string; num:string; description: string; images:string 
}, indexPlanet:number, data:any) => {
          const {name, num, id, distance, travel, description, images} = planets

          let postion = 'nextSlide'
          if(indexPlanet === index){
            postion = 'activeSlide'
          }
          if(indexPlanet === index -1 || (index === 0 && indexPlanet === planets.length - 1)){
            postion = 'lastSlide'
          }
          return(
            <article className={`${postion} pt-14  md:h-screen xl:flex-row xl:flex xl:h-full     xl:pt-20 xl:overflow-hidden`}>
              <div id={planets.name} className=" flex w-full flex-col xl:justify-end xl:items-end   ">
                  <h1 className=" text-white items-start  uppercase text md:text-[15px] xl:text-3xl xl:pr-[28%] pl-4 xl:pl-0 py-8 tracking-widest mt-8"><span className=' text-gray-600 text'>{planets.num}</span>  pick your destination</h1>
                  <img src={planets.images} alt="" className=" planets animate-spin mx-auto xl:mx-0 xl:w-[60%] lg:w-[55%] md:w-[40%] w-[55%] py-4" />
              </div>
              <div className=" flex text-left  xl:items-start xl:justify-center items-center flex-col w-full">
                 <div className=" md:mx-20 md:pt-8 flex items-center xl:items-start flex-col">
                  <ul className=" flex pb-3">
                    {places.destinations.map((planets:{id:number, name:string}) => {
                      const {name, id,} = planets
                      return (
                        <li key={id} className="mr-5 flex">
                    <button
                      onClick={() => setIndex(id)}
                      className={` text uppercase lg:text-3xl  text-[#D0D6F9] ${
                        id == index && "border-b border-white uppercase font-semibold tracking-wider  text-xl text-[#D0D6F9]"
                      }`}
                    >
                      {planets.name}
                    </button>
                  </li>
                      )
                    })}
                    </ul>
                  <h1 className=" text-white uppercase space-title  xl:h-20 text-6xl md:text-8xl lg:text-9xl xl:text-7xl pb-3">{planets.name}</h1>
                  <p className=" text-[#D0D6F9] text-lg md:text-xl lg:text-xl xl:text-xl font-thin text-center xl:text-justify xl:w-[69%] flex-nowrap flex text px-3 md:px-0 py-5  md:py-5 xl:py-3">{planets.description}</p>
                  <hr className='xl:w-[65%] w-[92%] border-gray-700  my-4' />
                  <div className="  flex flex-col md:flex-row gap-8 md:gap-52 xl:gap-20 md:pb-14 uppercase text-white">
                    <div className=" text-center ">
                      <h2 className=" text-sm lg:text-xl text text-[#D0D6F9] opacity-80"> Avg. Distance</h2>
                      <h3 className=" text text-4xl md:text-5xl lg:text-7xl xl:text-3xl">{planets.distance}</h3>
                    </div>
                    <div className=" text-center ">
                    <h2 className="text-sm lg:text-xl text-[#D0D6F9] text opacity-80"> est. travel time</h2>
                      <h3 className=" text text-4xl md:text-5xl lg:text-7xl xl:text-3xl">{planets.travel}</h3>
                    </div>
                  </div>
                  </div>
              </div>
            </article>                
          )

        })}
      </div>
    </div>
  )
}

export default destination


