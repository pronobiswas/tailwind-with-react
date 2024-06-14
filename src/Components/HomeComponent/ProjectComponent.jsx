import React from 'react'
import CardImagetwo from './images/CardImagetwo.jpg'
import cardImageone from './images/cardImageone.png'
import { FaArrowRightLong } from "react-icons/fa6";


const ProjectComponent = () => {
    
  return (
    <>
      <section id="project" className='py-[128px] px-5 xl:px-0'>
        <div className="container">

            <div className="projectHeading mb-12">
                <h2 className='text-4xl mb-2'>View Our Project</h2>
                <a href={'/mywork'} className='iconBtn text-black relative  block'>view here<span className='absolute top-1 left-20'><FaArrowRightLong /></span></a>
            </div>

            <div className="projectContentWarppe flex flex-col lg:flex-row gap-4">
                <div className='bgImage group w-[100%] lg:w-[843px] h-[400px] md:h-[500px] lg:h-[600px] bg-blue-500'>
                    <div className="bgImageOverlay w-0 group-hover:w-[300px] h-[100%] bg-[#1e1e51d4] relative transition-all ease-in-out duration-300">
                        <div className="positionedTxt text-white px-2 absolute bottom-5">
                            <h4 className='text-2xl'>Workhub office Webflow Webflow Design</h4>
                            <p className='text-base mt-5 mb-6'>
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam 
                            </p>
                            <a href={'/mywork'}>view project</a>
                        </div>
                    </div>

                </div>
                <div className='flex md:flex-row lg:flex-col  gap-2'>
                    <div className="w-[405px] h-[284px] bg-red-200 relative workcard">
                        <img src={cardImageone} alt="image" className='pic '/>
                        <div className="workCardoverlay absolute w-[100%] h-[100%] px-2 md:px-6 bg-[#161653dd] top-0  text-white transition-all ease-in-out duration-300">
                            <h3 className='text-base w-[250px] mt-56 md:text-3xl md:mt-32 md:mb-6'>Unisas website design</h3>
                            <a href="https://react-roter-dom.vercel.app/" className='text-sm'>view portfolio</a>
                        </div>
                    </div>
                    <div className="w-[405px] h-[284px] bg-red-200 relative workcard">
                        <img src={CardImagetwo} alt="image" className='pic'/>
                        <div className="workCardoverlay absolute w-[100%] h-[100%] px-2 md:px-6 bg-[#161653dd] top-0  text-white">
                            <h3 className='text-base w-[250px] mt-56 md:text-3xl md:mt-32 md:mb-6'>Unisas website design</h3>
                            <a href="https://react-roter-dom.vercel.app/" className='text-sm'>view portfolio</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default ProjectComponent
