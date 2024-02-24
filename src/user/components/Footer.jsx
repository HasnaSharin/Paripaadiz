import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black/75 w-full h-[100px] flex flex-col'>
      <div className='w-full h-[50%] text-white/75 flex items-center justify-center gap-5 '>
         <Twitter className='cursor-pointer hover:scale-110 transition-transform hover:text-black' />
         <Facebook className='cursor-pointer hover:scale-110 transition-transform hover:text-black '/>
         <Instagram className='cursor-pointer hover:scale-110 transition-transform hover:text-black'/>
        <a className='cursor-pointer hover:scale-110 transition-transform hover:text-black' href="https://github.com/HasnaSharin"><GitHub/></a> 
        <a className='cursor-pointer hover:scale-110 transition-transform hover:text-black' href="https://www.linkedin.com/in/hasna-sharin-120981230/"><LinkedIn/></a> 
         </div>
         <div className='text-white w-full h-[50%] flex justify-center items-center '>
          <p>Copyright 2024 Created By Hasna Sharin</p>
          
         </div>
    </div>
  )
}

export default Footer;