import Link from "next/link";
import { Navbar } from "./navbar";
import { HamburgerMenu } from "./menu-hamburger";
import { HeaderContact } from "./header-contact";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className=" border-b-2 ">
      <div className="md:space- flex items-center sm:justify-around md:justify-evenly">
        <Logo />
        <Navbar />
        <HamburgerMenu />
        <HeaderContact />
      </div>
    </header>
  );
};
