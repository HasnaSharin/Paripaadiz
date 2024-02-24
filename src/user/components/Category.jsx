import React from 'react'
import { newData } from '../../utils/DUMMYDATA' 

const Category = () => {
  return (
    <div>

        <h1 className=' text-zinc-600  text-3xl font-bold ml-20 mt-3'>Events</h1>
        <div className='w-full flex  mt-2 p-4 rounded-md shadow-md bg-white/75 h-[350px] py-8 px-10 justify-evenly ' >
        {newData.map((item)=>(

      <div key={item.Category} className='min-w-[300px] h-[260px] bg-white/85 shadow-lg item-center gap-6 mt-2 hover:scale-105 transition-transform flex-col flex justify-center items-center  cursor-pointer rounded-lg font-extrabold'>
        <img src={item.image}alt="" className='w-full h-[50%] rounded-lg object-contain' />
        <h2 className=' justify-center  text-lg text-black capitalize'>{item.Category}</h2>

      </div>


        ))} 

        </div>
    </div>
    
    



    
    
  )
}

export default Category
