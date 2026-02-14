import React from "react";
import { Utensils, Pizza, Clock, ChevronDown, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/grilbg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]"
    >
      {/* Background Image - Natural Colors with subtle localized fade */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Grill background"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay only where needed for text contrast */}
        <div className="absolute inset-0 bg-[#0a0f1a]/20" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-fade-in-up">
            
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-primary/30 backdrop-blur-md rounded-full">
              <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                Välkommen till
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Milli's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Grill
              </span>
              <br />
              <span>& Pizza</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 max-w-md font-light leading-relaxed border-l-2 border-primary/60 pl-5 hidden lg:block">
              Din plats för utsökta grillrätter och en trivsam atmosfär. 
              Vi sätter alltid smak och kvalitet i fokus.
            </p>

            {/* Lunch Offer - Smaller & Dark Blue Glass */}
            <div className="w-full max-w-sm bg-[#0d1321]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px] mb-1">
                    <Utensils className="w-3.5 h-3.5" />
                    Lunch Erbjudande
                  </div>
                  <p className="text-gray-300 text-xs mb-2">
                    Inkl. sallad, dricka, bröd, kaffe
                  </p>
                  <div className="flex items-center gap-1.5 text-orange-200 text-[10px] font-medium opacity-80">
                    <Clock className="w-3 h-3" />
                    Vardagar 10:00 – 14:00
                  </div>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-2xl font-black text-white">125:-</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button
                onClick={() => navigate("/grill")}
                className="group px-8 py-3.5 bg-primary text-black font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Grill Meny
                </div>
              </button>

              <button
                onClick={() => navigate("/pizza")}
                className="group px-8 py-3.5 bg-[#0d1321]/40 border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2">
                  <Pizza className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Pizza Meny
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">
          Scrolla
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;