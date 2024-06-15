import React from 'react'
import ProjectComponent from '../Components/HomeComponent/ProjectComponent'
import aboutUsImage01 from './Images/aboutUsImage01.png'
import aboutUsImage02 from './Images/aboutUsImage02.png'
import MiniCard from '../Components/MiniCard/MiniCard'
import { FaDotCircle } from "react-icons/fa";
import misionPic1 from '../../public/misionPic1.png'
import misionPic2 from '../../public/misionPic2.png'
import { FaPencilRuler } from "react-icons/fa";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import logoOne from '../../public/logoThree.png'
import logoTwo from '../../public/logoTwo.png'
import logoThree from '../../public/logoThree.png'
import logoFour from '../../public/logoFour.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStudiovinari } from "react-icons/fa";

const AboutUs = () => {
  
  return (
    <>
      <section id="aboutus" className=' px-5 lg:px-0'>
        <div className="container">

          <div id="AboutUsFirstSection">
            <div className="container">
              <div className="wrpper px-5 xl:px-0 pt-20 flex flex-col md:flex-row justify-between">
                <div className='w-full  md:w-[595px]'>
                  <h5 className='w-full '>About us</h5>
                  <h2 className='text-5xl font-bold mt-2 mb-8'>Our designs solve problems</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='w-full md:w-[547px] h-[336px]'>
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

          <div id="aboutFour" className='missionAndVison '>

            <div className="flex mb-16 gap-12">
              <div className='w-full'>
                <h5>Our Mission </h5>
                <h2 className='text-4xl font-semibold p-4'>Inspire ,Inovate , share</h2>
                <p className='max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='w-full '>
                <img src={misionPic1} alt="" />
              </div>
            </div>

            <div className="flex gap-12">
              <div className='w-full'>
                <img src={misionPic2} alt="" />
              </div>
              <div className='w-full'>
                <h5>Our Vission </h5>
                <h2 className='text-4xl font-semibold p-4'>Inspire</h2>
                <p className='max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

          </div>

          <div id="aboutFive" className='mt-32'>

            <h2 className='text-4xl font-semibold max-w-[439px] text-center mx-auto mb-12'>The benefits of working with us</h2>
            <div className="cardWArpper flex gap-8">

              <div className="card w-full max-w-[380px] bg-slate-400 px-9 py-12 rounded-xl">
                <span className='icon text-3xl text-blue-900'>
                  <FaPencilRuler />
                </span>
                <h4 className='text-xl font-semibold mt-8 mb-4'>
                  Customize with ease
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </p>
              </div>

              <div className="card w-full max-w-[380px] bg-slate-400 px-9 py-12 rounded-xl">
                <span className='icon text-3xl text-blue-900'>
                  <FaArrowsTurnToDots />
                </span>
                <h4 className='text-xl font-semibold mt-8 mb-4'>
                  Perfectly Responsive
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </p>
              </div>

              <div className="card w-full max-w-[380px] bg-slate-400 px-9 py-12 rounded-xl">
                <span className='icon text-3xl text-blue-900'>
                  <FaUsers />
                </span>
                <h4 className='text-xl font-semibold mt-8 mb-4'>
                  Perfectly Responsive
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </p>
              </div>

            </div>

            <div className="flex justify-between pt-20">
              <div className='flex flex-col'>
                <span className='text-3xl font-bold'>100.000+</span>
                <span>Our Users</span>
              </div>
              <img src={logoOne} alt="png" />
              <img src={logoTwo} alt="png" />
              <img src={logoThree} alt="png" />
              <img src={logoFour} alt="png" />
            </div>

          </div>

          <div id="aboutSix" className='pt-10 bg-blue-100 mt-20'>
            <div className="container ourTeam">
              <h2 className='text-4xl font-bold text-center mt-5'>Meet Our Team</h2>
              <div className="warpper flex items-center justify-center">

                <div className="member group transition duration-200 ease-out w-[256px] h-[300px] flex flex-col items-center text-center gap-y-4 bg-white rounded-xl">

                  <div className="picture mt-12 w-[168px] h-[168px] bg-blue-500 rounded-full relative group">
                    <div className="profileImgdfa hidden  absulate w-full h-full rounded-full group-hover:block">

                      <div className="mt-6 group-hover:mt-0 transition duration-200 ease-out">
                        <div className="pt-32 flex items-center justify-center gap-x-3 text-white">
                          <span><FaFacebookSquare /></span>
                          <span><FaTwitter /></span>
                          <span><FaStudiovinari /></span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div>
                    <h5><strong>Pronob Biswas</strong></h5>
                    <em>worker</em>
                  </div>

                </div>
                
                <div className="member group transition duration-200 ease-out w-[256px] h-[300px] flex flex-col items-center text-center gap-y-4 bg-white rounded-xl">

                  <div className="picture mt-12 w-[168px] h-[168px] bg-blue-500 rounded-full relative group">
                    <div className="profileImgdfa hidden  absulate w-full h-full rounded-full group-hover:block">

                      <div className="mt-6 group-hover:mt-0 transition duration-200 ease-out">
                        <div className="pt-32 flex items-center justify-center gap-x-3 text-white">
                          <span><FaFacebookSquare /></span>
                          <span><FaTwitter /></span>
                          <span><FaStudiovinari /></span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div>
                    <h5><strong>Pronob Biswas</strong></h5>
                    <em>worker</em>
                  </div>

                </div>

                <div className="member group transition duration-200 ease-out w-[256px] h-[300px] flex flex-col items-center text-center gap-y-4 bg-white rounded-xl">

                  <div className="picture mt-12 w-[168px] h-[168px] bg-blue-500 rounded-full relative group">
                    <div className="profileImgdfa hidden  absulate w-full h-full rounded-full group-hover:block">

                      <div className="mt-6 group-hover:mt-0 transition duration-200 ease-out">
                        <div className="pt-32 flex items-center justify-center gap-x-3 text-white">
                          <span><FaFacebookSquare /></span>
                          <span><FaTwitter /></span>
                          <span><FaStudiovinari /></span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div>
                    <h5><strong>Pronob Biswas</strong></h5>
                    <em>worker</em>
                  </div>

                </div>

                <div className="member group transition duration-200 ease-out w-[256px] h-[300px] flex flex-col items-center text-center gap-y-4 bg-white rounded-xl">

                  <div className="picture mt-12 w-[168px] h-[168px] bg-blue-500 rounded-full relative group">
                    <div className="profileImgdfa hidden  absulate w-full h-full rounded-full group-hover:block">

                      <div className="mt-6 group-hover:mt-0 transition duration-200 ease-out">
                        <div className="pt-32 flex items-center justify-center gap-x-3 text-white">
                          <span><FaFacebookSquare /></span>
                          <span><FaTwitter /></span>
                          <span><FaStudiovinari /></span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div>
                    <h5><strong>Pronob Biswas</strong></h5>
                    <em>worker</em>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutUs
