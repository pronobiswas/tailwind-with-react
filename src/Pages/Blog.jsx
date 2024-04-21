import React from 'react'
import InquiryComponent from '../Components/HomeComponent/InquiryComponent'
import BlogCard from '../Components/BlogCard/BlogCard'

const Blog = () => {
  let image3 = '../public/blogCard1.png'
  let image2 = '../public/blogCard2.png'
  let image1 = '../public/blogCard3.png'
  return (
    <>
    <div className="container">
      <div className='flex flex-col sm:flex-row  px-4 gap-x-5 mb-9'>
        <BlogCard 
        blogthumbnil={image1}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={image2}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={image3}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
      </div>
    </div>
        <InquiryComponent/>
    </>
  )
}

export default Blog
