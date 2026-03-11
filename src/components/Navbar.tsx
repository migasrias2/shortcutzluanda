import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shortcutzLogo from "../../ShortcutzLuanda_Logowhatsapp-removebg-preview.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 text-black transition-all duration-300 ${
        isScrolled ? "border-b-2 border-black bg-white shadow-lg" : "border-b-2 border-black bg-white shadow-md"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link to="/" aria-label="Shortcutz home">
          <img
            src={shortcutzLogo}
            alt="Luanda Shortcutz logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-black">
          <Link to="/" className="hover:text-neutral-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-neutral-600 transition-colors">About Us</Link>
        </div>
      </div>
    </nav>
  );
};



