import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <div>
        <div className=' bg-gray-400 p-2 w-[80%] mx-auto rounded-md mt-8 md:mt-0'>
            <h2 className='text-gray-800  text-center font-inter font-bold tracking-normal leading-none text-base justify-items-center md:text-lg hover:scale-105 duration-300 ease-in-out'>Running Shoes Sale 30%</h2>
        </div>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-4 mx-auto '>
          {storeData.slice(0,6).map((product,index) => {
            return(
              <div key={index} >
                  <ProductSectionItem id = {product.id}
  img = {product.img}
  name={product.name}
  text={product.text}
  size ={product.size}
  price ={product.price}
  color ={product.color}
  totalPrice={product.totalPrice}></ProductSectionItem>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default ProductSection