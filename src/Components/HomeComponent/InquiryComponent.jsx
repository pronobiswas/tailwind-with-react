import React from 'react'

const InquiryComponent = () => {
  return (
    <>
      <section id="inquiry">
        <div className="container">
            <div className="inquiryWarpper flex">
                <div className='w-[624px]  p-24  bg-cover bg-inquriBG bg-[#0205685c] bg-blend-multiply text-white'>
                    <div >
                        <h2 className='text-5xl font-bold mb-8'>Building stellar websites for early startups</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                        </p>
                    </div>
                </div>
                <div className='w-[624px] bg-RoyalBlue p-24'>
                    <div className='pb-24 text-white'>
                        <h3 className='text-3xl'>Send inquiry</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form className='flex flex-col gap-y-4 &>[input]:p-5'>
                            <input type="text" placeholder='Your Name' />
                            <input type="mail" placeholder='Email' />
                            <input type="text" placeholder='Paste your Figma design URL'/>
                            <button>Send an inquiry</button>
                            <a href="#">Get in touch with us</a>
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
