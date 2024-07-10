import React from 'react'

function Slider() {
  return (
    <div className='slider-container'>
        <div className="action-btn">
          <div className='h-[10vh]'>
          <ul className='flex w-full justify-evenly'>
                <li>HOME</li>
                <li>NEW ARRIVALS</li>
                <li>BEST SELLERS</li>
                <li>HOODIE</li>
                <li>ANIME</li>
            </ul>
          </div>
           
            <div className="slider">
                <div className='slider-inner rounded-2xl border-black-2 bg-[--graytrans--]  w-[400px] h-[260px] backdrop-blur-lg text-white'>
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Slider