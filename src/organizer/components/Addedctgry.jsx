import React from 'react'
import perfomance from '../../assets/perf.avif'
import Experiance from '../../assets/experience.avif'
import Expositions from '../../assets/expositionss.avif'
import Parties from '../../assets/partiess.avif'
import Sports from '../../assets/sport.avif'
import Confrences from '../../assets/conferencess.avif'
const programs=[
{img:perfomance,title:"Performance"},
{img:Experiance,title:"Experiance"},
{img:Expositions,title:"Expositions"},
{img:Parties,title:"Parties"},
{img:Sports,title:"Sports"},
{img:Confrences,title:"Confrences"},
]

const Addedctgry = () => {
  return (
    <div className='w-full min-h-screen  flex px-10 py-16 flex-col gap-5' >
        
        <div className='w-full  flex flex-col items-center gap-10 justify-center'>

          <h1 className='font-bold text-4xl text-center'>What Can You Host?</h1>
          <p className='text-xl w-3/4  text-center'>As the purveyor of entertainment,Spectra Sphere enables your event with end to end solutions from the time you register to the complition of the event.Let's look at what you can host.</p>
        <div className='w-1/2 max-xl:w-3/4 max-lg:w-full max-md:grid-cols-2 max-sm:grid-cols-1 grid grid-cols-3 gap-5 justify-items-center '>
        {programs.map((program)=>(
          <div className='w-[200px] h-[200px] rounded-md border-2 border-gray-200  cursor-pointer bg-gray-100 flex flex-col items-center justify-around hover:-translate-y-2   duration-500 hover:shadow-md shadow-black/70 transition-all ease-in-out '>
             <img src={program.img} alt="" className='w-full object-contain h-[100px] rounded-t-md'/>
             <h1>{program.title}</h1>
              </div>
        ))}


        </div>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <button className='p-5 border-2 px-24 rounded-md bg-[#14b8a6] hover:bg-[#0d9488] text-white'>List Your Show</button>
        </div>

      </div>
      
    
  )
}

export default Addedctgry
