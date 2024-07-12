import React from "react";

function Deal() {
  return (
    <div className="h-[120vh] flex justify-center items-center flex-col">
      <div className="main-container bg-[#EBEBEB] h-[500px] w-[1400px] flex flex-col justify-end items-center">
        <div className="flex w-[1300px] justify-center">
        <div className="left-deal-text w-[90%] h-[80%] flex flex-col justify-evenly">
          <p className="font-frankhl text-6xl font-bold">Deal Of The Day</p>
          <p className="font-lato w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            modi ex. Illo fugit perferendis dignissimos nulla quo reprehenderit,
            quos amet tempora cum dicta recusandae aliquam a aperiam consequatur
            natus odit.
          </p>
          <div className="time-left h-[120px]">

          </div>
          <button className="bg-[#0884FF] h-[65px] w-[200px] font-lato text-white hover:bg-[#0b64d9]">Grab Now</button>
        </div>
        <img className="translate-x-14" width={"350px"} height={"450px"} src="/assets/Deal/tshirt.png" alt="" />
        <img width={"100px"} height={"100px"} src="/assets/Deal/dots.svg" alt="" />
        </div>
       
      </div>
      <img className="w-full" src="/assets/Deal/stroke.svg" alt="" />
    </div>
  );
}

export default Deal;
