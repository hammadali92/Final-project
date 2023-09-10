import React from 'react'
import Navbar from '../../components/Navbar'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'
import KurtaMCard from '../../components/KurtaMCard'

const KurtiPage = () => {
  return (
    <div>
     <Navbar/>
     <h5 className='text-center fw-medium m-5'>KURTA</h5>
    <KurtaMCard/>
     <BeTheFirst/>
     <Footer/>
    </div>
  )
}

export default KurtiPage
