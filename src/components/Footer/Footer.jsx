import React from 'react'
import logo from '../../assets/image/logo.png'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='p-4'>
      <div className='flex items-center justify-center'>
          <hr className='h-px w-4/5 bg-gray-400 outline-none border-none'/>
      </div>
      <div className='flex items-center justify-around mt-6'>
        <div>
          <img className='w-32 h-8  md:w-52 md:h-10' src={logo} alt='logo'></img>
        </div>
        <p className='text-black text-[12px] md:text-[1rem] font-inter no-underline normal-case'>
          Copyright {year} page by Hemant 
        </p>
      </div>
    </div>
  )
}

export default Footer