import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'

import Subnavbar from '../components/Subnavbar'
import RecmndedCtgry from '../components/RecmndedCtgry'
import { showDetails, showMUsic } from '../../utils/DUMMYDATA'
import Musicstudio from '../components/Musicstudio'
import Footer from '../components/footer'

const Homepage = () => {
  
  
  return (
    <div className='w-full h-screen '>
       <Subnavbar/>
       <Banner/>
      <Category/>
      <RecmndedCtgry showDetails={showDetails}/>
      <Musicstudio showMusic={showMUsic}/>
      <Footer/>
    </div>
  )
  
}

export default Homepage
