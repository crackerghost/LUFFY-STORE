import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css'
import Home from './Components/Home/Home'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
       const loaded = ()=>{
          setIsLoaded(true);

          
       }
       window.addEventListener('load', loaded)
     
   
       return () => {
        window.removeEventListener('load', loaded);
      };
  },[])

  if (!isLoaded) {
    return (<div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>

      <img width={"150px"} src="/assets/loader.gif" alt="" />
      <p className='font-stylescript font-bold text-3xl'>Loading...</p>
    </div>)
  }

  return (

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter> 
 
  )
}

export default App
