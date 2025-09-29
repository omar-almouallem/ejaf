"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Fade, SlideUp } from "@/app/_animations";
import { services } from "../data/services";

export default function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const isServiceActive = () => pathname.startsWith("/services/");

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="relative p-3 rounded-xl text-main-color hover:bg-main-color/10 transition-all duration-300 transform hover:scale-105"
        role="button"
        aria-label="navbar menu button"
      >
        <Menu className="w-6 h-6" />
      </button>

      <Dialog
        open={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/15 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-screen max-w-xs overflow-y-auto bg-neutral-900/95 backdrop-blur-xl shadow-2xl border-l border-neutral-700">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200/10">
              <div className="text-main-color font-bold text-xl">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-main-color hover:bg-main-color/10 transition-all duration-300 transform hover:scale-105"
                role="button"
                aria-label="close navbar button"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <SlideUp
              distance={80}
              duration={0.7}
              staggerChildren={0.1}
              className="flex-1 px-6 py-8 space-y-3"
            >
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to home page"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/about")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to about us page"
              >
                About Us
              </Link>
              <Link
                href="/solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/solutions")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to solutions page"
              >
                Solutions
              </Link>
              <Disclosure as="div" defaultOpen={isServiceActive()}>
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className={`flex w-full justify-between items-center px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        isServiceActive()
                          ? "bg-main-color text-gray-900 shadow-lg"
                          : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                      }`}
                      role="button"
                      aria-label="services menu button"
                    >
                      Services
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 ml-4 space-y-2 border-l-2 border-main-color/30 pl-4">
                      <Fade duration={1} delay={0.1} staggerChildren={0.15}>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.address}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left px-3 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:translate-x-1 ${
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
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <Link
                href="/insight"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/insight")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to insight page"
              >
                Insight
              </Link>
              <Link
                href="/support"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/support")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to support page"
              >
                Support
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/blog")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to contact us page"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive("/contact")
                    ? "bg-main-color text-gray-900 shadow-lg"
                    : "text-main-color hover:bg-main-color/10 hover:translate-x-1"
                }`}
                role="link"
                aria-label="link to contact us page"
              >
                Contact Us
              </Link>
            </SlideUp>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
