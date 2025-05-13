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
  { name: "Home", href: "#", current: true },
  { name: "Team", href: "#", current: false },
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
      { y: "-100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "bounce.out", // bounce effect
      }
    );
  });

  return (
    <Disclosure
      ref={navAnimation}
      as="nav"
      className="bg-gray-100/50 z-50 sticky top-0 shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Icon icon="mdi-light:home" /> <Icon icon="mdi-light:home" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src={royalLogo}
                alt="Royal Nails & Spa Logo"
                className=" size-[3em] rounded-full border-2 border-violet-300"
              />
              <div className="flex shrink-0 items-center">
                <style>
                  {`@import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');`}
                  {`@import url('https://fonts.googleapis.com/css2?family=Ephesis&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');`}
                </style>
                <span
                  className="text-indigo-800 font-medium text-3xl mx-2"
                  style={{ fontFamily: "Ephesis, cursive", fontSize: "2rem" }}
                >
                  Royal
                </span>
                <span
                  className=" text-xs text-indigo-800 "
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-violet-300 text-violet-900"
                        : "text-violet-500 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
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
        <div className="space-y-1 px-2 pt-2 pb-3">
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
