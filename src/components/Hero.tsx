import { Icon } from "@iconify/react";

import royalLogo from "../assets/RoyalNailsLogo.jpg";
import nails from "../assets/Nails.png";
import nails2 from "../assets/Nails2.png";
import Navbar from "./Navbar";
import { useState, useRef } from "react";
import store1 from "../assets/store/store1.jpg";
import store2 from "../assets/store/store2.jpg";
import store3 from "../assets/store/store3.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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

  //GSAP animation for Address box
  const main = useRef(null);
  const address = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        address.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1.5,
          scrollTrigger: {
            trigger: address.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse", // syncs with scroll
            // markers: true,
          },
        }
      );
    },
    { scope: main }
  );

  //GSAP animation for left-hand
  const handLeft = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      handLeft.current,
      { x: "-100vw", y: "-100vh", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 3,
        ease: "power2.out",
      }
    );
  });

  //GSAP animation for right-hand
  const handRight = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      handRight.current,
      { x: "130vw", y: "130vh", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 3,
        ease: "power2.out",
      }
    );
  });
  //GSAP animation for right-hand
  const logoRender = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      logoRender.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  });

  //Image Zoom animation
  const imageRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.08,
          opacity: 1,
          duration: 5,
          ease: "power2.in",
        }
      );
    },
    { dependencies: [currentIndex] } // ✅ Triggers when currentIndex changes
  );
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
          {/* <div className="absolute top-4 flex flex-col items-center justify-center right-8">
            <Icon icon="skill-icons:instagram" className=" size-12" />{" "}
            <Icon
              icon="fe:facebook"
              className="mt-2  size-[3.5em] text-blue-500"
            />
          </div> */}
          {/* Top-left image */}
          <img
            ref={handLeft}
            src={nails}
            alt="Nails1"
            className="absolute top-0 left-0 size-[20em]"
          />

          {/* Center image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              ref={logoRender}
              src={royalLogo}
              alt="Royal Nails & Spa Logo"
              className="size-[20em] z-10"
            />
          </div>

          {/* Bottom-right image */}
          <img
            ref={handRight}
            src={nails2}
            alt="Nails2"
            className="absolute bottom-0 right-0 size-[20em]  overflow-clip"
          />
        </div>
        <div className=" flex flex-col items-center justify-center mt-12">
          <h1
            className="text-4xl font-semibold text-gray-800 z-20 text-indigo-800 text-center mx-2 sm:mx-auto"
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
          <div ref={main} className="my-6 flex justify-center z-10">
            <div className="relative h-[75vh] w-[80vw]  bg-white rounded-lg shadow-lg border border-violet-900 group transition-transform duration-500 ease-out hover:scale-[102%] overflow-hidden">
              <img
                ref={imageRef}
                src={storeImages[currentIndex]}
                alt={`store image ${currentIndex}`}
                className="object-cover h-full w-full rounded-lg"
              />

              {/* Info Card - will stay attached & scale with image on hover */}
              <div
                ref={address}
                className="address absolute bottom-2 right-2 bg-gray-50/80 border border-gray-300 rounded-xl shadow-xl w-[20em] p-3 space-y-2 text-sm sm:text-xs"
              >
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
                  <div className="flex items-center justify-center gap-2">
                    <Icon
                      icon="ic:outline-directions"
                      className="mt-0.5  size-5"
                    />
                    <p>Get Directions</p>
                  </div>
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
