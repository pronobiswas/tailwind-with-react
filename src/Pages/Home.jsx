import React from 'react'
import BannerCompoent from '../Components/HomeComponent/BannerCompoent'
import WorkComponent from '../Components/HomeComponent/WorkComponent'
import ProjectComponent from '../Components/HomeComponent/ProjectComponent'
import Feature from '../Components/HomeComponent/Feature'
import ClintSays from '../Components/HomeComponent/ClintSays'


const Home = () => {
  return (
    <>
      <BannerCompoent/>
      <WorkComponent/>
      <ProjectComponent/>
      <Feature/>
      <ClintSays/>
    </>
  )
}

export default Home
