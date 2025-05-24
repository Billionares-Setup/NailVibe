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
      className="z-50 px-8 py-16 border-t bg-gradient-to-tr from-indigo-400 via-pink-400 to-blue-400 md:px-24 border-violet-800"
    >
      <div className="grid grid-cols-1 gap-6 mx-auto text-left max-w-7xl sm:grid-cols-3 sm:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Royal Nails & Spa
          </p>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            161 Colborne St W, Brantford, ON N3T 1L2
          </p>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Phone: +1(519) 304-9044
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start sm:items-center ">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex items-center justify-center gap-4 mt-3 text-xl text-white">
            <a
              href="https://www.facebook.com/RoyalNailsandSpaBrantford"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 transition-colors hover:text-black"
            >
              <Icon
                icon="qlementine-icons:facebook-24"
                className="text-white size-8 "
              />
            </a>
            <a
              href="https://www.instagram.com/royalnailsbrantford/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 transition-colors hover:text-black"
            >
              <Icon icon="hugeicons:instagram" className="text-white size-9" />
            </a>
            <a
              href="mailto:royalnailsbrantford1@gmail.com"
              className="text-indigo-600 transition-colors hover:text-black"
            >
              <Icon icon="mdi-light:email" className="text-white size-10" />
            </a>
          </div>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-xl font-semibold text-white ">Hours</h3>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Mon - Fri: 9am – 7pm
          </p>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Sat: 9am – 6pm
          </p>
          <p
            className="mt-1 text-sm text-white"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Sun: Closed
          </p>
          <p
            className="mt-1 text-sm text-white"
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
