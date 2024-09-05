import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Crousel() {
  const videoRef = useRef(null);

  const changeSlide = (index) => {
    
  };

  const renderRating = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} src="/assets/Crousel/star1.png" alt="star" />);
    }
    return stars;
  };

  const [product, setProduct] = useState([
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 5,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    },
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 4,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    },
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 5,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    },
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 3,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    },
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 4,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    },
    {
      img: "/assets/Crousel/tshirt.png",
      rating: 4,
      name: "Pastel Coure MR",
      offerPrice: 2200,
      price: 3600,
    }
  ]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  useGSAP(() => {
    gsap.to('.inner-crousel', 
      { x: "-125vw", 
        scrollTrigger: {
          trigger: '.main-crousel',
          start: 'top 0%',
          end: 'bottom 100%',
          scrub: 1,
          pin : true
        }
      }
    );
  });

  return (
    <div className="w-[100vw] bg-black flex flex-col z-40">
      <div className="crousel-flow flex">
        <video
          className="h-[100%] w-[440px] -translate-x-[8vw] z-50"
          ref={videoRef}
          src="/assets/Slider/giyusa.mp4"
          playsInline
          loop
        />
        <div className="flex flex-col justify-evenly items-start w-[30vw] -translate-x-[20vw] z-50">
          <p className="text-white font-frankhl font-bold text-6xl my-24">Best Seller Product</p>
          <p className="text-white font-lato text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            soluta labore, doloremque dolorum dolor hic qui fugiat nihil
            necessitatibus magni nostrum explicabo, aut a voluptas, totam
            distinctio. Autem, rem quod?
          </p>
          <button className="font-lato font-bold text-white border border-white w-[200px] h-[65px] transition duration-300 hover:bg-[#B6E9E3] hover:text-black">
            SEE MORE
          </button>
        </div>
        <div className="backdrop-container -translate-x-[23vw] backdrop-blur-md z-40 flex-grow"></div>
        <div className="main-crousel z-20 flex-grow">
          <div className="inner-crousel z-20">
            {product.map((el, index) => {
              return (
                <div className="productCard" key={index}>
                  <img src={el.img} alt="product" />
                  <div className="productInfo">
                    <div className="rating flex w-[100px]">
                      {renderRating(el.rating)}
                    </div>
                    <p>{el.name}</p>
                    <div className="productPrice flex w-[100px] justify-between">
                      <p className="text-gray-500">₹{el.price}</p>
                      <p className="text-black">₹{el.offerPrice}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[30vw] p-16 hidden">
            <div className=" flex w-[100%] ">
              {product.map((el, index) => {
                return <img key={index} onClick={() => changeSlide(index)} src="/assets/Crousel/circle.svg" className="flex justify-center w-[200px]" alt="circle" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousel;
