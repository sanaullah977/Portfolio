import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-transparent text-[color:var(--app-muted)]">
      <aside>
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;