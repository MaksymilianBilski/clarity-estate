export const HeaderHamburgerMenu = () => {
  return (
    <div class="hamburger-menu">
      <button
        class="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <ul class="menu">
        <li>
          <a href="" class="mobile-menu__agency">
            Agencja
          </a>
        </li>
        <li>
          <a
            href="https://maksymilianbilski.github.io/goit-markup-hw-08/portfolio.html"
            class="mobile-menu__item"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="" class="mobile-menu__item">
            Kontakt
          </a>
        </li>
        <ul class="mobile-menu__contacts">
          <li>
            <a href="tel:+48111111111" class="mobile-menu__tel">
              +48 111 111 111
            </a>
          </li>
          <li>
            <a href="mailto:info@devstudio.com" class="mobile-menu__email">
              mailto:info@devstudio.com
            </a>
          </li>
        </ul>
        <ul class="mobile-menu-media mobile-menu-media">
          <li>
            <a href="" class="mobile-menu-media__item">
              Instagram
            </a>
          </li>
          <li>
            <a href="" class="mobile-menu-media__item">
              Twitter
            </a>
          </li>
          <li>
            <a href="" class="mobile-menu-media__item">
              Facebook
            </a>
          </li>
          <li>
            <a href="" class="mobile-menu-media__item">
              Linkedin
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};
