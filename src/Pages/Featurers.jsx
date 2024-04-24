import React from 'react'
import Anchor from '../Components/AnchorComponent/Anchor'
import MiniCard from '../Components/MiniCard/MiniCard'
import { FaUsers } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { BsWechat } from "react-icons/bs";

const Featurers = () => {
  return (
    <>
      <section id="feature">
        <div className="container">
          <div>
            <div className="container">

            </div>
            <Anchor linkText={"View More"}/>
            <div className="cardWarpper flex gap-x-5">
              <MiniCard 
                cardIcon={<FaCheckCircle />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<TbDiscountCheckFilled />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<BsWechat />} 
                cardTitle={'lorem2'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
              <MiniCard 
                cardIcon={<FaUsers />} 
                cardTitle={'lorem5'} 
                cardText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} 
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Featurers
