import Laptop from '../../assets/laptop.png';
import Time from '../../assets/Time.png'
import Monitor from '../../assets/Monitor.png';
import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-screen flex lg-max:flex-col '>
      <div className='w-1/2 lg-max:w-full  h-screen border-r-2 border-black/5  px-5 justify-center flex items-center flex-col gap-10'>
         <div className='w-full  justify-center flex items-center px-6 py-5'>
            <h1 className='text-3xl font-bold text-center'>Benifits of using-Do it yourself our new event management tool</h1>
         </div>
         
         <div className='w-full justify-center  flex'>
            <div className='w-[150px] h-full bg-white text-5xl font-extrabold px-5 gap-5'>
                <img src={Laptop} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 px-8 py-5' >
                <h2 className='font-bold text-2xl'>Quick and Easy Registration</h2>
                <div>
                    <p className='text-gray-500'>
                        We provide a quick and easy way to register for an event.
                    </p>
                </div>
            </div>

         </div>
         <div className='w-full justify-center  flex'>
            <div className='w-[150px] h-full bg-white text-5xl font-extrabold px-5 gap-5'>
                <img src={Time} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 px-8 py-5' >
                <h2 className='font-bold text-2xl'>Quick and Easy Registration</h2>
                <div>
                    <p className=''>
                        We provide a quick and easy way to register for an event.
                    </p>
                </div>
            </div>

         </div>
         <div className='w-full justify-center flex'>
            <div className='w-[150px] h-full bg-white text-5xl font-extrabold px-5 gap-5'>
                <img src={Monitor} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 px-8 py-5' >
                <h2 className='font-bold text-2xl'>Quick and Easy Registration</h2>
                <div>
                    <p className='text-gray-500'>
                        We provide a quick and easy way to register for an event.
                    </p>
                </div>
            </div>

         </div>
      </div>
      <div className='w-1/2 h-screen lg-max:w-full bg-gray-100 flex items-center justify-center'>
        <div className='flex flex-col  w-[350px] h-[500px] '>
            <div className='w-full h-[100px]  flex items-center justify-center'>
                <h1 className='text-3xl font-bold'>Do It Your Self</h1>
            </div>
            <div className='flex flex-col gap-5 border-b-2 border-black/10 pb-10 mb-10 '>
                <p>Mobile No:</p>
                <input type="text"  className='p-2 rounded-md border-2 border-black/10'/>
                <button className='p-2 bg-[#14b8a6] rounded-md'>Send OTP</button>
                
            </div>
            <div className='flex items-center justify-center'>
                    <h1 className='text-xl'>Already have an account?</h1><a href="" className='text-blue-800 text-xl'>Sign in</a>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
