import React from 'react'

const Explorepage = () => {
  return (
    
      <div className='w-full min-h-screen flex '>
        <div className='w-[450px] bg-green-100 flex flex-col items-center space-y-10'>
          <h1 className='text-3xl font-bold'>filters</h1>
          <div className='w-[300px] space-y-2'>
            <div className='w-full bg-white rounded-md flex flex-col p-5'></div>
            <div className='w-full bg-white rounded-md flex flex-col p-5'></div>
            <div className='w-full bg-white rounded-md flex flex-col p-5'></div>
            <div className='w-full bg-white rounded-md flex flex-col p-5'></div>
            <div className='w-full bg-white rounded-md flex flex-col p-5'></div>
          </div>
        </div>
        <div className='w-full bg-green-500 flex flex-col items-center space-y-10'>
        <h1 className='text-3xl font-bold'>Comedy Shows in Kochi</h1>

        </div>
      </div>
    
  )
}

export default Explorepage
