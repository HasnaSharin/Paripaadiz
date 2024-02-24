import React from 'react'
import Banner from '../components/Banner'
import { Email, Instagram, Telegram, ThumbUpSharp, Twitter } from '@mui/icons-material'


const Showpage = () => {
  return (
    <div className='w-full  flex flex-col items-center bg-gray-100'>
      <Banner/>
      <div className='min-h-[150px] w-[70%] flex border-2 border-black/5 shadow-md px-5 flex-col bg-white'>
        <div className='h-[90px] w-full  flex justify-between  items-center border-b-2 border-black/10'>
          <div className='flex flex-col justify-center h-full w-[70%]'>
            <h1 className='text-2xl font-bold'>Hello Sachin</h1>
            <p className=''>Welcome</p>
          </div>
          <button className='py-5 px-8 rounded-md font-bold text-white hover:bg-[#14b8a599] bg-[#14b8a6]'>Book Now</button>
        </div>
        <div className=''>
        </div>
      </div>
      <div className='w-[70%]   mt-8 flex gap-5'>
        <div className='w-[20%] shadow-md  h-[120px] bg-white py-10 pl-5 space-y-2 space-x-2' >
          <h1 className='text-md font-bold'>Share this Event</h1>
          <div className='flex gap-3'>
            <div className='w-6'><Email /></div>
            <div className='text-pink-500 w-6'>
              <Instagram /></div>
          </div>
        </div>
        <div className='w-[50%]  flex flex-col gap-5 '>
          <div className='w-full h-[150px] shadow-md bg-white'>
            <h1 className='text-md font-semibold m-3 '>Click on Intrested to stay updated about this event</h1>
            <div className='w-full h-[100px] flex justify-between items-center px-5'>
              <div className=''>
                <div className='space-x-2 flex items-center'><ThumbUpSharp /><span className='text-xl'>27</span></div>
                <p>people have shown intrested recently</p>
              </div>
              <div className='border-2 rounded-sm border-black/20 p-2'>
                <button>Intrested?</button>
              </div>
            </div>
            </div>
          <div className='w-full min-h-[250px] shadow-md bg-white px-5'>
            <div className='border-b-2 border-black/10'>
            <h1 className='text-xl font-medium'>Why should you attend?</h1>
            <p className='text-6xl rounded-full'>.</p>
            <p  className='text-6xl rounded-full'>.</p>
            <p  className='text-6xl rounded-full'>.</p>
            </div>
            <div>
              <h2>About</h2>
              <p></p>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <h1>You may also like</h1>

            </div>
          </div>
        </div>
        <div className='w-[30%] bg-white shadow-md flex justify-center pt-5'>
          <h1 className='text-xl font-bold'>Location</h1>
        </div>
      </div>
    </div>
  )
}

export default Showpage
