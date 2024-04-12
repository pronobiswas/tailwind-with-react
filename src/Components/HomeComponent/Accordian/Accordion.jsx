import React, { useState } from 'react'


const Accordion = ({ title, content,index }) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="accordion-item">

        <div className="accordion-title flex justify-between" onClick={() => setIsActive(!isActive)}>  
            <div className='flex gap-6'>
               <div>{index}</div> 
               <div>
                  <h3>{title}</h3>
                  {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
            <div>{isActive ? '-' : '+'}</div>
        </div>
        
      </div>
    </>
  )
}

export default Accordion
