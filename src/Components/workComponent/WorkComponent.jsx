import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import workSampleone from '../../../public/workPhoto.png'
const WorkComponent = () => {
  return (
    <>
    <div id="MyWorkSection" >

        <div className="py-24 bg-slate-300">
              <div className="container">
                <div className="workheader w-full max-w-[556px] mx-auto text-center">
                    <h5 className='text-xl font-bold'>
                        What we created
                    </h5>
                    <h1 className='text-5xl font-bold mt-3 mb-6'>
                        Our Work Portfolio
                    </h1>
                    <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                    <div className="socialWarpper flex justify-center gap-3 mt-5">
                        <span className='text-3xl'><FaFacebook /></span>
                        <span className='text-3xl'><FaTwitterSquare /></span>
                        <span className='text-3xl'><FaLinkedin /></span>
                        <span className='text-3xl'><FaInstagramSquare /></span>
                    </div>
                </div>
              </div>
        </div>

        <div className="container px-5 xl:px-0">
            <div className="mt-12">
                <div className="filterdLinks flex justify-center gap-5 mb-7">
                    <span><a href="#">all</a></span>
                    <span><a href="#">UI design</a></span>
                    <span><a href="#">webFlow design</a></span>
                    <span><a href="#">figma Design</a></span>
                </div>
            </div>
            <div className="sampleWarpper flex flex-col gap-5 lg:gap-8 justify-center items-center">

                <div className="templatewarpper flex flex-col md:flex-row  gap-5 lg:gap-8">
                    <div className="templateBox">
                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 oneCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>
                    <div className="templateBox">

                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 twoCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>
                       
                </div>

                <div className="templatewarpper flex flex-col md:flex-row  gap-5 lg:gap-8">
                    <div className="templateBox">
                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 threeCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>

                    <div className="templateBox">

                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 fourCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>
                       
                </div>

                <div className="templatewarpper flex flex-col md:flex-row  gap-5 lg:gap-8">
                    <div className="templateBox">
                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 fiveCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>
                    <div className="templateBox">

                        <div className="template w-full mx-w-[623px] h-[280px] md:h-[210px] lg:h-[280px]  px-5 py-6 md:px-4 md:py-4 lg:px-5 lg:py-6 twoCard">
                            <div className="w-full h-full bg-slate-500">
                                <img src={workSampleone} alt="png" className='object-cover h-full' />
                            </div>
                        </div>
                        <div className="templateTxt">
                            <h3 className='text-2xl font-bold mt-3 mb-4'>Tamplate1</h3>
                            <p className='text-sm mb-4'>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <span className='flex items-center gap-x-3'><a href="#">View Portfolio</a> <FaArrowRightLong /></span>
                        </div>
                    </div>
                       
                </div>

                

                

                

            </div>
        </div>

        <div className="container flex items-center justify-center text-center">
            <div className='py-32 w-full max-w-[440px] '>
                <h2 className='text-3xl font-semibold'>Let's build something great together</h2>
                <p className='mt-5 mb-10 text-sm'>
                    Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.
                </p>
                <button className='bg-yellow-400 px-9 py-3 rounded-3xl'>Contact Us</button>
            </div>
        </div>


    </div>
    </>
  )
}

export default WorkComponent
