import { Google, LinkedIn } from '@mui/icons-material';
import React from 'react'

const Loginpage = () => {
  return (




    <div className='w-full h-[100vh] bg-white flex flex-col justify-center items-center p-12 relative'>

      <div className='w-[400px] min-h-[50%] flex flex-col bg-white text-black rounded-xl absolute shadow-lg p-5 border-2 gap-5 '>


        <form action="" className='flex flex-col gap-8  text-black'>
          <h1 className=' flex items-center justify-center  text-2xl '>Login</h1>

          
          <div className='relative w-full '>
            <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Enter your Email</label>
            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
          </div>
          <div className='relative w-full '>
            <label htmlFor="" className='absolute -top-3 left-3 text-sm  bg-white  px-2'>Enter your Password</label>
            <input className='p-3 rounded-md w-full border-2 border-[#00000060] bg-transparent ' type="text" />
          </div>
          


          <div className='flex items-center justify-center'>
            <button className='hover:bg-black border-2 px-5 py-1 w-1/2 rounded-md  hover:text-white'>Login</button>
          </div>
          </form>

          <div className=' flex justify-center'>
            <span>Don't have an account?</span>
            <a href="">Signup Now</a>
          </div>
          <div className='flex justify-center'>
            <h3 className=''>--OR--</h3>
          </div>
          <div className='flex justify-center gap-4'>

            <button className='hover:bg-black border-2 px-5 py-1 w-1/2 rounded-md  hover:text-white'><Google /></button>
            <button className='hover:bg-black border-2 px-5 py-1 w-1/2 rounded-md  hover:text-white'><LinkedIn /></button>
          </div>


       
      </div>
    </div>
  )
}

export default Loginpage;
