import React from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/millslogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src={logo}
                alt="Milli's Grill Logo"
                className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  Milli's <span className="text-primary">Grill</span>
                </h3>
                <span className="text-lg font-bold uppercase">& Pizza</span>
              </div>
            </Link>

            <p className="text-gray-400 max-w-sm">
              Din plats för utsökta grillrätter och en trivsam, inbjudande atmosfär.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold text-white uppercase mb-6 relative inline-block">
              Snabblänkar
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Hem", path: "/" },
                { label: "Grill Meny", path: "/grill" },
                { label: "Pizza Meny", path: "/pizza" },
                { label: "Sallader", path: "/sallader" },
                { label: "Kontakt", path: "/kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-primary transition"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-primary/50 group-hover:text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white uppercase mb-6 relative inline-block">
              Kontakt
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>

            <div className="space-y-6">

              {/* Phone */}
              <a
                href="tel:018155550"
                className="flex items-start gap-3 text-gray-300 hover:text-white transition"
              >
                <Phone className="w-5 h-5 text-primary mt-1" />
                <span>018-15 55 50</span>
              </a>

              {/* Address (Google Maps) */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Danmarksgatan+55+753+23+Uppsala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-white transition"
              >
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p>Danmarksgatan 55</p>
                  <p>753 23 Uppsala</p>
                </div>
              </a>

              {/* Hours */}
              <div className="pt-4 border-t border-white/10 text-gray-300">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-white font-bold text-sm uppercase">
                    Öppettider
                  </span>
                </div>

                <div className="flex justify-between max-w-[220px] text-sm pl-8">
                  <span>Mån – Fre:</span>
                  <span className="text-white">10:00 – 20:00</span>
                </div>

                <div className="flex justify-between max-w-[220px] text-sm pl-8">
                  <span>Lör – Sön:</span>
                  <span className="text-white">11:00 – 20:00</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-semibold">Millis Grill & Pizza</span>. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
