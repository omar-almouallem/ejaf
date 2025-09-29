import Image from "next/image";
import { Navbar } from "../navbar";
import { SlideUp } from "@/app/_animations";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg backdrop-blur-lg">
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-3 md:py-5 flex justify-between items-center">
        <SlideUp
          delay={0.1}
          duration={0.4}
          className="flex-shrink-0 flex items-center"
        >
          <Link href="/">
            <Image
              src="/assets/shared/logo.png"
              alt="Company Logo"
              width={120}
              height={60}
              className="h-8 w-auto sm:h-10 lg:h-10 xl:h-12"
              priority
            />
          </Link>
        </SlideUp>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
