import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          shortcutz
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest uppercase">
          <Link to="#" className="hover:text-primary transition-colors">Shortcutz</Link>
          <Link to="#" className="hover:text-primary transition-colors">Network</Link>
          <Link to="#" className="hover:text-primary transition-colors">Watch</Link>
          <Link to="#" className="hover:text-primary transition-colors">Pitch</Link>
          <Link to="#" className="hover:text-primary transition-colors">Festival</Link>
        </div>
      </div>
    </nav>
  );
};



