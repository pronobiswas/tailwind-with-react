import React from 'react'
import { Link } from "react-router-dom";
import  logo  from './logo.png'

const Footer = () => {
  return (
    <>
        <section id='footer' className='bg-[#1C1E53] py-[96px]'>
          <div className="container">
            <div className="footerWrpper flex justify-center">
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
                <div className="socialBox"><span  className='text-[16px] text-white'>social midia link and icon goes here</span></div>
              </div>
            </div>

          </div>
        </section>
            <div className="footerMenu bg-slate-500">

                <div className="menuList flex gap-x-8">
                  <h2>Copyright 2021, Finsweet.com</h2>
                    <ul className='flex gap-x-8         [&>li] : text-white [&>li]:py-6'>
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
