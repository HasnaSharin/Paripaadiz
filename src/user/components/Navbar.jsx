import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='w-full h-[70px] p-4  shadow-md bg-black flex justify-evenly '>
      <h1 className='text-white flex items-center text-3xl font-normal ml-10'> Spectra <span className='text-[#F82249]'>Sphere</span></h1>
      <div className=' w-full h-[100%] flex justify-end p-3'>
        <ul className='flex gap-4 items-center  text-white   mr-10'>
         <Link to={'/'}><li className='font-bold cursor-pointer hover:underline'>Home</li></Link> 
          <Link to={'/about'}><li className='font-bold cursor-pointer hover:underline'>About</li></Link>
          <Link to={'/'}><li className='font-bold cursor-pointer hover:underline'>Events</li></Link>
          {!props.logdIn&&(<Link to={'/signup'}><li className='font-bold cursor-pointer hover:underline'>SignUp</li></Link>)}
          {!props.logdIn&&(<Link to={'/login'}><li className='font-bold cursor-pointer hover:underline'>Login</li></Link>)}
          {props.logdIn&&(<Link to={'/login'}><li className='font-bold cursor-pointer hover:underline'>Logout</li></Link>)}
        </ul>
      </div>
        
      
    </div>
  )
}

export default Navbar
