import { Icon } from "@iconify/react";
import { useRef } from "react";
import businessCard from "../assets/BusinessCard.png";

import crown from "../assets/Crown.png";
import butterfly from "../assets/Butterfly.jpg";
import greenNails from "../assets/GreenNails.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SuperHero = () => {
  //GSAP animation
  const entireHero = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      entireHero.current,
      { x: "100vw", y: "0vh" },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0,
        duration: 1,
        ease: "power1.out",
      }
    );
  });

  const card = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      card.current,
      { x: "0vw", y: "300vh" },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.8,
        ease: "power1.out",
      }
    );
  });

  const cardSm = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      cardSm.current,
      { x: "0vw", y: "-300vh" },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.8,
        ease: "power1.out",
      }
    );
  });
  return (
    <div ref={entireHero} className="rounded-tl-3xl">
      <div
        className="grid w-screen h-screen grid-cols-1 bg-center bg-no-repeat bg-cover shadow-lg md:grid-cols-5 rounded-tl-3xl"
        style={{ backgroundImage: `url(${butterfly})` }}
      >
        {/* Left 60% - Background only on md+ */}
        <div className="items-center hidden p-5 overflow-hidden rounded-tl-3xl md:block md:col-span-3 bg-gradient-to-t from-indigo-300 via-pink-100/30 to-transparent backdrop-brightness-110">
          <div className="absolute flex items-center justify-center left-12 top-3 rounded-xl">
            <div className="absolute flex flex-col gap-8 p-2 top-3 left-4 ">
              <Icon
                icon="logos:facebook"
                className="size-16 hover:scale-[105%] z-20  transition duration-300 ease-out "
              ></Icon>
              <Icon
                icon="skill-icons:instagram"
                className="size-16 hover:scale-[105%]  z-20 transition duration-300 ease-out "
              ></Icon>
            </div>
            <div className="z-10 text-xl font-semibold text-white -rotate-90 h-[15em]">
              <p className="px-2 py-1 text-indigo-300 border border-indigo-600 rounded-lg bg-indigo-500/50">
                Text to <span className="text-white ">Book Appointment</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full mt-12">
            <img
              ref={card}
              src={businessCard}
              alt="crown "
              className="w-1/2 mx-5 border-2 rounded-3xl"
            />
            {/* <div className="flex  w-[80%] py-10 mx-5 mb-12  text-justify text-indigo-900 ">
              <div className="relative !z-50 px-5 py-6 text-xl text-indigo-100 bg-gray-200 shadow-xl rounded-xl">
                "Royal Nail & Spa is your destination for elegant, high-quality
                nail care in a relaxing, luxurious setting. From classic
                manicures and pedicures to intricate nail art and spa
                treatments, we offer services tailored to enhance your beauty
                and confidence. Our experienced technicians use premium products
                to ensure lasting results and client satisfaction. Step into
                Royal Nail Salon — where beauty meets royalty."
                <div
                  className="absolute !z-0 w-full h-full text-indigo-900 bg-white -top-4 -left-4 p-5 shadow-xl rounded-xl"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  "Royal Nail & Spa is your destination for elegant,
                  high-quality nail care in a relaxing, luxurious setting. From
                  classic manicures and pedicures to intricate nail art and spa
                  treatments, we offer services tailored to enhance your beauty
                  and confidence. Our experienced technicians use premium
                  products to ensure lasting results and client satisfaction.
                  Step into Royal Nail Salon — where beauty meets royalty."
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right 40% - Brand content */}
        <div className="relative flex flex-col items-center justify-center pb-10 pr-24 md:col-span-2 bg-gradient-to-b from-indigo-300 via-pink-100/30 to-transparent backdrop-brightness-110">
          <img
            ref={cardSm}
            src={businessCard}
            alt="crown "
            className="absolute z-10 w-4/5 border-2 sm:w-1/2 top-6 right-6 md:hidden rounded-3xl"
          />
          <div className="relative flex flex-col items-center text-white">
            <img
              src={crown}
              alt="crown"
              className="z-10 w-32 h-24 -m-2 sm:h-32 sm:w-40 md:h-36 md:w-48"
            />
            <p className="z-10 px-4 py-2 text-4xl font-semibold border-2 rounded-full border-violet-600 sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-tr from-indigo-500/80 via-pink-500/50 to-blue-500/50">
              <span style={{ fontFamily: '"Ephesis", cursive' }}>Royal </span>
              <span className="ml-2 font-sans lg:text-2xl sm:text-3xl md:text-2xl">
                Nails & Spa
              </span>
            </p>
            <button className="z-10 mt-4 w-full px-6 py-2 text-lg font-semibold transition duration-300 ease-out border-2 rounded-full bg-amber-200/50 border-amber-400 text-amber-800 hover:scale-[103%] hover:bg-amber-200/60 ring-amber-300">
              The Royal Services
            </button>
          </div>
          <img
            src={greenNails}
            alt="greenNails"
            className="absolute bottom-0 left-0 w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default SuperHero;
