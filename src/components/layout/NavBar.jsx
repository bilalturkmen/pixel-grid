import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { AppLogo } from "../ui/AppLogo";
import { Menu, X } from "lucide-react";

const NavList = ({ className, onLinkClick }) => {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    ["hero", "projects", "skills", "recommendations", "contact"].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      },
    );

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={className}>
      {["Home", "Work", "Skills", "Testimonials", "Contact"].map((label) => {
        const target =
          label === "Home"
            ? "hero"
            : label === "Work"
              ? "projects"
              : label === "Testimonials"
                ? "recommendations"
                : label.toLowerCase();
        return (
          <a
            key={label}
            href={`#${target}`}
            onClick={onLinkClick}
            className={activeId === target ? "active" : ""}
          >
            {label}
          </a>
        );
      })}
      <div className="nav-theme-wrapper">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div
          className="flex-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <AppLogo width={36} height={36} />
          <h1>
            Pixel <span>Grid</span>
          </h1>
        </div>

        <NavList className="navbar-desktop-links" />

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-wrapper ${menuOpen ? "active" : ""}`}>
        <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="navbar-drawer">
          <NavList
            className="navbar-mobile-links"
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
