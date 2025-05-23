import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import royalHero from "../assets/RoyalHero.png";

import nails2 from "../assets/Nails2.png";
import pink from "../assets/Pink.png";
import greenNails from "../assets/GreenNails.png";
import paint from "../assets/Paint.png";
import paint2 from "../assets/Paint2.png";
import butterfly from "../assets/Butterfly.png";

// import crown from "../assets/Crown.png";
import crowntransparent from "../assets/CrownTransparent.png";

import { useState } from "react";
import store1 from "../assets/store/store1.jpg";
import store2 from "../assets/store/store2.jpg";
import store3 from "../assets/store/store3.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MapSection from "./MapSection";

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
            toggleActions: "play none none none", // syncs with scroll
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
        ease: "power3.in",
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

  //Scroll Animation
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const container = sectionRef.current as HTMLDivElement;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5, // slower entrance
          ease: "power3.out", // smooth easing
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none", // allow reverse on scroll up
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden text-center bg-fixed bg-center bg-cover shadow-lg bg-gradient-to-r from-indigo-100 via-pink-50 to-white">
        {/* Top-left image */}
        <img
          ref={handLeft}
          src={butterfly}
          alt="Nails1"
          className="absolute top-0 -left-20 w-[36em]"
        />
        <img
          ref={handLeft}
          src={greenNails}
          alt="Nails1"
          className="absolute bottom-0 left-0"
        />

        {/* Center content */}
        <div className="absolute inset-0 flex items-start justify-center pt-72 sm:pt-20 xl:pt-10 ">
          <div ref={logoRender} className="relative flex flex-col items-center">
            <img
              src={crowntransparent}
              alt="crown"
              className="z-10 w-40 h-32 sm:h-40 sm:w-52 md:h-48 md:w-64"
            />{" "}
            <p className="z-10 self-start px-6 pt-2 pb-4 text-5xl font-semibold text-white rounded-full sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-tr from-indigo-500/80 via-pink-500/50 to-blue-500/50">
              <span style={{ fontFamily: '"Ephesis", cursive' }}>Royal </span>
              <span className="ml-2 font-sans text-2xl sm:text-3xl md:text-5xl">
                Nails & Spa
              </span>
            </p>
            <button className="z-10 w-full px-4 py-2 mt-4 text-lg font-semibold transition rounded-full text-amber-900 bg-amber-400 hover:bg-amber-500">
              The Royal Services
            </button>
          </div>
        </div>

        {/* Decorative image on top-right */}
        <img
          ref={handRight}
          src={royalHero}
          alt="royalHero"
          className="absolute top-0 right-0 w-[28em] overflow-clip"
        />
        <img
          ref={handRight}
          src={paint2}
          alt="royalHero"
          className="absolute -bottom-20 -right-40 w-[45em] overflow-clip"
        />
      </div>

      <div
        ref={sectionRef}
        className="flex flex-col items-center justify-center mt-12 "
      >
        <div className="flex items-start justify-end">
          <p className="mx-2 text-4xl font-semibold text-center text-indigo-800 sm:text-5xl ">
            Welcome to{" "}
            <span
              className="mr-2 text-4xl font-semibold text-center text-indigo-800 md:text-6xl "
              style={{
                fontFamily: '"Ephesis", cursive',
              }}
            >
              Royal{" "}
            </span>{" "}
            Nails & Spa
          </p>
        </div>

        <p className="z-20 mt-1 text-2xl font-medium text-indigo-500">
          Your Beauty, Our Passion
        </p>
        <div className="grid items-center grid-cols-1 gap-6 mx-4 mt-6 lg:grid-cols-10 md:gap-4 md:mx-12">
          <div className="lg:col-span-7">
            <div ref={main} className="z-10 flex justify-center ">
              <div className="relative h-[75vh] w-[80vw]  bg-white rounded-xl shadow-lg border border-gray-300 group transition-transform duration-500 ease-out hover:scale-[102%] overflow-hidden">
                <img
                  ref={imageRef}
                  src={storeImages[currentIndex]}
                  alt={`store image ${currentIndex}`}
                  className="object-cover w-full h-full rounded-lg"
                />

                {/* Info Card - will stay attached & scale with image on hover */}
                <div
                  ref={address}
                  className="address absolute bottom-2 right-2 bg-gray-50/80 border border-gray-300 rounded-xl shadow-xl w-[20em] p-3 space-y-2 text-sm sm:text-xs"
                >
                  <div className="flex items-center gap-2">
                    <p
                      className="text-3xl font-bold leading-none text-violet-900"
                      style={{ fontFamily: '"Ephesis", cursive' }}
                    >
                      Royal
                    </p>
                    <span className="mt-1 text-base font-semibold text-violet-900">
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
                    className="block px-4 py-2 mt-4 font-semibold text-center text-white transition rounded-lg bg-gradient-to-tr from-indigo-500 via-pink-500 to-blue-500 hover:bg-violet-400"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        icon="material-symbols:map-outline"
                        className="mt-0.5  size-5"
                      />
                      <p className="uppercase ">Get Directions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:col-span-3">
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
