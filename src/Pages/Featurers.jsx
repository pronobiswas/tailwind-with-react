import React from 'react'
import Anchor from '../Components/AnchorComponent/Anchor'
import MiniCard from '../Components/MiniCard/MiniCard'
import { FaUsers } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { BsWechat } from "react-icons/bs";
import featureBanner from '../../public/featureBanner.svg'
import logoFirst from '../../public/logoFirsts.png'
import logoOne from '../../public/logoThree.png'
import logoTwo from '../../public/logoTwo.png'
import logoThree from '../../public/logoThree.png'
import logoFour from '../../public/logoFour.png'
import { FaPencilRuler } from "react-icons/fa";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import benImage1 from '../../public/benImage1.png'
import  FAQ from '../Components/HomeComponent/FAQComponent'
import benImage2 from '../../public/benImage2.png'
import benImage3 from '../../public/benImage3.png'
import benImage4 from '../../public/benImage4.png'




const Featurers = () => {
  return (
    <>
      <section id="feature" >

        {/* ==========feature Banner============ */}
        <div className="featureWarpper  bg-[#1C1E53] pb-32 pt-8 lg:pt-32 sm:px-5 lg-px:0 flex flex-col md:flex-row items-center sm:justify-center gap-14">
          <div className="flex items-center text-white ">
            <div className="bannertext w-full max-w-[470px]">
              <h1 className='text-6xl sm:text-5xl lg:text-6xl xl:text:7xl font-bold text-white pb-7'>All the features you need</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='bg-yellow-500 py-5 px-14 rounded-full text-xl mt-12 hover:bg-transparent border border-transparent hover:border hover:border-white'>view pricing</button>
            </div>
          </div>
          <div className='w-full max-w-[640px]'>
            <img src={featureBanner} alt="png" />
          </div>
        </div> 
        {/* ==========feature Banner============ */}

        {/* ===========Icvon userlogo============== */}
        <div className="container px-5 lg:px-0 py-20 " >

            <div className="flex  items-center sm:gap-x-5 lg:gap-x-20 ">
              <div className='flex flex-col'>
                <span className='text-3xl font-bold'>100.000+</span>
                <span>Our Users</span>
              </div>
              <div className="w-full flex justify-between">  

                <div className="box max-w-[160px]">
                  <img src={logoFirst} alt="png" />
                </div>
                <div className="box max-w-[160px]">
                  <img src={logoTwo} alt="png" />
                </div>
                <div className="box max-w-[160px]">
                  <img src={logoThree} alt="png" />
                </div>
                <div className="box max-w-[160px]">
                  <img src={logoFour} alt="png" />
                </div>

              </div>
            </div>
        </div>
        {/* ===========Icvon userlogo============== */}
        
        {/* <div className="container">
          <div>
            <div className="container">

            </div>
            <Anchor linkText={"View More"}/>
            <div className="cardWarpper flex gap-x-5">
              <MiniCard 
                cardIcon={<FaCheckCircle />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<TbDiscountCheckFilled />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<BsWechat />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<FaUsers />} 
                cardTitle={'lorem5'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
            </div>

          </div>
        </div> */}
        {/* =========benefit of working=========== */}
        <div className="container">
            <h2 className='text-4xl font-semibold max-w-[439px] text-center mx-auto mb-12'>The benefits of working with us</h2>
            <div className="cardWArpper flex gap-8 items-center flex-col md:flex-row">

              <div className="card w-full max-w-[380px]  px-9 py-12 rounded-xl">
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

              <div className="card w-full max-w-[380px]  px-9 py-12 rounded-xl">
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

              <div className="card w-full max-w-[380px]  px-9 py-12 rounded-xl">
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
        </div>


        {/* ============row============= */}
        <div className="myrow container py-12 px-5 lg:px-0">
          <div className="warpper  flex flex-col justify-between items-center gap-12 md:flex-row ">

            <div className="text w-full max-w-[500px] order-1 md:-order-1">
              <h5 className='text-xl'>Use Client-first</h5>
              <h2 className='text-4xl font-bold'> Top agencies and freelancers around the world use <br/>Client-first </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="imgs">
              <img src={benImage1} alt="png" className='w-full max-w-[575px]'/>
            </div>

          </div>
        </div>

        {/* ============row============= */}
        <div className="myrow container py-12 px-5 lg:px-0">
          <div className="warpper flex  flex-col justify-between items-center gap-12 md:flex-row ">

            <div className="imgs">
              <img src={benImage2} alt="png" className='w-full max-w-[575px]'/>
            </div>

            <div className="text w-full max-w-[500px]">
              <h5 className='text-xl'>Use Client-first</h5>
              <h2 className='text-4xl font-bold'> Top agencies and freelancers around the world use <br/>Client-first </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

          </div>
        </div>

        {/* ============row============= */}
        <div className="myrow container py-12 px-5 lg:px-0">
          <div className="warpper  flex flex-col justify-between items-center gap-12 md:flex-row ">

            <div className="text w-full max-w-[500px] order-1 md:-order-1">
              <h5 className='text-xl'>Use Client-first</h5>
              <h2 className='text-4xl font-bold'> Top agencies and freelancers around the world use <br/>Client-first </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="imgs">
              <img src={benImage3} alt="png" className='w-full max-w-[575px]'/>
            </div>

          </div>
        </div>

        {/* ============row============= */}
        <div className="myrow container py-12 px-5 lg:px-0">
          <div className="warpper flex flex-col justify-between items-center gap-12 md:flex-row ">

            <div className="imgs">
              <img src={benImage4} alt="png" className='w-full max-w-[575px]'/>
            </div>

            <div className="text w-full max-w-[500px]">
              <h5 className='text-xl'>Use Client-first</h5>
              <h2 className='text-4xl font-bold'> Top agencies and freelancers around the world use <br/>Client-first </h2>
              <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

          </div>
        </div>

        <FAQ/>

      </section>
    </>
  )
}

export default Featurers
