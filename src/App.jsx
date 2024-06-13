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


function App() {
  
  let router  = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route element={<RootLayout/>}> 
            <Route path='/' element={<Home/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/Featurers' element={<Featurers/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/mywork' element={<Mywork/>}/>
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
