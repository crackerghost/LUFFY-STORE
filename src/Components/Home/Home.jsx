import React from 'react'
import Navbar from '../Navbar'
import Body from './Body'
import NewCollection from './NewCollection'
import Crousel from './Crousel'

function Home() {
  return (
    <>
      <Navbar/>
      <Body/>
      <NewCollection/>
      <Crousel/>
      </>
  
  )
}

export default Home