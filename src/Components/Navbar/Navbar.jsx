import React from "react";
import ThemeToggle from "../../Theme/ThemeToggle";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a
          href="#home"
          className="hover:text-[color:var(--app-fg)] transition-colors text-sm sm:text-base"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-[color:var(--app-fg)] transition-colors text-sm sm:text-base"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-[color:var(--app-fg)] transition-colors text-sm sm:text-base"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed z-50 
    top-2 sm:top-3 md:top-4 lg:top-5 
    left-1/2 -translate-x-1/2 
    w-auto px-2 sm:px-4 md:px-6">

      <div className="navbar mx-auto w-auto
      max-w-[95%] sm:max-w-[92%] md:max-w-[900px] lg:max-w-[1100px] 
      rounded-full 
      px-3 sm:px-5 md:px-6 
      py-1.5 sm:py-2 md:py-2.5 
      bg-[color:var(--app-nav-bg)] 
      backdrop-blur-xl 
      border border-[color:var(--app-border)] 
      shadow-[0_18px_50px_rgba(0,0,0,0.45)] 
      text-[color:var(--app-muted)]">

        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-xs sm:btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
              mt-3 w-44 sm:w-52 
              rounded-2xl p-2 
              bg-[color:var(--app-dropdown-bg)] 
              border border-[color:var(--app-border)] 
              backdrop-blur-xl shadow-xl"
            >
              {navItems}
            </ul>
          </div>

          <a 
            href="#home" 
            className="btn btn-ghost btn-xs sm:btn-sm 
            text-sm sm:text-base md:text-lg 
            text-[color:var(--app-fg)]"
          >
            Portfolio
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end gap-1 sm:gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn btn-xs sm:btn-sm 
            bg-[color:var(--app-accent)] 
            hover:bg-[color:var(--app-accent-hover)] 
            border-none text-white 
            shadow-[0_0_30px_var(--app-glow-strong)]"
          >
            Let’s Talk
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;