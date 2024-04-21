import React from 'react'
import Anchor from '../AnchorComponent/Anchor'

const InquiryComponent = () => {
  return (
    <>
      <section id="inquiry">
        <div className="container">
            <div className="inquiryWarpper flex flex-col lg:flex-row">
                <div className='w-[100%] lg:w-[624px] p-10 md:p-24  bg-cover bg-inquriBG bg-[#0205685c] bg-blend-multiply text-white'>
                    <div >
                        <h2 className='text-4xl md:text-5xl font-bold mb-8'>Building stellar websites for early startups</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                        </p>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[624px] bg-RoyalBlue p-10 md:p-24'>
                    <div className=' text-white'>
                        <h3 className='text-3xl mb-4'>Send inquiry</h3>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form id='InqueariForm' className='flex flex-col gap-y-4 &>[input]:bg-red-500'>
                            <input type="text" placeholder='Your Name' />
                            <input type="mail" placeholder='Email' />
                            <input type="text" placeholder='Paste your Figma design URL'/>
                            <button className='block bg-yellow-700 py-3 rounded-xl	'>
                              Send an inquiry
                            </button>
                            <Anchor linkText={'Get in a touch'} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default InquiryComponent
