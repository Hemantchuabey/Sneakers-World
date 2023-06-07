import React from 'react'
import { Alert } from '@material-tailwind/react'

const Error = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center items-center'>
        <div className='w-[96]'>
            <Alert color='red' className='text-xl font-inter font-bold '>Sorry! No result found! Try clearing the filter...😊</Alert>
        </div>
    </div>
  )
}

export default Error