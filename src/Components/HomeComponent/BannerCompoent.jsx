import React from 'react'
import bannerImage from './images/illustration.jpg'
import { BsArrowRight } from "react-icons/bs";

const BannerCompoent = () => {
  return (
    <>
      <section id="banner" className='bg-[#1C1E53]'>
        <div className="container">
            <div className="bannerWarpper flex ">
                <div className="bannerText">
                    <h1 className='text-[#fff] w-[500px]'>Building stellar websites for early startups</h1>
                    <p className='text-[#fff] w-[500px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner-btn mt-10">
                        <button className='btn text-white '>View Our work</button>
                        <button className=' text-white relative left-5'>view pricing <span className='absolute top-[7px] right-[-25px]'><BsArrowRight /></span></button>
                    </div>
                </div>
                <div className="bannerImages w-[638px] h-[361px] bg-black">
                    <img src="{ bannerImage }" alt="png" className='pic'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BannerCompoent
