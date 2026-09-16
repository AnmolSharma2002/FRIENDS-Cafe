import {
  ArrowRight,
  Camera,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

function Wordmark() {
  return (
    <span className="wordmark">
      <span>central</span>
      <strong>perk</strong>
      <i>since 1994</i>
    </span>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link
        className="brand-link"
        to="/"
        aria-label="Central Perk home"
        onClick={closeMenu}
      >
        <Wordmark />
      </Link>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        <NavLink to="/menu" onClick={closeMenu}>
          The menu
        </NavLink>
        <NavLink to="/story" onClick={closeMenu}>
          Our story
        </NavLink>
        <NavLink to="/visit" onClick={closeMenu}>
          Find us
        </NavLink>
        <NavLink
          className="nav-reserve"
          to="/visit#reserve"
          onClick={closeMenu}
        >
          Get a table <ArrowRight size={15} />
        </NavLink>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
      </button>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer>
      <Link className="brand-link footer-brand" to="/">
        <span className="wordmark">
          <span>central</span>
          <strong>perk</strong>
          <i>since 1994</i>
        </span>
      </Link>
      <p>
        For when you need a little <em>Joey</em> in your day.
      </p>
      <div className="footer-social">
        <a href="https://instagram.com" aria-label="Instagram">
          <Camera size={18} />
        </a>
        <a href="mailto:hello@centralperk.cafe" aria-label="Email us">
          <ChevronDown size={18} />
        </a>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
