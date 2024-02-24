import { Star, ThumbUpSharp } from '@mui/icons-material';
import React from 'react'

const Musicstudio = (props) => {
  return (
    <div>
      <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-5  mb-4'>Your Music Studio</h1>
      <div className='w-full flex min-h-[450px] p-4 rounded-md shadow-md bg-white/75 py-8 px-12 whitespace-nowrap overflow-x-auto overflow-y-hidden scroll-width gap-5'>
        {props.showMusic.map((item)=>(
          <div key={item.id} className='min-w-[250px] h-[350px] hover:scale-110 transition-transform duration-300 rounded-md'>
            <div className='w-full h-[300px] rounded-md  shadow-lg cursor-pointer'>
               <img src={item.imgUrl} alt="" className='w-full object-cover h-[260px] rounded-t-md'/>
               <div className='w-full h-[40px] bg-black text-white/80 flex items-center rounded-b-md gap-3'>
                {/* <Star/><span className=''>{item.rating}</span> */}
                {/* <ThumbUpSharp/><span>{item.Votes}</span>K votes */}
                <p>{item.Time}</p>

               </div>
            </div>
            <div className='w-full h-[350px] text-black'>
              <h2 className='text-md '>{item.name}</h2>
              <p>{item.place}</p>
              <p>{item.type}</p>
            </div>

          </div>


        
        ))}
        </div>

      </div>
  )
}

export default Musicstudio;
