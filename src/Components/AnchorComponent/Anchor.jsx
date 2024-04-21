import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Anchor = ({myLink , linkText , className}) => {
  return ( 
    <>
      <a href={myLink} className=' inline-block relative text-blue-700'>  <span>{linkText}</span>
        <span className=' absolute  -right-7 top-1'>
          <FaArrowRightLong />
        </span>
      </a>
    </>
  )
}

export default Anchor
