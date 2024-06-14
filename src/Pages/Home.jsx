import React from 'react'
import BannerCompoent from '../Components/HomeComponent/BannerCompoent'
import WorkComponent from '../Components/HomeComponent/WorkComponent'
import ProjectComponent from '../Components/HomeComponent/ProjectComponent'
import Feature from '../Components/HomeComponent/Feature'
import ClintSays from '../Components/HomeComponent/ClintSays'
import FAQComponent from '../Components/HomeComponent/FAQComponent'
import InquiryComponent from '../Components/HomeComponent/InquiryComponent'
import BlogCard from '../Components/BlogCard/BlogCard'



const Home = () => {
  let image3 = '../public/blogCard1.png'
  let image2 = '../public/blogCard2.png'
  let image1 = '../public/blogCard3.png'
  return (
    
    <>
      <BannerCompoent/>
      <WorkComponent/>
      <ProjectComponent/>
      <Feature/>
      <ClintSays/>
      <FAQComponent/>
      <InquiryComponent/>
      <section id="homeblog" className='py-24'>
      <div className="container">
        <h2 className='text-4xl font-bold mb-16'>Our Blog</h2>
        <div className='flex flex-col sm:flex-row  px-4 gap-x-5 gap-y-14'>
          <BlogCard 
          blogthumbnil={image1}
          blogDate ={"19 Jan 2022"} 
          blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
          BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} 
          href={'/mywork'}/>
          <BlogCard 
          blogthumbnil={image2}
          blogDate ={"19 Jan 2022"} 
          blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
          BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
          href={'/mywork'} />
          <BlogCard 
          blogthumbnil={image3}
          blogDate ={"19 Jan 2022"} 
          blogCardTitle= {'How one Webflow user grew his single person consultancy from $0-100K in 14 months'} 
          BlogCardPara={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
          href={'/mywork'} />
        </div>
      </div>
      </section>

    </>
  )
}

export default Home
