import Link from "next/link";
import { Navbar } from "./navbar";
import { HamburgerMenu } from "./menu-hamburger";
import { HeaderContact } from "./header-contact";

export const Header = () => {
  return (
    <header className="border-b-1">
      <div className="flex items-center space-x-2 sm:justify-around">
        <Link
          className="border-b-2 border-cyan-500 text-cyan-600  drop-shadow-2xl transition-all hover:text-cyan-500 sm:text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[28px]"
          href="/"
        >
          <span className="">Clarity </span>
          <span className="">Estate</span>
        </Link>
        <div className="flex">
          <Navbar />
          <HamburgerMenu />
          <HeaderContact />
        </div>
      </div>
    </header>
  );
};
