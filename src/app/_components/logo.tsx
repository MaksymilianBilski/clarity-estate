import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      className="border-b-2 border-cyan-500 text-cyan-600 drop-shadow-2xl  transition-all hover:text-cyan-500 sm:text-[22px] md:text-[20pxx] lg:text-[26px] 2xl:text-[28px]"
      href="/"
    >
      <span className="">Clarity </span>
      <span className="">Estate</span>
    </Link>
  );
};
