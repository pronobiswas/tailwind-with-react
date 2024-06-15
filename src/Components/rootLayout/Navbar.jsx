import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import  logo  from './logo.png'
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";


const Navbar = () => {
  let navigate = useNavigate()
  let [showMenu , setShowMenu] = useState(false);
  let [menuBar , setMenuBar] = useState(true);
  let handleShoowMenu =()=>{
    setShowMenu(true)
    setMenuBar(false)
  }
  let handleCloseMenu =()=>{
    setMenuBar(true)
    setShowMenu(false)
    console.log("horibol");
  }
  let handleContactBtn =()=>{
    navigate('/contact')
  }
  return (
    <>
      <nav className='bg-[#1C1E53] py-4'>
        <div className="container">
            <div className="menuWarpper py-[32] px-5 flex justify-between">
                <div className="logo h-center">
                   <Link to="/"><img src= { logo }  alt="png" /></Link>
                </div>
                <div className="menuBar hidden md:block">
                  <div className="menuList flex gap-x-8">
                      <ul className='flex gap-x-3     [&>li] : text-white [&>li]:py-5'>
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
                      <button className='py-3 px-8 border-2 border-color:[#F4F6FC] rounded-[40px] text-white hidden lg:block' onClick={handleContactBtn}>Contact Us </button>
                  </div>
                </div>
                <div className="togoleMenu md:hidden relative">
                  {
                    menuBar ? 
                    <button onClick={handleShoowMenu} className='text-white'><FaBars /></button>
                    :
                    <button onClick={handleCloseMenu} className='text-white'><GrClose /></button>
                  }
                  {
                    showMenu &&
                    <div className="nevigator absolute w-[320px]  h-[300px]  right-0 z-9">
                        <div className="menuList flex gap-x-8">
                            <ul className='w-[100%] flex gap-x-3 flex-col justify-center     [&>li] : text-white [&>li] : text-center [&>li]:py-5 bg-[#1C1E53]'>
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
                  }
                </div>
             </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

