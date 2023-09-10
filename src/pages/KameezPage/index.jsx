import React from 'react'
import Navbar from '../../components/Navbar'

import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'
import KameezCard from '../../components/KameezCard'

const KameezPage = () => {
  return (
    <div>
     <Navbar/>
     <h5 className='text-center fw-medium m-5'>KAMEEZ SHALWAR</h5>
    <KameezCard/>
     <BeTheFirst/>
     <Footer/>
    </div>
  )
}

export default KameezPage
