import { useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type TipCategory =
  | "general"
  | "manicure"
  | "health"
  | "seasonal"
  | "salon-feature"
  | "service"
  | "policy";

interface NailTips {
  general: string[];
  manicure: string[];
  health: string[];
  seasonal: string[];
  "salon-feature"?: string[];
  service?: string[];
  policy?: string[];
}

const TipsPage = () => {
  const [activeCategory, setActiveCategory] = useState<TipCategory>("general");

  const nailTips: NailTips = {
    general: [
      "💧 Keep your nails clean and dry to prevent bacterial growth",
      "✂️ Trim your nails regularly with sharp manicure scissors or clippers",
      "🔴 Always file in one direction to prevent splitting and weakening",
      "🧴 Apply moisturizer to your nails and cuticles daily",
      "🧤 Wear gloves when doing household chores or working with chemicals",
      "🛡️ Limit prolonged exposure to water to reduce risk of nail splitting"
    ],
    manicure: [
      "💅 Always start with clean, dry nails before applying polish",
      "🖍️ Use thin coats of polish rather than one thick coat",
      "🌬️ Allow each coat to dry completely before applying the next",
      "🚱️ Apply a base coat to prevent staining and extend polish life",
      "✨ Finish with a top coat for extra shine and protection",
      "🎯 Cap the free edge of your nail with polish to help prevent early chipping"
    ],
    health: [
      "🍎 Eat a balanced diet rich in biotin (eggs, nuts, salmon)",
      "💧 Stay hydrated to prevent brittle nails",
      "🚭 Avoid using your nails as tools to prevent breakage",
      "🧺 Consult a dermatologist for persistent nail problems",
      "🧴 Don't cut your cuticles - gently push them back instead",
      "⛔ Don't pick at chipped polish — it can take layers of your nail with it"
    ],
    seasonal: [
      "❄️ In winter, apply extra moisturizer to combat dryness",
      "☀️ Use UV-protective top coats in summer to prevent discoloration",
      "🌧️ Wear gloves in rainy weather to prevent waterlogged nails",
      "🍂 Fall is perfect for deep conditioning treatments",
      "🌸 Spring is ideal for lighter, breathable polish formulas",
      "🎒 During back-to-school season, simplify your routine with long-lasting gel polish"
    ],
    "salon-feature": [
      "👑 10+ years in Brantford with 20+ years combined experience",
      "🏱 Gift certificates NEVER expire - perfect anytime gift",
      "💫 Special packages available",
      "🍩 Our cozy Brantford location used to be a donut shop"
    ],
    service: [
      "♿ Wheelchair-friendly pedicure stations available",
      "🧳 Special violet butterfly chairs for kids' manicures",
      "💼 Expert grooming services for gentlemen",
      "🧼 Hospital-grade sterilization for all tools",
    ],
    policy: [
      "💖 No cancellation fees - we understand life happens",
      "🔒 Privacy-focused service with discreet options",
      "🔄 100% satisfaction guarantee on all services",
      "🧾 Receipts available upon request for all services and payments",
      "👥 Group bookings welcome",
      "🧍 Walk-ins are welcome, appointments are recommended"
    ],
  };

  const handleCategoryChange = (category: TipCategory) => {
    setActiveCategory(category);
  };

  const categories: TipCategory[] = [
    "general",
    "manicure",
    "health",
    "seasonal",
    "salon-feature",
    "service",
    "policy",
  ];

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
      ref={sectionRef}
      className="relative z-10 max-w-5xl p-6 mx-auto mb-12 text-gray-800 dark:text-white"
    >
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <Icon
            icon="arcticons:connected-care"
            className="size-14 text-indigo-800 stroke-[1.5px]"
          />
          <h2 className="text-4xl font-semibold text-indigo-800 md:text-5xl">
            Nail Care Tips & Advice
          </h2>
        </div>
        <p className="z-20 text-2xl font-medium text-indigo-500">
          Expert recommendations from Royal Nails & Spa
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 border ${
              activeCategory === category
                ? " bg-gradient-to-tr from-indigo-400 via-pink-400 to-blue-400 text-white shadow-md"
                : "bg-white text-violet-500 border-violet-600 hover:bg-violet-50"
            }`}
          >
            {category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
        {(nailTips[activeCategory] || []).map((tip, index) => {
          const emojiMatch = tip.match(/^[^\s]+/);
          const emoji = emojiMatch ? emojiMatch[0] : "💅";
          const text = tip.replace(/^[^\s]+\s/, "");

          return (
            <div
              key={index}
              className="p-4 transition-transform bg-white rounded-lg shadow dark:bg-gray-800 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{emoji}</div>
                <div className="text-sm leading-relaxed text-violet-900">
                  {text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 text-center text-white rounded-lg bg-gradient-to-tr from-indigo-400 via-pink-400 to-blue-400 ">
        <h3 className="mb-2 text-xl font-semibold">Professional Advice</h3>
        <p className="max-w-xl mx-auto mb-4">
          While these tips are helpful, nothing beats professional care. Visit
          us at <span className="font-semibold">Royal Nails & Spa</span> for
          personalized nail care recommendations and premium treatments tailored
          to your nail type and lifestyle.
        </p>
        <button className="px-6 py-2 font-bold transition-all bg-white rounded-full text-violet-600 hover:bg-violet-50">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default TipsPage;
