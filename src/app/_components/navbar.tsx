export const Navbar = () => {
  return (
    <nav>
      <ul className="w-[320px] list-none space-x-2 sm:hidden md:flex">
        <li className="py-3 leading-[24px] duration-200 hover:border-b-2 hover:border-blue-400 hover:text-blue-400">
          <a href="" className="">
            Firma
          </a>
        </li>
        <li className="py-3 leading-[24px] duration-200 hover:border-b-2 hover:border-blue-400 hover:text-blue-400">
          <a href="" className="">
            Portfolio
          </a>
        </li>
        <li className="py-3 leading-[24px] duration-200 hover:border-b-2 hover:border-blue-400 hover:text-blue-400">
          <a href="" className="">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
