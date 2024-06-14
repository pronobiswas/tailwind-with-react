import React from 'react'
import InquiryComponent from '../Components/HomeComponent/InquiryComponent'
import BlogCard from '../Components/BlogCard/BlogCard'
import teamPic1 from '../../public/teamPic1.png'
import teamPic2 from '../../public/teamPic2.png'
import teamPic3 from '../../public/teamPic3.png'
import teamPic4 from '../../public/teamPic4.png'
import teamPic5 from '../../public/teamPic5.png'
import teamPic6 from '../../public/teamPic6.png'
import blogImagebanner from '../../public/blogImagebanner.png'

const Blog = () => {
  
  return (
    <>

    <div className="container py-32 pt-20">
      <div className="blogBanner">

        <div className="bannerHeade w-full max-w-[950px] m-auto text-center">
          <h1 className='text-5xl font-bold'>
            A UX Case Study on Creating a Studious Environment for Students
          </h1>
          <p className='pt-4 pb-8'>
            <i>Andrew Jonson</i>Posted on 27th January 2021
          </p>
        </div>
        <div className="blogBannerImg w-full h-[477px] bg-slate-400">
          <img src={blogImagebanner} alt="" className='w-full h-full'/>
        </div>
        <p className='text-center w-full max-w-[700px] mx-auto mt-12 mb-8'>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
        </p>
        <p className='text-center text-blue-800'><a href="#">read more</a></p>

      </div>
    </div>



    <div className="container">
      <h2 className='text-4xl font-bold text-center mb-12'>Our Blog</h2>
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 grid-flow-row justify-items-center gap-y-14 mb-32'>
        <BlogCard 
        blogthumbnil={teamPic1}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={teamPic2}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={teamPic3}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={teamPic4}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={teamPic5}
        blogDate ={"19 Jan 2022"} 
        blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
        BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
        <BlogCard 
        blogthumbnil={teamPic6}
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
