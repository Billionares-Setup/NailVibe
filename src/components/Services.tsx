import { Carousel } from "flowbite-react";
import ServiceCard from "./ServiceCard";
import { servicePrice } from "../assets/service/service-price";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

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
            start: "top 96%",
            toggleActions: "play none none none", // allow reverse on scroll up
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef} className="relative lg:px-8">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <Icon
            icon="arcticons:royal-tsd"
            className="size-20 text-indigo-800 stroke-[1.5px]"
          />
          <h2 className="text-4xl font-semibold text-indigo-800 md:text-5xl">
            The Royal Menu
          </h2>
        </div>
        <p className="z-20 text-2xl font-medium text-indigo-500">
          You deserve to be treated like Royalty
        </p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <Carousel
          pauseOnHover
          className="w-full h-auto max-w-4xl px-4 sm:px-6 md:px-8"
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
