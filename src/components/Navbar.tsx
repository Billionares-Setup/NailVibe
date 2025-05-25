import { Icon } from "@iconify/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import royalLogo from "../assets/RoyalNailsLogo.jpg";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  //GSAP for nav
  const navAnimation = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      navAnimation.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3.in",
      }
    );
  });

  return (
    <Disclosure
      ref={navAnimation}
      as="nav"
      className="sticky top-0 z-30 bg-gradient-to-tr from-indigo-400 via-pink-400 to-blue-400 "
    >
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Icon icon="mdi-light:home" /> <Icon icon="mdi-light:home" />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center shrink-0">
              <img
                src={royalLogo}
                alt="Royal Nails & Spa Logo"
                className=" size-[3em] rounded-full border-2 border-violet-300"
              />
              <div className="flex items-center shrink-0">
                <style>
                  {`@import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');`}
                  {`@import url('https://fonts.googleapis.com/css2?family=Ephesis&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');`}
                </style>
                <span
                  className="mx-2 text-3xl font-medium text-white"
                  style={{ fontFamily: "Ephesis, cursive", fontSize: "2rem" }}
                >
                  Royal
                </span>
                <span
                  className="text-xs text-white "
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "1rem",
                  }}
                >
                  Nails & Spa
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " bg-white  text-indigo-900 font-semibold hover:bg-white "
                        : " border  text-white  ",
                      "rounded-full px-3 py-2 text-sm hover:bg-blue-600/30 hover:scale-[108%] duration-300 ease-out "
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
