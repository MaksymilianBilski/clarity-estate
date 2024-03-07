import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex shrink">
      <ul className=" list-none space-x-2 sm:hidden md:flex md:justify-center">
        <li className="leading-[24px] duration-200  hover:text-blue-400">
          <Link href="" className="hover:border-b-2 hover:border-blue-400">
            Firma
          </Link>
        </li>
        <li className=" leading-[24px] duration-200  hover:text-blue-400">
          <Link href="" className="hover:border-b-2 hover:border-blue-400">
            Portfolio
          </Link>
        </li>
        <li className=" leading-[24px] duration-200  hover:text-blue-400">
          <Link href="" className="hover:border-b-2 hover:border-blue-400">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};
