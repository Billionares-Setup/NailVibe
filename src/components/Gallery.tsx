import { Icon } from "@iconify/react";

import image1 from "../assets/Gallery/Image1.jpg";
import image2 from "../assets/Gallery/Image2.jpg";
import image3 from "../assets/Gallery/Image3.jpg";
import image4 from "../assets/Gallery/Image4.jpg";
import image5 from "../assets/Gallery/Image5.jpg";
import image6 from "../assets/Gallery/Image6.jpg";
import image7 from "../assets/Gallery/Image7.jpg";
import image8 from "../assets/Gallery/Image8.jpg";
import image9 from "../assets/Gallery/Image9.jpg";
import image10 from "../assets/Gallery/Image10.jpg";
import image11 from "../assets/Gallery/Image11.jpg";
import image12 from "../assets/Gallery/Image12.jpg";
import image13 from "../assets/Gallery/Image13.jpg";
import image14 from "../assets/Gallery/Image14.jpg";
import image15 from "../assets/Gallery/Image15.jpg";
import image16 from "../assets/Gallery/Image16.jpg";
import image17 from "../assets/Gallery/Image17.jpg";
import image18 from "../assets/Gallery/Image18.jpg";
import image19 from "../assets/Gallery/Image19.jpg";
import image20 from "../assets/Gallery/Image20.jpg";
import image21 from "../assets/Gallery/Image21.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

const importedImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const images: ImageItem[] = importedImages.map((src, index) => ({
  id: index + 1,
  src,
  alt: `Image ${index + 1}`,
}));

const Gallery = () => {
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
    <div
      id="gallery"
      ref={sectionRef}
      className="pt-16 overflow-hidden pb-14 whitespace-nowrap scroll-smooth"
    >
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <Icon
            icon="arcticons:1gallery"
            className="size-14 text-indigo-800 stroke-[1.5px]"
          />
          <h2 className="text-4xl font-semibold text-indigo-800 md:text-5xl">
            The Royal Finish
          </h2>
        </div>
        <p className="z-20 text-2xl font-medium text-indigo-500">
          Where every set is fit for royalty.
        </p>
      </div>
      <div className="flex gap-10 w-max animate-infinite-scroll hover:paused ">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="min-w-[24em] overflow-hidden rounded-xl shadow-lg border-2 border-violet-400 bg-black hover:scale-110"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full transition-transform duration-300 h-60 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
