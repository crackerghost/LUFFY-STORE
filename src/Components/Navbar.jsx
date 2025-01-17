import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center flex-col'>
        <div className="banner">
            <p>10% OFF on your first order using code <b>FIRST10</b></p>
        </div>
        <div className="menu flex w-full justify-between items-center my-4">
            <div className='w-3/12'>
            <img src={"/assets/Navbar/hamburger.png"} width={"40px"} height={"40px"} alt="" />
            </div>
            
            <p className='logo-head'>Luffy Store</p>
            <div className='menu-function flex w-3/12 justify-evenly items-center'>
                <img src={"/assets/Navbar/search.png"} width={"35px"} height={"35px"} alt="" />
                <img src={"/assets/Navbar/love.png"} width={"35px"} height={"35px"}  alt="" />
                <img src={"/assets/Navbar/cart.png"}width={"35px"} height={"35px"}  alt="" />
            </div>

        </div>


    </div>
  )
}

export default Navbar