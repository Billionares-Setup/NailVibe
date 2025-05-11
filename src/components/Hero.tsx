import { Icon } from "@iconify/react";

import royalLogo from "../assets/RoyalNailsLogo.jpg";
import nails from "../assets/Nails.png";
import nails2 from "../assets/Nails2.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-100 via-slate-100 to-white  min-h-screen  overflow-x-hidden">
        {/* Pinkish Spots Start */}
        <div
          className="fixed left-0 top-[2em] w-[30rem] h-[30rem] rounded-full 
  bg-gradient-to-tr from-rose-300 via-pink-300 to-blue-300 
  opacity-30 blur-3xl overscroll-none "
        ></div>
        <div
          className="fixed left-1/2 top-[20em] w-[30rem] h-[30rem] rounded-full 
  bg-gradient-to-tr from-red-300 via-pink-300 to-blue-300 
  opacity-30 blur-3xl  overscroll-none "
        ></div>

        <div
          className="fixed right-0 top-0 w-[20rem] h-[20rem] rounded-full 
  bg-gradient-to-tr from-purple-300 via-pink-300 to-blue-300 
  opacity-30 blur-3xl  overscroll-none "
        ></div>
        {/* Pinkish Spots End */}

        <div className="relative w-screen h-screen  text-center overflow-hidden">
          {/* Top-left image */}
          <img
            src={nails}
            alt="Nails1"
            className="absolute top-0 left-0 size-[20em]"
          />

          {/* Center image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={royalLogo}
              alt="Royal Nails & Spa Logo"
              className="size-[20em] z-10"
            />
          </div>

          {/* Bottom-right image */}
          <img
            src={nails2}
            alt="Nails2"
            className="absolute bottom-0 right-0 size-[20em]  overflow-clip"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
