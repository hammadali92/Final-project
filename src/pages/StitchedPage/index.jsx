import React from 'react'
import Navbar from '../../components/Navbar'
import StitchedCard from '../../components/StitchedCard'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'

const StitchedPAge = () => {
  return (
    <div>
     <Navbar/> 
     <h5 className='text-center fw-medium m-5'>WOMEN'S STITCHED | READY TO WEAR | PRETWEAR | J. JUNAID JAMSHED</h5>
     <StitchedCard/>
     <BeTheFirst/>
     <Footer/>
    </div>
  )
}

export default StitchedPAge
