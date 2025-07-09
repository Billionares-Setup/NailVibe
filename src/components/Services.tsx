import { Carousel } from "flowbite-react";
import ServiceCard from "./ServiceCard";
import { servicePrice } from "../assets/service/service-price";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const container = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 96%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-yellow-50 via-white to-pink-50 py-20 px-4 sm:px-8 lg:px-16"
    >
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <div className="flex items-center gap-3">
          <Icon icon="arcticons:royal-tsd" className="w-14 h-14 text-indigo-800" />
          <h2 className="relative text-4xl font-semibold text-indigo-900 md:text-5xl">
            The Royal Menu
            {/* C: Animated Underline */}
            <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-400 transition-all duration-700 rounded-lg origin-left scale-x-0 group-hover:scale-x-100 group">
            </span>
          </h2>
        </div>
        <p className="text-2xl font-medium text-indigo-500">
          You deserve to be treated like Royalty
        </p>
      </div>

      {/* Services List */}
      <div className="flex justify-center">
        {isMobile ? (
          <Carousel
            pauseOnHover
            slide
            indicators={false}
            className="w-full max-w-2xl px-2 sm:px-4"
          >
            {servicePrice.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicePrice.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
