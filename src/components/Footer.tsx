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
      className="bg-violet-300 z-50 py-16 px-8 md:px-24 border-t border-violet-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p
            className="text-sm  text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Royal Nails & Spa
          </p>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            161 Colborne St W, Brantford, ON N3T 1L2
          </p>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Phone: +1(519) 304-9044
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start sm:items-center ">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center gap-6 text-xl text-white mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-black transition-colors"
            >
              <Icon
                icon="qlementine-icons:facebook-24"
                className="text-white size-8 "
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-black transition-colors"
            >
              <Icon icon="mdi:instagram" className="text-white size-9" />
            </a>
          </div>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-xl font-semibold text-white ">Hours</h3>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Mon - Fri: 9am – 7pm
          </p>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Sat: 9am – 6pm
          </p>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Sun: Closed
          </p>
          <p
            className="text-sm text-white mt-1"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            © {toay.getFullYear()} Royal Nails & Spa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
