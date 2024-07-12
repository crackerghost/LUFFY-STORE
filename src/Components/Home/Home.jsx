import React from 'react'
import Navbar from '../Navbar'
import Body from './Body'
import NewCollection from './NewCollection'
import Crousel from './Crousel'
import Deal from './Deal'
import About from './About'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Body/>
      <NewCollection/>
      <Crousel/>
      <Deal/>
      <About/>
      <Footer/>
      </>
  
  )
}

export default Home