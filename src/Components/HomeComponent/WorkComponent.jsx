import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { GiClosedBarbute } from "react-icons/gi";
import { Link } from 'react-router-dom';

const WorkComponent = () => {
  return (
    <>
      <section id="work" className='py-20'>
        <div className="container">
            <div className="workWarpper flex flex-col lg:flex-row gap-8 px-5">
                <div className="workText">
                    <h2 className='text-4xl'>How we work</h2>
                    <p className='mt-6 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className="flex">
                        <Link to='/contact' className='iconBtn relative text-blue-800'>get in touch with us <span className='absolute top-[5px] -right-6 '><BsArrowRight /></span></Link>
                    </div>
                </div>
                <div className="workCard flex flex-wrap md:items-center md:justify-center">
                    <div className="workCardItem w-[300px]  bg-slate-300 p-4">
                        <span className='text-6xl text-blue-900'><GiClosedBarbute /></span>
                        <h3 className='text-2xl font-bold'>Strategy</h3>
                        <p className='py-4'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        </p>
                    </div>
                    <div className="workCardItem w-[300px]  bg-slate-300 p-4">
                        <span className='text-6xl text-blue-900'><GiClosedBarbute /></span>
                        <h3 className='text-2xl font-bold'>Strategy</h3>
                        <p className='py-4'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        </p>
                    </div>
                    <div className="workCardItem w-[300px]  bg-slate-300 p-4">
                        <span className='text-6xl text-blue-900'><GiClosedBarbute /></span>
                        <h3 className='text-2xl font-bold'>Strategy</h3>
                        <p className='py-4'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        </p>
                    </div>
                    <div className="workCardItem w-[300px]  bg-slate-300 p-4">
                        <span className='text-6xl text-blue-900'><GiClosedBarbute /></span>
                        <h3 className='text-2xl font-bold'>Strategy</h3>
                        <p className='py-4'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default WorkComponent
