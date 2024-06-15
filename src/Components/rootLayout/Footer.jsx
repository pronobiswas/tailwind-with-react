import React from 'react'
import { Link } from "react-router-dom";
import  logo  from './logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <section id='footer' className='bg-[#1C1E53] py-[96px] relative'>
          <div className="container">
            <div className="footerWrpper flex justify-center flex-col gap-y-9 px-5 lg:flex-row">
              <div className="footerLogo w-[100%]">
                <img src= { logo }  alt="png" />
                <p className='text-[16px] w-[300px] text-white'>
                  We are always open to discuss your project and improve your online presence.
                </p>
              </div>
              <div className="footerSocial w-[100%]">
                <h2 className='text-[32px] text-white'>lets Talk!</h2>
                <p className='text-[16px] w-[300px] text-white'>
                  We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                </p>
                <div className="socialBox flex gap-3 mt-5">
                  <span  className=' text-white'><a href="#"><FaFacebook className='text-[24px]'/></a></span>
                  <span  className=' text-white'><a href="#"><FaTwitter className='text-[24px]'/></a></span>
                  <span  className=' text-white'><a href="#"><FaInstagramSquare className='text-[24px]'/></a></span>
                  <span  className=' text-white'><a href="#"><FaLinkedin className='text-[24px]'/></a></span>
                </div>
              </div>
            </div>
            <div className="absolute hidden w-[30rem]  md:block px-8 py-5 h-20 bg-yellow-200 bottom-0 md:flex gap-10">
              <div>
                <h5 className='font-bold'>Email me at</h5>
                <a href="mailto:biswaspronob@outlook.com">biswaspronob@outlook.com</a>
              </div>
              <div>
                <h5 className='font-bold'>Call us</h5>
                <a href="tell:+8801531881596">+8801531881596</a>
              </div>
            </div>

          </div>
        </section>
            <div className="footerMenu bg-slate-500 px-5 xl:px-0">

                <div className="container menuList flex flex-col lg:flex-row items-center justify-between">
                  <h2><Link  to={'/pop'} className='PrivecyLink text-xl text-white'>Privacy & Policy</Link></h2>
                    <ul className='flex gap-1 md:gap-x-5   [&>li]:text-xs md:[&>li]:text-base [&>li]:font-extralight md:[&>li]:font-normal  [&>li] : text-white [&>li]:py-4'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Blog">My blog</Link>
                            </li>
                            <li>
                                <Link to="/FAQ">FAQ</Link>
                            </li>
                            <li>

                                <Link to="/Featurers">Features</Link>
                            </li>
                            <li>
                                <Link to="/Pricing">pricing</Link>
                            </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default Footer
