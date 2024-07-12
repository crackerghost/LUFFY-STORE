import React from "react";
function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-col justify-evenly h-[20vh] items-center">
        <p>Get Highest Quality Merchandise of your Fav anime</p>
        <button className="contact-us">Contact Us</button>
      </div>
      <div className="flex justify-center w-full">
        <div className="social-banner">
          <img src="/assets/Footer/fb.svg" alt="" />
          <img src="/assets/Footer/fox.svg" alt="" />
          <img src="/assets/Footer/git.svg" alt="" />
          <img src="/assets/Footer/tel.svg" alt="" />
          <img src="/assets/Footer/insta.svg" alt="" />
          <img src="/assets/Footer/figma.svg" alt="" />
        </div>
      </div>
      <div className="footer-design">
      <img className="translate-y-5" src="/assets/Footer/layer1.svg" alt="" />
      <img  className="translate-y-5" src="/assets/Footer/layer2.svg" alt="" />
      <img src="/assets/Footer/layer3.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
