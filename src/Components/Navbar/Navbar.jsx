import React from "react";
import ThemeToggle from "../../Theme/ThemeToggle";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a
          href="#home"
          className="hover:text-[color:var(--app-fg)] transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-[color:var(--app-fg)] transition-colors"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-[color:var(--app-fg)] transition-colors"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed z-50 top-3 sm:top-4 lg:top-5 left-1/2 -translate-x-1/2 w-full px-3 sm:px-4 md:px-0">
      <div className="navbar mx-auto w-full max-w-[1100px] rounded-full px-3 sm:px-5 py-2 bg-[color:var(--app-nav-bg)] backdrop-blur-xl border border-[color:var(--app-border)] shadow-[0_18px_50px_rgba(0,0,0,0.45)] text-[color:var(--app-muted)]">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl p-2 bg-[color:var(--app-dropdown-bg)] border border-[color:var(--app-border)] backdrop-blur-xl shadow-xl"
            >
              {navItems}
            </ul>
          </div>

          <a href="#home" className="btn btn-ghost btn-sm text-base sm:text-lg text-[color:var(--app-fg)]">
            Portfolio
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{navItems}</ul>
        </div>

        <div className="navbar-end gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn btn-sm bg-[color:var(--app-accent)] hover:bg-[color:var(--app-accent-hover)] border-none text-white shadow-[0_0_30px_var(--app-glow-strong)]"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;