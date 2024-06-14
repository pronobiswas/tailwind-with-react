import React from 'react'
import case1 from '../../public/case1.png'
import case2 from '../../public/case2.png'

const CaseStudies = () => {
  return (
    <>
    <div id="caseStudies" className='py-32 px-5 xl:px-0'>

      <div className="container">
        <h5>Web Page design and development</h5>
        <h2 className='text-5xl max-w-[540px] mt-3 mb-5'>Finsweet Design case studies</h2>
        <p className='max-w-[810px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
        </p>
        <div className="projectImage w-full max-w-[823px] px-14 py-20" >
            <div className="w-full  h-full ">
                <img src={case1} alt="" />
            </div>
        </div>
      </div>

      <div className="container">
        <div className="warpper  py-8 flex">

            <div className="clint flex flex-col w-full">
                <span>Clint</span>
                <span className='text-xl font-semibold mt-2'>facebook.com</span>
            </div>
            <div className="service flex flex-col w-full">
                <span>Service</span>
                <span className='text-xl font-semibold mt-2'>Product Design</span>
            </div>
            <div className="deliverable flex flex-col w-full">
                <span>Deliverable</span>
                <span className='text-xl font-semibold mt-2'>UI Scereens, UX Flow & Prototype</span>
            </div>

        </div>
      </div>

      <div className="container pt-24">
        <h2 className='text-5xl'>About the project</h2>
        <p className='mt-3 mb-4 max-w-[830px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className='list-disc list-inside [&>li]:leading-9'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
        </ul>
      </div>

      <div className="container flex justify-center">
        <div className="projectImage w-full max-w-[823px] h-[541px] px-14 py-20" >
            <div className="w-full h-full ">
                <img src={case2} alt="" />
            </div>
        </div>
      </div>

      <div className="container pt-24">
        <h2 className='text-5xl'>How Do we Do</h2>
        <p className='mt-3 mb-6 max-w-[830px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className='list-disc list-inside [&>li]:leading-9'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
        </ul>
      </div>

      <div className="container pt-5">
        <div className="warpper flex items-center py-10">
            <div className="box w-full"> <span className='text-xl font-bold text-blue-600 '>Keyword</span> </div>
            <div className="box w-full"><span>Design </span></div>
            <div className="box w-full"><span>UI/UX </span></div>
            <div className="box w-full"><span>Wireframing</span></div>
            <div className="box w-full"><span>Branding</span></div>
            <div className="box w-full"><span>Development</span></div>
            <div className="box w-full"><span>webflow</span></div>
        </div>
      </div>

      <div className="container pt-20">
        <h2 className='text-5xl text-center max-w-[580px] mx-auto'>Let's build something great together</h2>
        <p className='max-w-[570px] mx-auto text-center mt-5 mb-8'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        <div className="flex justify-center">
            <button className='bg-yellow-300 py-3 px-12 rounded-full'>Contact Us</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default CaseStudies
