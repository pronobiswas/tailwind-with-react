import React from 'react'
import ProjectComponent from '../Components/HomeComponent/ProjectComponent'
import aboutUsImage01 from './Images/aboutUsImage01.png'
import aboutUsImage02 from './Images/aboutUsImage02.png'
import MiniCard from '../Components/MiniCard/MiniCard'
import { FaDotCircle } from "react-icons/fa";

const AboutUs = () => {
  
  return (
    <>
      <section id="aboutus" className='py-[36px]'>
        <div className="container">

          <div id="AboutUsFirstSection">
            <div className="container">
              <div className="wrpper px-5 xl:px-0 flex flex-col md:flex-row justify-between">
                <div className='w-full  md:w-[595px]'>
                  <h5 className='w-full'>About us</h5>
                  <h2 className='text-5xl font-bold mt-2 mb-8'>Our designs solve problems</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='w-full md:w-[547px] h-[336px] bg-red-800'>
                  <img src={aboutUsImage01} alt="png" />
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
            <div className="container">
              <img src={aboutUsImage02} alt="png" className='w-full'/>
            </div>
          </div>

          <div id="aboutThird" className='theProcess my-32'>
            <h2 className='text-5xl text-center mb-12'>The process we folow</h2>
            <div className="warpper flex gap-12">
              <MiniCard cardIcon={<FaDotCircle />} cardTitle={'Planning'} cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'}/>
              <MiniCard cardIcon={<FaDotCircle />} cardTitle={'Conception'} cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'}/>
              <MiniCard cardIcon={<FaDotCircle />} cardTitle={'Design'} cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'}/>
              <MiniCard cardIcon={<FaDotCircle />} cardTitle={'Development'} cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'}/>
            </div>
          </div>
          <div id="aboutFour" className='missionAndVison'>
            
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutUs
