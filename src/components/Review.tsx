import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Review() {
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

  const reviews = [
    {
      name: "Emily R.",
      rating: "★★★★★",
      review:
        "Absolutely loved my gel manicure! The attention to detail was outstanding, and the ambiance was so soothing felt like a true escape! Highly recommend to anyone looking for a top-tier experience.",
    },
    {
      name: "Jasmine T.",
      rating: "★★★★☆",
      review:
        "My nails turned out absolutely stunning! Booking was seamless, and the salon was pristine. The colors and designs were even better than I imagined!",
    },
    {
      name: "Sophia L.",
      rating: "★★★★★",
      review:
        "Hands down, the best nail salon I've been to! Every time, my nails are shaped to perfection, and the designs are simply breathtaking. I always leave feeling pampered and confident!",
    },
    {
      name: "Maya D.",
      rating: "★★★★★",
      review:
        "From start to finish, this was an absolute dream experience! My pedicure was flawless and lasted much longer than expected. The staff is truly skilled and makes sure you walk out feeling amazing.",
    },
    {
      name: "Chloe M.",
      rating: "★★★★☆",
      review:
        "I was blown away by the artistry and care put into my nails. The ambiance is so inviting, and the experience was nothing short of magical. Can't wait to book my next appointment!",
    },
    {
      name: "Anna K.",
      rating: "★★★★★",
      review:
        "The professionalism and expertise here are unmatched! Booking was a breeze, and the results were absolutely breathtaking. My nails have never looked better!",
    },
  ];

  return (
    <section ref={sectionRef} className="pb-16  px-8 md:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-indigo-800">
          Real stories, real satisfaction 💖
        </h2>
        {/* <p
          className="text-lg text-gray-600 text-indigo-800 mt-4"
          style={{ fontFamily: '"Open Sans", sans-serif' }}
        >
          Real stories, real satisfaction 💖
        </p> */}
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Review Card */}
        {reviews.map(({ name, rating, review }, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border border-violet-300 transition transform hover:scale-105"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl font-semibold text-indigo-800">{name}</p>
              <p className="text-yellow-400 text-2xl">{rating}</p>
            </div>
            <p
              className="text-sm  text-indigo-800 mt-1 text-justify"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              "{review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
