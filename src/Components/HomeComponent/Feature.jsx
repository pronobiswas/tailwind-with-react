import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { BsWechat } from "react-icons/bs";

const Feature = () => {
  return (
    <>
      <section id="featureComponent" className='pt-16 pb-32'>
        <div className="container">
            <div className="featureHeader text-center">
                <h6>Feature</h6>
                <h2 className='w-[300px] md:w-[325px] lg:w-[523px] mx-auto font-bold text-2xl sm:text-3xl lg:text-5xl mb-16'>Design that solves problems, one product at a time</h2>
            </div>
            <div className="featureWarpper mt-5 flex flex-wrap gap-4 items-center justify-center">
                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><FaUsers /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>Uses Client First</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>

                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><FaCheckCircle /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>Two Free Revision Round</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><TbDiscountCheckFilled /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>Template Customization</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><BsWechat /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>24/7 Support</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><FaUsers /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>Two Free Revision Round</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="featureItem w-[320px] px-8 py-12">
                    <span className='text-5xl text-blue-800'><FaUsers /></span>
                    <h4 className='text-xl font-bold mb-6 mt-3'>Two Free Revision Round</h4>
                    <p className='font-thin '>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Feature
