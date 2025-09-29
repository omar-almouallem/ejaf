"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Fade, SlideUp } from "@/app/_animations";
import { services } from "../data/services";
import { usePathname } from "next/navigation";

export default function DesktopNavbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const isServiceActive = () => pathname.startsWith("/services/");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  const NavLink = ({ href, label }) => (
    <Link
      href={href}
      className={`relative block px-3 pb-2 pt-8 font-medium capitalize text-lg 2xl:text-xl transition-all duration-300 rounded-lg group ${
        isActive(href)
          ? "activeLink text-neutral-900"
          : "text-main-color hover:text-main-color/90"
      }`}
      role="link"
      aria-label={`link to ${label} page`}
    >
      {label}
    </Link>
  );

  return (
    <SlideUp
      distance={20}
      duration={0.7}
      staggerChildren={0.1}
      className="hidden lg:flex lg:min-h-[65px] lg:-mt-6 lg:items-center lg:gap-2 xl:gap-4"
    >
      <NavLink href="/" label="home" />
      <NavLink href="/about" label="about us" />
      <NavLink href="/solutions" label="solutions" />
      <div className="relative" ref={servicesRef}>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className={`relative px-3 pb-2 pt-8 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl rounded-lg flex items-center group transition-all cursor-pointer focus:outline-none ${
            isServiceActive()
              ? "activeLink text-gray-900"
              : "text-main-color hover:opacity-90"
          }`}
          role="button"
          aria-label="services menu button"
        >
          Services
          <ChevronDown
            className={`ml-1 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 translate-y-0.5 transition-transform ${
              isServicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isServicesOpen && (
          <div className="absolute left-0 top-full z-50 mt-3 w-64 lg:w-72 xl:w-80 2xl:w-96 overflow-hidden bg-neutral-900 backdrop-blur-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 rounded-lg p-2">
            <Fade duration={0.3} staggerChildren={0.15} className="p-0 w-full">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.address}`}
                  onClick={() => setIsServicesOpen(false)}
                  className={`block px-3 py-1 my-1 font-medium text-lg 2xl:text-xl rounded-lg transition-all duration-150 ease-in-out ${
                    isActive(`/services/${service.address}`)
                      ? "bg-main-color text-gray-900"
                      : "text-main-color hover:bg-main-color hover:text-gray-900"
                  }`}
                  role="link"
                  aria-label={`link to ${service.name} page`}
                >
                  {service.name}
                </Link>
              ))}
            </Fade>
          </div>
        )}
      </div>
      <NavLink href="/insight" label="insight" />
      <NavLink href="/support" label="support" />
      <NavLink href="/blog" label="blog" />
      <NavLink href="/contact" label="contact us" />
    </SlideUp>
  );
}
