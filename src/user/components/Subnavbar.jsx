import React from 'react'
import newImage from '../../assets/music.png'
import Comedy from '../../assets/com.png'
import wrksp from '../../assets/workshops.png'
import meetup from '../../assets/meetup.png'
import { Link } from 'react-router-dom'

const Subnavbar = () => {
  return (
    <div className='flex w-full min-h-[60px] p-4  shadow-md bg-white'>
      <div className='flex w-[30%] h-[100%] justify-evenly text-black'>
        <div className='flex flex-col items-center w-[20px] h-[20px] py-2 cursor-pointer hover:scale-110 transition-transform'>
          <img src={newImage} alt="" className='text-[#F82249]' />
          <p className='font-semibold text-zinc-700'>Music</p>
        </div>
        <div className='flex flex-col items-center w-[20px] h-[20px] py-2 cursor-pointer hover:scale-110 transition-transform'>
          <img src={Comedy} alt=""  />
          <p className='font-semibold '>Comedy</p>
        </div>
        <div className='flex flex-col items-center w-[20px] h-[20px] py-2 cursor-pointer hover:scale-110 transition-transform'>
          <img src={wrksp} alt=""  />
          <p className='font-semibold '>Workshops</p>
        </div>
        <div className='flex flex-col items-center w-[20px] h-[20px] py-2 cursor-pointer hover:scale-110 transition-transform'>
          <img src={meetup} alt=""    />
          <p className='font-semibold'>Meetups</p>
        </div>
     </div>
     <div className='w-[60%] min-h-[40px] flex justify-end items-center mr-10 gap-7 font-bold'>
      <Link to={'/homepage'}><h2 className='cursor-pointer'>ListYourShow</h2></Link>
      <h2 className='cursor-pointer'>Offers</h2>
      <h2 className='cursor-pointer'>Gifts Card</h2>

     </div>
    </div>
  )
}

export default Subnavbar;
