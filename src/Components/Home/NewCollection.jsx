import React, { useState } from 'react'



function NewCollection() {
  const [list, setList] = useState([
    {
      image : "/assets/Slider/tshirt1.png"
    },
    {
      image : "/assets/Slider/tshirt2.png"
    },
    {
      image : "/assets/Slider/tshirt3.png"
    }
  ])
  

  return (
    <div className='flex flex-col w-full justify-evenly items-center h-[100vh]'>
        <h1 className='heading text-6xl font-bold text-center my-10'>New Collection</h1>
        <p className='text-lg font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi a expedita provident eaque voluptate maxime explicabo excepturi quis. Quis cumque odit voluptates ducimus rerum</p>
      <div className="closet">
        {
          list.map((el,index)=>{
          return(
          <div className='flex justify-center items-center flex-col' key={index}>
            <img src={el.image} alt="" width={"350px"} height={"400px"} />
            <button className='btn-action font-lato'>OVER-SIZED</button>
          </div>
          )
          })
        }
      </div>
      <div className='flex p-16 relative'>
        <img className='translate-x-[5vw]' src="/assets/Slider/luffyshirt.svg" width={"500px"} height={"500px"} alt="" />
        <img className='h-[120vh] translate-x-[32vw] z-20 -translate-y-[25vh] absolute' src="/assets/Slider/stroke1.png" alt="" />
        <div className='p-4 w-[25vw] translate-x-[46vw] z-10 absolute flex flex-col'>
          <p className='font-bold text-6xl font-frankhl'>Best Fashion Since 2022</p>
          <p className='w-5/6 font-lato my-5 text-[18px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas illo quis obcaecati nisi sint illum maiores numquam sapiente! In cumque vel facere blanditiis quo? Consequuntur tenetur eum aliquid nobis sapiente!</p>
          <div className='web-stats'>
           <div>
              <p className='font-bold font-lato text-[36px]'>2023</p>
              <p className='font-lato'>Founded</p>
           </div>
           <div>
           <p className='font-bold font-lato text-[36px]'>8800k+</p>
           <p className='font-lato'>Product Sold</p>
           </div>
           <div>
           <p className='font-bold font-lato text-[36px]'>5k+</p>
           <p className='font-lato'>Best Reviews</p>
           </div>
          </div>
        </div>
        <div className="blur-blue-bg translate-x-[25vw]">
        </div>
      </div>
    </div>
  )
}

export default NewCollection