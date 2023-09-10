import React  from 'react'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import UnstitchedCard from '../../components/UnstitchedCard'
import BeTheFirst from '../../components/BeTheFirst'
const UnstitchedPage = () => {
   
  return (
    <div>
      <Navbar/>
      <h5 className='text-center fw-medium mt-2'>UN-STITCHED</h5>
<UnstitchedCard/>
    <BeTheFirst/>
    <Footer/>
    </div>
  )
}

export default UnstitchedPage
