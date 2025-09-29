import { MobileNavbar } from "../mobile-navbar";
import { DesktopNavbar } from "../desktop-navbar";

const Navbar = () => {
  return (
    <nav className="relative z-10 xl:mr-12 overflow-x-clip">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
