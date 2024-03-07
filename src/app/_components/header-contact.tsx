import Link from "next/link";
import { Icon } from "./icon";

export const HeaderContact = () => {
  return (
    <ul className="list-none flex-col items-start sm:hidden md:flex xl:flex-row xl:items-center">
      <li className="group">
        <Link
          className="font-[500] tracking-[0.02em] duration-200 group-hover:text-blue-400 sm:hidden md:flex md:text-[12px] lg:mr-2 lg:text-[13px] xl:text-[15px]"
          href="mailto:info@devstudio.com"
        >
          <Icon name="lucide/facebook"></Icon>
          clarity-estate@o2.pl
        </Link>
      </li>
      <li className="group">
        <Link
          className="font-[500] tracking-[0.02em] duration-200 group-hover:text-blue-400 sm:hidden md:flex md:text-[12px] lg:text-[13px] xl:text-[15px]"
          href="tel:+48111111111"
        >
          <Icon name="radix/mobile"></Icon>
          +48 111 111 111
        </Link>
      </li>
    </ul>
  );
};
