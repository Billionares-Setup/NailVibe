import { Icon } from "@iconify/react";

import royalLogo from "../assets/RoyalNailsLogo.jpg";
import nails from "../assets/Nails.png";
import nails2 from "../assets/Nails2.png";
import Navbar from "./Navbar";
import { useState, useRef } from "react";
import store1 from "../assets/store/store1.jpg";
import store2 from "../assets/store/store2.jpg";
import store3 from "../assets/store/store3.jpg";

const Hero = () => {
  const storeImages = [store1, store2, store3];

  //slideshow for the images
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalStarted = useRef(false);

  if (!intervalStarted.current) {
    intervalStarted.current = true;

    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % storeImages.length);
    }, 5000); // 5 seconds
  }

  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-100 via-slate-100 to-white  min-h-screen  overflow-hidden">
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

        <div className="relative w-screen h-screen  text-center overflow-hidden shadow-lg">
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
        <div className=" flex flex-col items-center justify-center mt-12">
          <h1
            className="text-4xl font-semibold text-gray-800 z-20 text-indigo-800"
            style={{
              fontFamily: '"Ephesis", cursive',
              fontSize: "3rem",
            }}
          >
            Welcome to Royal Nails & Spa
          </h1>
          <br />
          <p
            className="text-lg text-gray-600 text-indigo-800 z-20"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1.5rem",
            }}
          >
            Your Beauty, Our Passion
          </p>
          <div className="my-6 flex justify-center z-10">
            <div className="relative group transition-transform duration-500 ease-out hover:scale-[102%]">
              <img
                src={storeImages[currentIndex]}
                alt={`store image ${currentIndex}`}
                className="h-[75vh] w-[80vw] object-cover bg-white rounded-lg shadow-lg border border-violet-900"
              />

              {/* Info Card - will stay attached & scale with image on hover */}
              <div className="absolute bottom-2 right-2 bg-gray-50/80 border border-gray-300 rounded-xl shadow-xl w-[20em] p-3 space-y-2 text-sm sm:text-xs">
                <div className="flex items-center gap-2">
                  <p
                    className="text-violet-900 font-bold text-3xl leading-none"
                    style={{ fontFamily: '"Ephesis", cursive' }}
                  >
                    Royal
                  </p>
                  <span className="text-violet-900 font-semibold text-base mt-1">
                    Nails & Spa
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Icon
                    icon="mdi:location"
                    className="mt-0.5 text-red-600 size-5"
                  />
                  <p>161 Colborne St W, Brantford, ON N3T 1L2</p>
                </div>

                <div className="flex items-start gap-2">
                  <Icon
                    icon="material-symbols:call"
                    className="mt-0.5 text-red-600 size-5"
                  />
                  <p>(519) 304-9044</p>
                </div>

                <div className="flex items-start gap-2">
                  <Icon
                    icon="mdi:clock-outline"
                    className="mt-0.5 text-red-600 size-5"
                  />
                  <p>Mon–Fri: 9 AM – 7 PM | Sat: 9 AM – 6 PM</p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon
                    icon="ci:house-close"
                    className="mt-0.5 text-red-600 size-5"
                  />
                  <p>Closed on Sundays</p>
                </div>

                <a
                  href="https://www.google.com/maps/place/Royal+Nails+And+Spa/@43.1318112,-80.2803425,16z/data=!3m1!4b1!4m6!3m5!1s0x882c68a0a6ef3a79:0xff42fc0c984bec55!8m2!3d43.1318112!4d-80.2777676!16s%2Fg%2F11b6j877qz?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 px-4 py-2 rounded-lg bg-violet-900 text-white font-semibold hover:bg-violet-800 transition"
                >
                  🧭 Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
