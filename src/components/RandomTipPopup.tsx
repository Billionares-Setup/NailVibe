import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

type TipCategory = 'nail-care' | 'salon-feature' | 'service' | 'policy' | 'general' | 'manicure' | 'health' | 'seasonal';

interface Tip {
  text: string;
  category: TipCategory;
  emoji: string;
}

const tipStyles: Record<TipCategory, string> = {
  general: 'bg-blue-600',
  manicure: 'bg-pink-500',
  health: 'bg-green-500',
  seasonal: 'bg-orange-400',
  'nail-care': 'bg-teal-500',
  'salon-feature': 'bg-purple-500',
  service: 'bg-indigo-500',
  policy: 'bg-yellow-500',
};

const RandomTipPopup = () => {
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState<Tip | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const allTips: Tip[] = [
    { text: "💧 Keep nails clean and dry to prevent bacteria", category: 'general', emoji: "💧" },
    { text: "✂️ Trim nails regularly with sharp clippers", category: 'general', emoji: "✂️" },
    { text: "💅 Use thin coats of polish for better results", category: 'manicure', emoji: "💅" },
    { text: "🍎 Eat biotin-rich foods for stronger nails", category: 'health', emoji: "🍎" },
    { text: "❄️ Extra moisturizer in winter prevents dryness", category: 'seasonal', emoji: "❄️" },
    { text: "🧤 Wear gloves when cleaning with chemicals", category: 'general', emoji: "🧤" },
    { text: "✨ Top coat adds shine and protects polish", category: 'manicure', emoji: "✨" },
    { text: "🚭 Avoid using nails as tools", category: 'health', emoji: "🚭" },
    { text: "👑 10+ years in Brantford", category: 'salon-feature', emoji: "👑" },
    { text: "💖 No cancellation fees - we understand life happens", category: 'policy', emoji: "💖" },
  ];

  const getRandomTip = () => {
    return allTips[Math.floor(Math.random() * allTips.length)];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const tip = getRandomTip();
      setCurrentTip(tip);
      setShowTip(true);
    }, 10000);

    const interval = setInterval(() => {
      const tip = getRandomTip();
      setCurrentTip(tip);
      setShowTip(true);
    }, (Math.floor(Math.random() * 240) + 120) * 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (showTip && popupRef.current && progressRef.current) {
      // Slide in
      gsap.fromTo(popupRef.current, { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });

      // Progress bar animation
      gsap.fromTo(progressRef.current, { scaleX: 1 }, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 8,
        ease: 'linear',
      });

      // Auto-dismiss after 8s
      const hideTimer = setTimeout(() => {
        gsap.to(popupRef.current, {
          x: 300,
          opacity: 0,
          duration: 0.5,
          onComplete: () => setShowTip(false),
        });
      }, 8000);

      return () => clearTimeout(hideTimer);
    }
  }, [showTip, currentTip]);

  if (!showTip || !currentTip) return null;

  return (
    <div
      ref={popupRef}
      className={`fixed top-5 right-5 w-80 text-white p-4 rounded-lg shadow-lg z-[1000] ${tipStyles[currentTip.category]}`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{currentTip.emoji}</span>
          <span className="font-bold text-xs uppercase opacity-90">
            {['salon-feature', 'service', 'policy'].includes(currentTip.category)
              ? 'Royal Nails Feature'
              : 'Nail Care Tip'}
          </span>
        </div>
        <button onClick={() => setShowTip(false)} className="text-white text-xl leading-none opacity-70 hover:opacity-100">
          &times;
        </button>
      </div>
      <p className="text-sm">{currentTip.text}</p>
      <div className="mt-3 h-1 bg-white/30 rounded overflow-hidden">
        <div ref={progressRef} className="h-full bg-white" />
      </div>
    </div>
  );
};

export default RandomTipPopup;
