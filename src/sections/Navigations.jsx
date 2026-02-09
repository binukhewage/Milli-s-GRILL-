import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import logo from "../assets/millslogo.png";

const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine if we are on the home page for specific styling if needed
  const isHome = location.pathname === "/";

  const links = [
    { path: "/", label: "Hem" },
    { path: "/grill", label: "Grill Meny" },
    { path: "/pizza", label: "Pizza Meny" },
    { path: "/sallader", label: "Sallader" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Styling logic: If scrolled OR not on home page, show solid background
  const navBackground = scrolled || !isHome 
    ? "bg-[#0a0f1a]/95 backdrop-blur-md shadow-lg py-2" 
    : "bg-transparent py-4";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Millis Grill & Pizza" className="h-16 md:h-20 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded ${
                    location.pathname === link.path 
                      ? "text-primary" 
                      : (scrolled || !isHome ? "text-white hover:text-primary" : "text-white text-shadow-nav hover:text-primary")
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
                <a href="https://www.facebook.com/millisgrillpizza/" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/millisgrillpizza/" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white hover:text-primary transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0a0f1a] shadow-2xl transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="pt-24 px-6">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 hover:bg-white/5 rounded transition-all duration-300 font-semibold uppercase tracking-wider ${location.pathname === link.path ? "text-primary" : "text-white hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Social icons for mobile */}
            <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-white/20">
              <a href="https://www.facebook.com/millisgrillpizza/" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-primary hover:bg-white/10 rounded">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/millisgrillpizza/" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-primary hover:bg-white/10 rounded">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;