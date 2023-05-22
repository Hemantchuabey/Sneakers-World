import { Button } from '@material-tailwind/react'
import React from 'react'
import nike3 from '../../assets/image/nike3.jpg'
import { filteredProducts } from '../../features/Slices/productSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Buttons = () => {
    const buttons = ['Nike','Adidas','Puma','Reebok','Jordan', ]
    const dispatch = useDispatch()
  return (
    <div>
        <div className='flex items-center justify-center py-8'>
            {buttons.map((button,index) => {
                return (
                    <div key={index} className='mr-8'>
                        <Link to={"/filteredProduct/" + button}>
                            <Button color="gray" size='md' variant="outlined" ripple={true} className='hover : bg-gray-700 hover:scale-105 duration-300 ease-in-out' 
                            onClick={() => dispatch(filteredProducts(button))}
                            >{button}</Button>
                            </Link>
                    </div>
                )
            })}
        </div>
        <div className='bg-gray-400 p-2 w-[55%] mx-auto rounded-md'>
            <h3 className='text-gray-800 text-center text-lg font-inter font-bold tracking-normal leading-none hover:scale-105 duration-300 ease-in-out'>SALE Upto 80%</h3>
        </div>
        <div className='flex jus py-6 item-center'>
            <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-500 mx-auto cursor-pointer hover:scale-105 duration-300 ease-in-out' src={nike3} alt='offerOnNike'></img>
        </div>
    </div>
  )
}

export default Buttons