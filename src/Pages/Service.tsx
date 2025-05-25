import React, { useRef, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { servicePrice } from "../assets/service/service-price";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../components/Layout";
gsap.registerPlugin(ScrollTrigger);
export const Service = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 5,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <Layout>
      <div ref={sectionRef} className="relative px-6 pb-16 isolate lg:px-8">
        {/* Background Shape */}

        {/* Title & Description */}
        <div className="max-w-4xl py-5 mx-auto text-center">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {servicePrice.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              notes={service.notes}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
