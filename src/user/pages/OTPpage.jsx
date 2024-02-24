import React from 'react'

const OTPpage= () => {
  return (




    <div className='w-full h-[100vh] bg-white flex flex-col justify-center items-center p-12 relative'>

      <div className='w-[400px] min-h-[40%] flex flex-col justify-center  bg-white text-black rounded-xl absolute shadow-lg p-5 border-2 gap-5 '>


        <form action="" className='flex flex-col gap-8  text-black'>
          <h1 className=' flex items-center justify-center  text-2xl '>Enter OTP Code</h1>

          
          <div className='relative w-full '>
          <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Enter OTP</label>

            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
          </div>
         
          


          <div className='flex items-center justify-center'>
            <button className='hover:bg-black border-2 px-5 py-1 w-1/2 rounded-md bg-white hover:text-white'>Verify</button>
          </div>
          </form>

          
          
          


       
      </div>
    </div>
  )
}

export default OTPpage;
