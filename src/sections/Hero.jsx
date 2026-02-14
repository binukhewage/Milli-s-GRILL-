import React from "react";
import { Utensils, Pizza, Clock, ChevronDown } from "lucide-react";
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
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Grill background"
          className="w-full h-full object-cover scale-100 animate-pulse-slow"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0f1a]/60 to-black/80" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-primary/30 backdrop-blur-md rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-medium text-xs uppercase tracking-[0.2em]">
                Välkommen till
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
              Milli's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Grill
              </span>
              <br />
              <span>& Pizza</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-lg font-light leading-relaxed border-l-4 border-primary/50 pl-6 hidden lg:block">
              Din plats för utsökta grillrätter och en trivsam, inbjudande
              atmosfär. Vi sätter alltid smak och kvalitet i fokus.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 max-w-lg font-light leading-relaxed lg:hidden">
              Din plats för utsökta grillrätter och en trivsam, inbjudande
              atmosfär. Vi sätter alltid smak och kvalitet i fokus.
            </p>

            {/* Lunch Offer */}
            <div className="w-full max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="bg-[#0d1321]/80 rounded-lg p-5 flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-1">
                    <Utensils className="w-4 h-4" />
                    Lunch Erbjudande
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">
                    Inkl. sallad, dricka, bröd, kaffe
                  </p>
                  <div className="flex items-center gap-1.5 text-orange-200 text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    Vardagar 10:00 – 14:00
                  </div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <span className="text-3xl font-bold text-white">125:-</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => navigate("/grill")}
                className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-lg overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Grill Meny
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <button
                onClick={() => navigate("/pizza")}
                className="group px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-light">
          Scrolla ner
        </span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
