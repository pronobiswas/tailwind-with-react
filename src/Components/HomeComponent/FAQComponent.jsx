import React, { useState } from 'react'
import Accordion from './Accordian/Accordion'
import { GoPlus } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

const FAQComponent = () => {
  let [showAns , setShowAns] = useState(false);
  const accordionData = [
    {
      title: 'Section 1',
      index: "01",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      index: "02",
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      index: "02",
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  
  let handleShowAns =()=>{
    setShowAns(true)
  }
  let closeAns = ()=>{
    setShowAns(false)
  }
  return (
    
    <>
    
      <section id="FAQ" className='py-9'>
        <div className="container">
            <div className="faqWarpper px-5 flex flex-col md:flex-row gap-8  xl:px-0">
                <div className="relative faqTHeading w-80">
                     <h3 className='text-3xl mb-4'>Frequently asked a question</h3>
                     <a href="#" className='text-RoyalBlue'>Contact Us for more info</a>
                </div>
                <div className="faqContent  lg:w-[846px]">
                      <div  className='accordian md:w-[400px] lg:w-[664px] xl:w-[800px] relative flex gap-x-4'>

                        <div className="numBOX text-RoyalBlue text-xl font-bold"><span>01</span></div>
                        <div>
                          <h5 onClick={handleShowAns} className='text-xl font-semibold mb-3'>How much time does it take?</h5>
                          {showAns &&
                            <p className='text-Darkblue'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                          }
                        </div>
                        <div className="icon absolute right-6 top-1">
                          {
                            showAns ? 
                            <span onClick={closeAns}><IoCloseSharp /></span>
                            :
                            <span onClick={handleShowAns}><GoPlus /></span>
                          }
                        </div>

                      </div>
                    
                      <div className="accordion">
                        {accordionData.map(({ title, content,index }) => (
                          <Accordion title={title} content={content}  index={index}/>
                        ))}
                      </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default FAQComponent
