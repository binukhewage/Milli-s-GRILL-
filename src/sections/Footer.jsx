import React from 'react';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-white uppercase">
              Milli's <span className="text-primary">Grill</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Din plats för utsökta grillrätter och en trivsam, inbjudande atmosfär. Vi sätter alltid smak och kvalitet i fokus.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 relative inline-block">
              Snabblänkar
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Hem", id: "#hem" },
                { label: "Grill Meny", id: "#grill-meny" },
                { label: "Pizza Meny", id: "#pizza-meny" },
                { label: "Sallader", id: "#sallader" },
                { label: "Kontakt", id: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-primary/50 group-hover:text-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 relative inline-block">
              Kontakt
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 hover:text-white transition-colors">018-15 55 50</span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <div className="text-gray-300">
                  <p>Danmarksgatan 55</p>
                  <p>753 23 Uppsala</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div className="text-gray-300 space-y-1">
                  <div className="flex justify-between w-48">
                    <span>Mån – Fre:</span>
                    <span className="text-white font-medium">10:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Lör – Sön:</span>
                    <span className="text-white font-medium">11:00 – 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © Copyright 2026 - <span className="text-white font-semibold">Millis Grill & Pizza</span>. 
            Allt material på denna webbsida är skyddat enligt lagen om upphovsrätt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;