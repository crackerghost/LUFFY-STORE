import React, { useState } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
function About() {
    const [slide,setSlide] = useState([
    {
        img : "/assets/About/tshirt11.png"
    },
    {
        img : "/assets/About/tshirt1.png"
    },
    {
        img : "/assets/About/tshirt2.png"
    },
    {
        img : "/assets/About/tshirt3.png"
    },
    {
        img : "/assets/About/tshirt4.png"
    },

])

useGSAP(() => {
    
    gsap.to(".about-slides", { translateX: "-200%", duration: 6 , repeat : -1 });

})


  return (
    <div className="h-[150vh] flex flex-col items-center w-full">
      <div className="flex flex-col justify-evenly items-center w-[1400px] h-[100%]">
        <p className="font-frankhl text-5xl font-bold">
          What People Say About Us
        </p>
        <p className="font-lato">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate pariatur voluptatibus, expedita maiores veniam, nesciunt,
          tempore dignissimo
        </p>

        <div className="about-cards flex justify-between w-[100%]">
          <div className="left-card">
            <p className="font-bold text-xl">
              Comfortable and met all my expectation! i ordered a medium and it
              fit perfectly{" "}
            </p>
            <p className="text-x-[16px]">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at.
            </p>
            <img
              width={"88px"}
              height={"88px"}
              src="/assets/About/circle.svg"
              alt=""
            />
            <p className="text-xl font-bold">Mario Gotze</p>
            <p className="text-[16px]">Customer</p>
          </div>
          <div className="right-card">
            <p className="font-bold text-xl">
              Comfortable and met all my expectation! i ordered a medium and it
              fit perfectly{" "}
            </p>
            <p className="text-x-[16px]">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at.
            </p>
            <img
              width={"88px"}
              height={"88px"}
              src="/assets/About/circle.svg"
              alt=""
            />
            <p className="text-xl font-bold">Mario Gotze</p>
            <p className="text-[16px]">Customer</p>
          </div>
        </div>

    
     
      </div>
      <div className="about-slides">
          {
            slide.map((el,index)=>{
                return(
                    <img src={el.img} key={index}/>
                )
            })
          }

        </div>
        <div className="banner-anime h-[10vh] p-4">
            <img src="/assets/About/animebanner.svg" alt="" />

        </div>
    </div>
  );
}

export default About;
