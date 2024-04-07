import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
            <div className="menuWarpper py-[32] bg-[red] border-solid border-2 border-sky-500 rounded-2xl   flex justify-between">
                <div className="logo">
                    logo
                </div>
                <div className="menuList flex">
                    <ul className='flex divide-x-2 '>
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
                    <button className='py-2 px-5 '>Contact Us </button>
                </div>
                
             </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

