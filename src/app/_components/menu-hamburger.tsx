import { useState } from "react";

export const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="flex md:hidden">
      <div
        className="cursor-pointer space-y-2"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className=" block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
      </div>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute right-0 top-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 cursor-pointer text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex min-h-[250px] flex-col items-center justify-between">
          <li className="my-8 border-b border-gray-400 uppercase">
            <a href="/about">About</a>
          </li>
          <li className="my-8 border-b border-gray-400 uppercase">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="my-8 border-b border-gray-400 uppercase">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>{" "}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </section>
  );
};
