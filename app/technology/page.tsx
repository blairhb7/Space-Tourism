"use client";
import { type } from 'os';
import { useEffect, useState } from 'react'
import data from '../Data'
import NavBar from '../Navbar';
import Mobilenav from '../Mobilenav';

const technology = () => {
  const [content, setContent] = useState<any>(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = content.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, content]);


  return (
    <div className='TechnologyBg h-screen w-screen'>
      <Mobilenav/>
      <div className=" flex  flex-col h-full  w-screen   gap-4 ">
     
        <div className=" flex mt-20 mb-2 mx-auto  md:mt-40 md:mx-2">
          <h1 className=" w-full text-white space-title uppercase tracking-widest text-[1.9vw] "> <span className=' text text-[#858585] tracking-widest text-3xl'>03</span> space launch 101</h1>
        </div>
        <div className=" relative xl:pt-0 md:pt-[5%] h-full overflow-hidden lg:m-10 ">
        {content.technology.map((technologyItem :{id:number; images:string; name:string; description:string}, indexTech:number ) => {
              const {id, images,  name, description} = technologyItem
              
                let postion = 'nextSlide'
                if(indexTech === index){
                  postion = 'activeSlide'
                }
                if(indexTech === index -1 || (index === 0 && indexTech === content.length - 1)){
                  postion = 'lastSlide'
                }
                 return (
                  <article   className={`${postion} hover:text-black flex-col-reverse flex xl:flex-row w-full h-full `}>
                    <ul className="px-32 text-white hover:text-black pt-5 flex xl:flex-col justify-center items-center gap-5">
                    {content.technology.map((Linkbutton :{id:number, link:number}) => {
                      const {id, link} = Linkbutton
                      return (
                        
                          <li key={id} className=" hidden lg:flex">
                            <button onClick={() => setIndex(id)} className={` border  rounded-full h-20 w-20 hidden lg:flex justify-center items-center text-2xl ${index === id ? 'bg-white z-50 text-black' : ' text-white '}`}>
                              {link}
                            </button>
                          </li>
                        
                      )
                    })}
                      </ul>
                      <div className="w-full h-full  text-white flex flex-col-reverse xl:flex-col text-center xl:text-left justify-end lg:items-start">
                       <div className="flex flex-col">
                          <h2 className="uppercase text-[#858585]">The terminology...</h2>
                          <h1 className=" text-3xl md:text-6xl space-title uppercase hover:text-black">{technologyItem.name}</h1>
                          <p className=" text-white text-sm md:text-2xl flex-wrap lg:text-base font-light leading-loose mx-auto mt-6 xl:mx-0 w-[82%] lg:w-[86%] xl:px-4 xl:mt-16">{technologyItem.description}</p>
                       </div>
                        <div className=" flex justify-center gap-5 py-5">
                        {content.technology.map((Linkbutton :{id:number, link:number}) => {
                          const {id, link} = Linkbutton
                          return (
                           
                             <ul className=" text-white hover:text-black justify-center gap-5">
                              <li key={id} className=" xl:hidden">
                                <button onClick={() => setIndex(id)} className={` border  rounded-full  w-10 h-10 md:h-20 md:w-20 md:px-3 lg:hidden  justify-center items-center text-sm md:text-xl ${index === id ? 'bg-white z-50 text-black' : ' text-white '}`}>
                                  {link}
                                </button>
                              </li>
                            </ul>
                           
                          )
                        })}
                        </div>
                      </div>
                      <div className="w-full  lg:h-full text-white flex items-end">
                        <img src={technologyItem.images} alt="" className=" w-screen h-52 md:h-80 lg:h-full  lg:w-full" />
                      </div>

                    
                  </article>
                )
            })}
        </div>
        
      </div>
    </div>
  )
}

export default technology

/* <ul className=" px-32 text-white hover:text-black  text flex flex-col justify-center items-center gap-5">
                        <li className=""><button  onClick={() => setIndex(technologyItem.id)} className="text-white   hover:text-black  hover:bg-white border  rounded-full h-24 w-24 flex justify-center items-center text-2xl">{id}</button></li>
                        <li className=""><button  onClick={() => setIndex(technologyItem.id)} className="text-white   hover:text-black  hover:bg-white border  rounded-full h-24 w-24 flex justify-center items-center text-2xl">{id}</button></li>
                        <li className=""><button  onClick={() => setIndex(technologyItem.id)} className="text-white   hover:text-black  hover:bg-white border  rounded-full h-24 w-24 flex justify-center items-center text-2xl">{id}</button></li>
                      </ul>*/