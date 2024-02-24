
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './user/components/Navbar'
import Homepage from './user/pages/Homepage'
import Loginpage from './user/pages/Loginpage'
import OTPpage from './user/pages/OTPpage'
import Registrationpage from './user/pages/Registrationpage'
import Explorepage from './user/pages/Explorepage'
import Aboutpage from './user/pages/Aboutpage'
import Showpage from './user/pages/Showpage'
import Bookingpage from './user/pages/Bookingpage'
import Signup from './organizer/pages/Signup'
import Orghome from './organizer/pages/Orghome'
import Banner from './user/components/Banner'
import Accountdtls from './user/pages/Accountdtls'
import { useState } from 'react'


function App() {
return(
  <>
      <Accountdtls />

  </>
)

  // const [usertype, setusertype] = useState("USER")
  // let routes
  // if (usertype === "USER") {
  //   routes = <>
  //     <Navbar logdIn={true} />
  //     <Routes>

  //       <Route path='/' element={<Homepage />} />
  //       <Route path='/about' element={<Aboutpage />} />
  //       <Route path='/explore' element={<Explorepage />} />
  //       <Route path='/show' element={<Showpage />} />
  //       <Route path='/booking' element={<Bookingpage />} />
  //       <Route path='/homepage' element={<Orghome />} />
  //       <Route path='/signuppage' element={<Signup />} />

  //     </Routes>

  //   </>
  // } else if (usertype === "ORGANIZER") {
  //   routes = <>
      // <Accountdtls />
  //     <Showpage />
  //     <Orghome />
  //   </>
  // } else if (usertype === "ADMIN") {
  //   routes = <>
  //   </>
  // } else {

  //   routes = <>
  //     <Routes>
  //       <Route path='/' element={<>
  //         <Navbar logdIn={false} />
  //         <Homepage />
  //       </>} />

  //       <Route path='/login' element={<Loginpage />} />
  //       <Route path='/signup' element={<Registrationpage />} />
  //       <Route path='/otp' element={<OTPpage />} />
  //     </Routes>

  //   </>
  // }
  // return (
  //   <>
  //     {routes}
  //   </>
  // )
}

export default App
