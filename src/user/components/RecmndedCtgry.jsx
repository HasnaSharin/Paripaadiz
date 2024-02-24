import { ArrowLeft, ArrowRight, Star, ThumbUpSharp } from '@mui/icons-material';
import React, { useRef, useState } from 'react'

const RecmndedCtgry = (props) => {
  const containerRef = useRef(null);
   const [scrollLeft, setScrollLeft] = useState(0);
   const handleScroll = (scrollOffset) => {
     setScrollLeft(
       (containerRef.current.scrollLeft =
         containerRef.current.scrollLeft+scrollOffset)
     );
   };
  return (
    <div className='relative' >
      <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-4 mb-4 '>Recommended Shows</h1>
      <div ref={containerRef} className='w-full flex h-[400px] p-4 mx-10 rounded-md shadow-md bg-white/75  py-8  whitespace-nowrap overflow-x-auto overflow-y-hidden scroll-width gap-5 scroll-smooth ' >
        <div onClick={()=>handleScroll(-500)} className='w-10 absolute bg-black/40 z-10 cursor-pointer flex justify-center items-center text-white hover:bg-black/60 h-[300px] left-0 '>
          <ArrowLeft/>
        </div>
        <div onClick={()=>handleScroll(500)} className='w-10 absolute bg-black/40 z-10 cursor-pointer flex justify-center items-center text-white hover:bg-black/60 h-[300px] right-0 '>
          <ArrowRight/>
          
        </div>
        {props.showDetails.map((item)=>(
          <div key={item.id} className='min-w-[250px] h-[350px] hover:scale-110 transition-transform duration-300 rounded-md'>
            <div className='w-full h-[300px] rounded-md  shadow-lg cursor-pointer'>
               <img src={item.imgUrl} alt="" className='w-full object-cover h-[260px] rounded-t-md'/>
               <div className='w-full h-[40px] bg-black text-white/80 flex items-center rounded-b-md gap-3'>
                <Star/><span className=''>{item.rating}</span>
                <ThumbUpSharp/><span>{item.Votes}</span>K votes

               </div>
            </div>
            <div className='text-black'>
              <p>{item.name}</p>
            </div>

          </div>


        
        ))}
        </div>

      </div>
  )
}

export default RecmndedCtgry;
