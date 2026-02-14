import React from "react";
import { Utensils, Pizza, Clock, ChevronDown, Flame } from "lucide-react"; // Added Flame
import { useNavigate } from "react-router-dom";
import logo from "../assets/millslogo.png";
import bg from "../assets/grilbg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]"
    >
      {/* Background Image - Cleaned Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Grill background"
          className="w-full h-full object-cover scale-100"
        />
        {/* Only a light bottom fade to ensure content pop, removed the heavy black/gradient overlays */}
        <div className="absolute inset-0 bg-black/20" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            
            {/* Welcome Badge with Fire Icon */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 border border-primary/40 backdrop-blur-md rounded-full shadow-lg">
              <Flame className="w-4 h-4 text-primary fill-primary/20 animate-pulse" />
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                Välkommen till
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Milli's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Grill
              </span>
              <br />
              <span>& Pizza</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-100 max-w-lg font-medium leading-relaxed border-l-4 border-primary pl-6 hidden lg:block drop-shadow-md">
              Din plats för utsökta grillrätter och en trivsam, inbjudande
              atmosfär. Vi sätter alltid smak och kvalitet i fokus.
            </p>

            <p className="text-lg sm:text-xl text-gray-100 max-w-lg font-medium leading-relaxed lg:hidden drop-shadow-md">
              Din plats för utsökta grillrätter och en trivsam, inbjudande
              atmosfär. Vi sätter alltid smak och kvalitet i fokus.
            </p>

            {/* Lunch Offer - Single Simplified Box */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm mb-2">
                    <Utensils className="w-5 h-5" />
                    Lunch Erbjudande
                  </div>
                  <p className="text-white/90 text-sm font-medium mb-2">
                    Inkl. sallad, dricka, bröd, kaffe
                  </p>
                  <div className="flex items-center gap-1.5 text-orange-300 text-xs font-bold bg-black/20 w-fit px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    Vardagar 10:00 – 14:00
                  </div>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black text-white drop-shadow-lg">125:-</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => navigate("/grill")}
                className="group relative px-8 py-4 bg-primary text-black font-extrabold uppercase tracking-wider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Grill Meny
                </span>
              </button>

              <button
                onClick={() => navigate("/pizza")}
                className="group px-8 py-4 bg-white/10 border-2 border-white/50 text-white font-extrabold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-center gap-2">
                  <Pizza className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Pizza Meny
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold drop-shadow-lg">
          Scrolla ner
        </span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;