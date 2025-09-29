"use client";

import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "../contact-us";
import { Fade, SlideUp } from "@/app/_animations";
import { useQuery } from "@tanstack/react-query";
import { getFooterInfo } from "@/requests/shared";
import { FooterSkeleton } from "../skeletons";

const Footer = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["footerInfo"],
    queryFn: getFooterInfo,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <FooterSkeleton />;
  }
  if (error) {
    return (
      <section className="min-h-dvh">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  const { phone, email, location, facebook, twitter, instagram, youtube } =
    data;
  return (
    <footer>
      <ContactUs />
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-5 xl:pt-11 bg-hero-radial-gradient bg-left">
        <section className="pb-7">
          <div className="flex gap-4 flex-col lg:flex-row lg:justify-between">
            <div className="space-y-5">
              <div className="space-y-5">
                <SlideUp delay={0.1} duration={0.4}>
                  <Image
                    src="/assets/shared/footer-logo.png"
                    className="w-32 xl:w-[175px]"
                    alt="compant logo"
                    width={175}
                    height={87}
                  />
                </SlideUp>
                <SlideUp
                  distance={80}
                  duration={1}
                  delay={0.4}
                  staggerChildren={0.1}
                  className="flex gap-4"
                >
                  <a
                    href={facebook}
                    target="_blank"
                    className="w-10 h-10 border border-main-color rounded-full flex items-center justify-center hover:bg-main-color transition-colors cursor-pointer text-main-color hover:text-black"
                    role="link"
                    aria-label="link to facebook website"
                  >
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        d="M4.60761 7.86861C3.94413 7.86861 3.80566 7.99882 3.80566 8.62257V9.75354C3.80566 10.3774 3.94413 10.5075 4.60761 10.5075H6.21151V15.0313C6.21151 15.6551 6.34997 15.7853 7.01345 15.7853H8.61735C9.28085 15.7853 9.41928 15.6551 9.41928 15.0313V10.5075H11.2202C11.7234 10.5075 11.8531 10.4156 11.9913 9.96071L12.335 8.82974C12.5718 8.05053 12.4259 7.86861 11.5639 7.86861H9.41928V5.98371C9.41928 5.56731 9.77831 5.22974 10.2212 5.22974H12.5037C13.1672 5.22974 13.3057 5.09955 13.3057 4.47577V2.96783C13.3057 2.34405 13.1672 2.21387 12.5037 2.21387H10.2212C8.0067 2.21387 6.21151 3.90168 6.21151 5.98371V7.86861H4.60761Z"
                      />
                    </svg>
                  </a>
                  <a
                    href={twitter}
                    target="_blank"
                    className="w-10 h-10 border border-main-color rounded-full flex items-center justify-center hover:bg-main-color text-main-color hover:text-black transition-colors cursor-pointer"
                    role="link"
                    aria-label="link to twitter website"
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.05566 17.5L9.346 11.2097M9.346 11.2097L3.05566 2.5H7.22233L11.7653 8.79033M9.346 11.2097L13.889 17.5H18.0557L11.7653 8.79033M18.0557 2.5L11.7653 8.79033"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={instagram}
                    target="_blank"
                    className="w-10 h-10 border border-main-color rounded-full flex items-center justify-center hover:bg-main-color text-main-color hover:text-black transition-colors cursor-pointer"
                    role="link"
                    aria-label="link to instagram website"
                  >
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.10938 8.99965C2.10938 5.96078 2.10937 4.44134 3.05343 3.49728C3.99749 2.55322 5.51693 2.55322 8.5558 2.55322C11.5947 2.55322 13.1141 2.55322 14.0582 3.49728C15.0022 4.44134 15.0022 5.96078 15.0022 8.99965C15.0022 12.0385 15.0022 13.558 14.0582 14.5021C13.1141 15.4461 11.5947 15.4461 8.5558 15.4461C5.51693 15.4461 3.99749 15.4461 3.05343 14.5021C2.10937 13.558 2.10938 12.0385 2.10938 8.99965Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6091 8.99986C11.6091 10.6863 10.242 12.0534 8.55552 12.0534C6.86908 12.0534 5.50195 10.6863 5.50195 8.99986C5.50195 7.31342 6.86908 5.94629 8.55552 5.94629C10.242 5.94629 11.6091 7.31342 11.6091 8.99986Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12.2932 5.26758H12.2871"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={youtube}
                    target="_blank"
                    className="w-10 h-10 border border-main-color rounded-full flex items-center justify-center hover:bg-main-color transition-colors cursor-pointer group"
                    role="link"
                    aria-label="link to youtube website"
                  >
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55622 14.7676C9.78423 14.7676 10.9618 14.6463 12.0532 14.4239C13.4164 14.146 14.098 14.007 14.72 13.2073C15.3419 12.4076 15.3419 11.4897 15.3419 9.65359V8.34599C15.3419 6.50993 15.3419 5.59192 14.72 4.79222C14.098 3.99253 13.4164 3.85359 12.0532 3.57571C10.9618 3.35324 9.78423 3.23193 8.55622 3.23193C7.32821 3.23193 6.15061 3.35324 5.05925 3.57571C3.69606 3.85359 3.01447 3.99253 2.39249 4.79222C1.77051 5.59192 1.77051 6.50993 1.77051 8.34599V9.65359C1.77051 11.4897 1.77051 12.4076 2.39249 13.2073C3.01447 14.007 3.69606 14.146 5.05925 14.4239C6.15061 14.6463 7.32821 14.7676 8.55622 14.7676Z"
                        className="fill-main-color group-hover:fill-black transition-colors"
                      />
                      <path
                        d="M11.2448 9.21232C11.1441 9.6234 10.6083 9.91865 9.53669 10.5092C8.37111 11.1514 7.78835 11.4726 7.31634 11.3489C7.15647 11.3069 7.00921 11.2332 6.88557 11.1333C6.52051 10.8382 6.52051 10.2254 6.52051 9C6.52051 7.77457 6.52051 7.16183 6.88557 6.86669C7.00921 6.76673 7.15647 6.69305 7.31634 6.65115C7.78835 6.52743 8.37111 6.84855 9.53669 7.49081C10.6083 8.08135 11.1441 8.3766 11.2448 8.78767C11.2791 8.9276 11.2791 9.0724 11.2448 9.21232Z"
                        className="fill-black group-hover:fill-main-color transition-colors"
                      />
                    </svg>
                  </a>
                </SlideUp>
              </div>
              <Fade
                duration={1}
                delay={0.5}
                staggerChildren={0.15}
                className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8 text-neutral-50"
              >
                <Link
                  href="/about"
                  className="font-medium text-lg xl:text-xl hover:text-main-color transition-colors cursor-pointer"
                  role="link"
                  aria-label="link to about us page"
                >
                  About Us
                </Link>
                <Link
                  href="/solutions"
                  className="font-medium text-lg xl:text-xl hover:text-main-color transition-colors cursor-pointer"
                  role="link"
                  aria-label="link to solutions page"
                >
                  Solutions
                </Link>
                <a
                  href="#services"
                  className="font-medium text-lg xl:text-xl hover:text-main-color transition-colors cursor-pointer"
                  role="link"
                  aria-label="link to services section"
                >
                  Services
                </a>
                <Link
                  href="/support"
                  className="font-medium text-lg xl:text-xl hover:text-main-color transition-colors cursor-pointer"
                  role="link"
                  aria-label="link to support page"
                >
                  Support
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-lg xl:text-xl hover:text-main-color transition-colors cursor-pointer"
                  role="link"
                  aria-label="link to contact us page"
                >
                  Contact Us
                </Link>
              </Fade>
            </div>
            <div className="flex justify-between items-end gap-4 flex-col sm:flex-row">
              <Fade
                duration={1}
                delay={0.5}
                staggerChildren={0.15}
                className="space-y-4 w-full xl:max-w-[260px]"
              >
                {location.length > 0 &&
                  location.map(({ label, url }) => (
                    <div className="flex items-center xl:items-center gap-[10px]">
                      <div className="min-w-10 h-10 xl:min-w-11 xl:h-11 bg-main-color rounded-full grid place-items-center">
                        <Image
                          width={24}
                          height={24}
                          src="/assets/shared/map-pin.png"
                          alt="map pin icon"
                        />
                      </div>
                      <Link
                        className="xl:w-[205px] text-lg sm:text-base text-neutral-50 cursor-pointer"
                        href={url}
                      >
                        {label}
                      </Link>
                    </div>
                  ))}
              </Fade>
              <Fade
                duration={1}
                delay={0.5}
                staggerChildren={0.15}
                className="md:items-end space-y-4 w-full xl:max-w-[200px]"
              >
                <div className="flex items-center gap-[10px]">
                  <div className="min-w-10 h-10 xl:min-w-11 xl:h-11 p-[10px] bg-main-color rounded-full flex items-center justify-center">
                    <Image
                      width={24}
                      height={24}
                      src="/assets/shared/email.png"
                      alt="email icon"
                    />
                  </div>
                  <Link
                    className="text-lg sm:text-base w-full text-neutral-50 cursor-pointer"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Link>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="min-w-10 h-10 xl:min-w-11 xl:h-11 p-[10px] bg-main-color rounded-full flex items-center justify-center">
                    <Image
                      width={24}
                      height={24}
                      src="/assets/shared/call.png"
                      alt="call icon"
                    />
                  </div>
                  <Link
                    className="text-lg sm:text-base w-full text-neutral-50 cursor-pointer"
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="border-t border-main-color/30 pt-7">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center flex-wrap gap-7">
              <Link
                href="/privacy-policy"
                className="text-lg text-main-color/40 hover:text-main-color transition-all ease-out duration-200"
                role="link"
                aria-label="link to privacy policy page"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-lg text-main-color/40 hover:text-main-color transition-all ease-out duration-200"
                role="link"
                aria-label="link to terms of use page"
              >
                Terms Of Use
              </Link>
            </div>
            <div className="text-lg text-center text-main-color/40">
              <p>&copy; 2025 Powered by LARSA</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
