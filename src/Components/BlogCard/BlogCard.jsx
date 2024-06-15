import React from 'react'
import Anchor from '../AnchorComponent/Anchor'
import { Link } from 'react-router-dom'

const BlogCard = ({blogthumbnil , blogDate , blogCardTitle , BlogCardPara , href}) => {
  return (
    <>
      <div className='blogCard md:w-96 '>
         <div className="blogCardImg w-[100%] h-64 bg-red-700 mb-5">
            <img className='w-full h-full object-cover' src={blogthumbnil} alt="images" />
         </div>
         <span className='text-xs font-extralight'>{blogDate}</span>
         <h4 className='my-4 text-xl font-bold'> {blogCardTitle} </h4>
         <p className='mb-5 font-light'> {BlogCardPara} </p>
         <Link to="/readblog" className=' py-2  hover:text-blue-700 hover:tracking-[4px] transition duration-200 ease-linear'>View More <span>→</span></Link>
      </div>
    </>
  )
}

export default BlogCard
