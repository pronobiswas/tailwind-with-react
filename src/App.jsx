import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";

import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import FAQ from './Pages/FAQ'
import Featurers from './Pages/Featurers'
import Pricing from './Pages/Pricing'
import RootLayout from './Components/rootLayout/RootLayout';
import Mywork from './Pages/Mywork';
import CaseStudies from './Pages/CaseStudies';
import Contact from './Pages/Contact';
import ReadBlog from './Pages/ReadBlog';


function App() {
  
  let router  = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route element={<RootLayout/>}> 
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/Featurers' element={<Featurers/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/mywork' element={<Mywork/>}/>
            <Route path='/case' element={<CaseStudies/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/readblog' element={<ReadBlog/>}/>
          </Route>
      </>
    )
  )

  return (
    <>
        <RouterProvider router={router} />
        
    </>
  )
}

export default App
