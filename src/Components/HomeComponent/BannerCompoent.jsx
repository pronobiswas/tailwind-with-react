import React from 'react'
import BannerPng from './images/banner.png'
import { BsArrowRight } from "react-icons/bs";
import Anchor from '../AnchorComponent/Anchor';
import { Link, useNavigate } from "react-router-dom";


const BannerCompoent = () => {
  const navigate = useNavigate();
  let handleViewWork =()=>{
    navigate("/mywork");
  }
  return (
    <>
      <section id="banner" className='bg-[#1C1E53] py-16'>
        <div className="container">
            <div className="bannerWarpper flex flex-col lg:flex-row gap-y-14">
                <div className="bannerText px-5">
                    <h1 className='text-[#fff] md:w-[500px] text-5xl  lg:text-7xl'>Building stellar websites for early startups</h1>
                    <p className='text-[#fff] md:w-[500px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner-btn mt-10 flex items-center">
                        <button className='btn text-white hover:bg-yellow-600 transition-all ease-in-out duration-300  ' onClick={handleViewWork} >View Our work</button>
                        <Link to='/pricing' className='iconBtn text-white relative left-5  block'>view pricing <span className='absolute top-[7px] right-[-25px]'><BsArrowRight /></span></Link>
                        {/* <Anchor linkText={"viewp ricing"} /> */}
                    </div>
                </div>
                <div className="bannerImages w-[100%] ">
                    <img src={ BannerPng } alt="png" className='pic w-[100%] h-[100p%]' />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BannerCompoent
