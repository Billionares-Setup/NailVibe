import { Icon } from "@iconify/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);
const toay = new Date();
  
  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-tr from-pink-100 via-slate-100 to-white py-16 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-800">Contact Us</h3>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Royal Nails & Spa</p>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            161 Colborne St W, Brantford, ON N3T 1L2</p>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Phone: (519) 304-9044</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-center">
            <h3 className="text-xl font-semibold text-indigo-800">Follow Us</h3>
            <div className="flex justify-center gap-4 text-2xl">
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-black transition-colors"
                >
            <Icon icon="mdi:facebook" />
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-black transition-colors"
                >
                <Icon icon="mdi:instagram" />
            </a>
        </div>
    </div>


        {/* Credits */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-800">Hours</h3>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Mon - Fri: 9am – 7pm</p>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Sat: 9am – 6pm</p>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Sun: Closed</p>
          <p className="text-sm text-gray-600 text-indigo-800 mt-1"
          style={{ fontFamily: '"Open Sans", sans-serif' }}>
            © {toay.getFullYear()} Royal Nails & Spa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
