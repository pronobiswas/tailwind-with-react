import React from 'react'
import blogImagebanner from '../../public/blogImagebanner.png'
import readBlogImage from '../../public/readBlogImage.jpg'

const ReadBlog = () => {
  return (
    <>
    <div id="readblog" className='px-5 lg:px-0'>

        <div className="container  pt-20">
            <div className="blogBanner">

                <div className="bannerHead w-full max-w-[950px] m-auto text-center">
                    <h1 className='text-5xl font-bold'>
                        A UX Case Study on Creating a Studious Environment for Students
                    </h1>
                    <p className='pt-4 pb-8'>
                        <i>Andrew Jonson</i>Posted on 27th January 2021
                    </p>
                    <img src={blogImagebanner} alt="" className='w-full h-full'/>
                </div>
                
               

            </div>

        </div>

            
        <div className="container">
            <div className="warpper max-w-[800px] mx-auto py-14">
            <h2 className='text-4xl mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className='text-4xl my-12'>
                    Ut enim ad minim veniam, quis nostrud.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className='list list-disc list-inside py-14 [&>li]: leading-10'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <img src={readBlogImage} alt="" />
                <h2 className='text-4xl mt-14 mb-6'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        
    </div>
        
    </>
  )
}

export default ReadBlog
