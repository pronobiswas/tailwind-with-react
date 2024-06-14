import React from 'react'
import Anchor from '../AnchorComponent/Anchor'

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
         <a href="/readblog">view more</a>
      </div>
    </>
  )
}

export default BlogCard
