import React, { useEffect, useRef } from 'react';

function Crousel() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className='w-[100vw] bg-black flex'>
      <video className='h-[100%] w-[400px] -translate-x-[8vw]' ref={videoRef} src="/assets/Slider/giyusa.mp4" playsInline loop/>
      <div className='flex flex-col justify-evenly items-start w-[30vw] -translate-x-[20vw]'>
        <p className='text-white font-frankhl font-bold text-6xl my-24'>Best Seller Product</p>
        <p className='text-white font-lato text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta labore, doloremque dolorum dolor hic qui fugiat nihil necessitatibus magni nostrum explicabo, aut a voluptas, totam distinctio. Autem, rem quod?</p>
       <button className='font-lato font-bold text-white border border-white w-[200px] h-[65px] transition duration-300 hover:bg-[#B6E9E3] hover:text-black'>SEE MORE</button>
      </div>
      <div className="main-crousel w-[90%]">
        

      </div>
    </div>
  );
}

export default Crousel;
