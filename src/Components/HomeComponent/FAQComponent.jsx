import React, { useState } from 'react'
import Accordion from './Accordian/Accordion'
import { GoPlus } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import Anchor from '../AnchorComponent/Anchor';

const FAQComponent = () => {
  let [showAns , setShowAns] = useState(false);
  const accordionData = [
    {
      index: "01",
      title: 'How much time does it take?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      index: "02",
      title: 'What is your class naming convention?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      index: "03",
      title: 'How do you communicate?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      index: "04",
      title: 'I have a bigger project. Can you handle it?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      index: "05",
      title: 'What is your class naming convention?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  
  let handleShowAns =()=>{
    setShowAns(!showAns)
  }
  let closeAns = ()=>{
    setShowAns(false)
  }
  return (
    
    <>
    
      <section id="FAQ" className='py-28'>
        <div className="container">
            <div className="faqWarpper px-5 flex flex-col md:flex-row gap-8  xl:px-0">
                <div className="faqTHeading w-80">
                     <h3 className='text-3xl mb-4'>Frequently asked a question</h3>
                     <a href="/contact" className='text-RoyalBlue'>Contact Us for more info</a><br />
                </div>
                <div className="accordion md:w-[400px] lg:w-[664px] xl:w-[800px]">
                        {accordionData.map(({ title, content,index }) => (
                          <Accordion title={title} content={content}  index={index}/>
                        ))}
                </div>
            </div>
        </div>
      </section>
                {/* <div className="faqContent lg:w-[846px]">
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
                    

                </div> */}
    </>
  )
}

export default FAQComponent
