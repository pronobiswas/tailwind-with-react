import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";


const Accordion = ({ title, content,index }) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="accordion-item hover:bg-slate-200">

        <div className="accordion-title flex justify-between mb-5" onClick={() => setIsActive(!isActive)}>  
            <div className='flex gap-6 lg:gap-12'>
               <div className="numBOX text-RoyalBlue text-xl">{index}</div> 
               <div>
                  <h5 className='text-xl  mb-4'>{title}</h5>
                  {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
            <div className='text-Darkblue'>{isActive ? <IoCloseSharp /> : <GoPlus />}</div>
        </div>
        
      </div>
    </>
  )
}

export default Accordion
