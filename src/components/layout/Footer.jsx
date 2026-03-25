import { ArrowRight } from "lucide-react";
import { AppLogo } from "../ui/AppLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = () => {
    window.open("https://www.bilalturkmen.com", "_blank");
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <div
            className="flex-center"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <AppLogo width={32} height={32} />
            <h2 className="footer-logo-text">
              Pixel <span>Grid</span>
            </h2>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span>Available</span>
            </div>
          </div>
          <p className="footer-tagline">
            © {currentYear} Built with React & Passion
          </p>
          <button className="back-to-top" onClick={scrollToTop}>
            Back to top
            <ArrowRight size={16} style={{ transform: "rotate(-90deg)" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
