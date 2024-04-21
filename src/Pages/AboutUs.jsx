import React from 'react'
import ProjectComponent from '../Components/HomeComponent/ProjectComponent'

const AboutUs = () => {
  
  return (
    <>
      <section id="aboutus">
        
          <div id="AboutUsFirstSection">
            <div className="container">
              <div className="wrpper px-5 xl:px-0 flex flex-col md:flex-row justify-between">
                <div className='w-full  md:w-[595px]'>
                  <h5 className='w-full'>About us</h5>
                  <h2 className='text-5xl font-bold mt-2 mb-8'>Our designs solve problems</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='w-full md:w-[547px] h-[336px] bg-red-800'>
                  <img src="" alt="png" />
                </div>
              </div>
            </div>
          </div>
          <div id="AboutSecond">
            <div className="container px-5 xl:px-0">
              <div className='p-20'>
                <h5>Who we are</h5>
                <div className='flex gap-14'> 
                  <div>
                    <h3 className='text-3xl font-bold mb-4'>Goal focussed</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-3xl font-bold mb-4'>Continuous improvement</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-60 bg-slate-500">

            </div>
          </div>
      </section>
    </>
  )
}

export default AboutUs
