import React from 'react'

const Bookingpage= () => {
  return (




    <div className='w-full h-[100vh] bg-white flex flex-col  items-center p-12 relative'>

      <div className='w-[600px] min-h-[300px] flex flex-col bg-white text-black rounded-xl absolute shadow-lg p-5 border-2 gap-5 '>


        <form action="" className='flex flex-col gap-8  text-black'>
          <p className='text-xl '>Please Provide details of participants/attendees</p>
          <h1 className=' flex  pl-4 font-bold text-2xl '>Registration</h1>

          <div className='relative w-full '>
            <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2 '>Enter your Name</label>
            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
          </div>
          <div className='relative w-full '>
            <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Enter your Email</label>
            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent' type="text" />
          </div>
          
          <div className='relative w-full '>
            <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Phone Number</label>
            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
          </div>
          <div className='flex items-center justify-center'>
            <button className='hover:bg-black border-2 px-5 py-1 w-1/2 rounded-md bg-white hover:text-white'>Submit</button>
          </div>
          </form>
          </div>
    </div>
  )
}

export default Bookingpage;
