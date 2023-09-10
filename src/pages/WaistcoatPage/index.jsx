import React  from 'react'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import WaistcoatCard from '../../components/WaiscoatCard'
import BeTheFirst from '../../components/BeTheFirst'
const UnstitchedPage = () => {
   
  return (
    <div>
      <Navbar/>
      <h5 className='text-center fw-medium mt-2'>WAISTCOAT</h5>
<WaistcoatCard/>
    <BeTheFirst/>
    <Footer/>
    </div>
  )
}

export default UnstitchedPage
