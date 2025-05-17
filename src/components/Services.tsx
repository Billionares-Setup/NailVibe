import { Carousel } from "flowbite-react";
import ServiceCard from "./ServiceCard";
import { servicePrice } from "../assets/service/service-price";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
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
          toggleActions: "play none none reverse", // allow reverse on scroll up
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <div ref = {sectionRef}className="relative isolate px-6 py-10 sm:py-15 lg:px-8">
      {/* Background Shape */}
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      {/* Title & Description */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose from affordable service options tailored to enhance your nail
        care experience.
      </p>

      {/* Carousel */}
      <div className="flex justify-center mt-4 sm:mt-6"> 
        <Carousel
          pauseOnHover
          className="w-full max-w-4xl px-4 sm:px-6 md:px-8 h-auto" 
          slide={true}
          indicators={false}
        >
          {servicePrice.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              notes={service.notes}
            />
          ))}
        </Carousel>
      </div>


    </div>
  );
};

export default Services;
