import React from "react";
import { Salad, Leaf } from "lucide-react";

// Replace with your actual salad image path
import saladHero from "../assets/sallader1.jpg";

const SaladMenu = () => {
  const salads = [
    {
      name: "Grekisk Sallad",
      price: "120:-",
      ingredients: "Fetaost, rödlök, oliver, sallad, gurka, tomat",
    },
    {
      name: "Räksallad",
      price: "120:-",
      ingredients: "Räkor, ägg, citron, majs, rödlök, sallad, gurka, tomat",
    },
    {
      name: "Tonfisksallad",
      price: "120:-",
      ingredients: "Tonfisk, rödlök, citron, sallad, gurka, tomat",
    },
    {
      name: "Kebabsallad",
      price: "120:-",
      ingredients: "Kebab, rödlök, feferoni, sallad, gurka, tomat",
    },
    {
      name: "Kycklingsallad",
      price: "120:-",
      ingredients:
        "Kyckling, paprika, majs, rödlök, ananas, sallad, gurka, tomat",
    },
  ];

  return (
    <section id="sallader" className="relative py-32 bg-[#0a0f1a]">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sallads <span className="text-primary">Meny</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic">
            Våra fräscha sallader är perfekta för en lättare måltid, gjorda med
            de finaste ingredienserna.
          </p>
        </div>

        {/* 1. Salad Cards Grid (Moved up) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {salads.map((salad, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                    {salad.name}
                  </h3>
                  <span className="text-primary font-black text-lg ml-4 whitespace-nowrap">
                    {salad.price}
                  </span>
                </div>
                <div className="w-10 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-700 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  {salad.ingredients}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Visual Hero Section (Now at the end) */}
        <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-transparent to-transparent z-10 opacity-90 md:opacity-60" />
          <img
            src={saladHero}
            alt="Fräscha sallader"
            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-20">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-primary w-6 h-6" />
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Fräschhet i varje skål
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white max-w-md leading-tight uppercase italic">
              Nyttigt har aldrig <br /> smakat bättre
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladMenu;
