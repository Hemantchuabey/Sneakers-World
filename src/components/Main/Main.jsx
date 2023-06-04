import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Buttons from '../NavigationButton/Buttons'
import ProductSection from '../productSection/ProductSection'

const main = () => {
  return (
    <div>
         <Navbar></Navbar>
         <Slider></Slider>
         <Buttons></Buttons>
         <ProductSection></ProductSection>
    </div>
  )
}

export default main


