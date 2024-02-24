import { ChevronRight } from '@mui/icons-material'
import React from 'react'

const Accountdtls = () => {
  return (
    <div className='bg-[#EDF0F4] w-full min-h-screen flex flex-col items-center  '>
      <div className='w-full h-[50px] bg-[#2B3148] flex justify-end '>
        <h2 className='text-white flex text-sm items-center px-4 '>Sign out</h2>

      </div>
      <div className='bg-transparent w-3/4 min-h-screen flex flex-col py-3 items-center gap-5'>
        <h1 className='flex  justify-center text-4xl font-bold'>Account Setup</h1>
        <p className='flex text-center '>Please fill in the below details so that we can setup an account for your organisation in our system and
          give you access to the Do-It-Yourself portal for listing your event.</p>
        
        <div className='flex  flex-col w-[85%]'>

          <div className='flex flex-col bg-[#FFFFFF] rounded-2xl '>
            <div className='bg-[#3e6df924] rounded-t-2xl '>
              <h1 className='text-xl font-medium '><ChevronRight /> Organization Details</h1>
            </div>
            <div className='flex flex-col px-5 py-7 gap-7'>
              <div className='relative w-1/2 '>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Full Name</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
              <div className='relative w-1/2 '>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Full Name</label>
                <textarea rows={3} className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
            </div>
          </div>


          <div className='flex flex-col  bg-[#FFFFFF] mt-5 rounded-2xl '>
            <div className='bg-[#3e6df924]  rounded-t-2xl '>
              <h1 className='text-xl font-medium '><ChevronRight />Contact Person Details</h1>
            </div>
            <div className='flex  px-5 py-7  items-center gap-4 justify-between'>
              <div className='relative w-1/3  '>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Full Name</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
              <div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Email</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
              <div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
            </div>
          </div>


          <div className='flex flex-col  bg-[#FFFFFF] mt-5 rounded-2xl '>
            <div className='bg-[#3e6df924]  rounded-t-2xl'>
              <h1 className='text-xl font-medium '><ChevronRight />Bank Details</h1>
            </div>
            <div className='flex gap-2 px-2  items-center my-7 w-full  '>
              <div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
              <div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
            </div>
            <div  className='flex gap-2 px-2 items-center my-7 w-full' >
              <div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div><div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div><div className='relative w-1/3'>
                <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Mobile</label>
                <input className='px-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Accountdtls
