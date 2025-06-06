import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

import { useState } from "react";
import store1 from "../assets/store/store1.jpg";
import store2 from "../assets/store/store2.jpg";
import store3 from "../assets/store/store3.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MapSection from "./MapSection";
// import { useNavigate } from "react-router";
import SuperHero from "./SuperHero";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const storeImages = [store1, store2, store3];
  // const navigate = useNavigate();
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
            start: "top 96%",
            toggleActions: "play none none none", // allow reverse on scroll up
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div className="md:pt-12 md:pl-12">
        <SuperHero />
      </div>
      <div
        id="location"
        ref={sectionRef}
        className="flex flex-col items-center justify-center mt-12 "
      >
        <div className="flex items-start justify-end">
          <p className="mx-2 text-4xl font-semibold text-center text-indigo-900 sm:text-5xl ">
            Welcome to{" "}
            <span
              className="mr-2 text-4xl font-semibold text-center text-indigo-900 md:text-6xl "
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
                  className="address absolute bottom-2 right-2 bg-gray-100 border border-gray-300 rounded-xl shadow-xl w-[20em] p-3 space-y-2 text-sm sm:text-xs"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-pink-100 rounded-lg dark:bg-pink-900">
                      <Icon
                        icon="emojione:crown"
                        className="w-6 h-6 text-pink-600 dark:text-pink-300"
                      />
                    </div>
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
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        <Icon icon="mdi:map-marker" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">
                          161 Colborne St W
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Brantford, ON N3T 1L2
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        <Icon icon="mdi:phone" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">
                          (519) 304-9044
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        <Icon icon="mdi:clock-outline" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">
                          Business Hours
                        </p>
                        <div className="space-y-1 text-gray-500 dark:text-gray-400">
                          <p className="font-normal text-green-600">
                            Mon-Fri: 9 AM - 7 PM
                          </p>
                          <p className="font-normal text-green-600">
                            Saturday: 9 AM - 6 PM
                          </p>
                          <p className="font-normal text-red-500 dark:text-red-400">
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/Royal+Nails+And+Spa/@43.1318112,-80.2803425,16z/data=!3m1!4b1!4m6!3m5!1s0x882c68a0a6ef3a79:0xff42fc0c984bec55!8m2!3d43.1318112!4d-80.2777676!16s%2Fg%2F11b6j877qz?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg"
                  >
                    <Icon icon="mdi:map-outline" className="w-5 h-5" />
                    Get Directions
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
