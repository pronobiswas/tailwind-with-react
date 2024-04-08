import React from 'react'
import { Link } from "react-router-dom";
import  logo  from './logo.png'


const Navbar = () => {
  return (
    <>
      <nav className='bg-[#1C1E53] py-4'>
        <div className="container">
            <div className="menuWarpper py-[32]  flex justify-between">
                <div className="logo h-center">
                   <img src= { logo }  alt="png" />
                </div>
                <div className="menuList flex gap-x-8">
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
                    <button className='py-4 px-12 border-2 border-color:[#F4F6FC] rounded-[40px] text-white'>Contact Us </button>
                </div>
             </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

