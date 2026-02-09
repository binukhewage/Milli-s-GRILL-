import React from 'react';
import { Utensils } from 'lucide-react';

import rullar from "../assets/rullar.JPEG";
import burger from "../assets/hb.JPEG";
import kebab from "../assets/kebabgm.jpg";
import grill from "../assets/grilledgm.webp";

const GrillMenu = () => {
  const categories = [
    {
      title: "Rullar",
      image: rullar,
      items: [
        { name: "Kebabrulle", price: "125:-", description: "Kebab, sallad, gurka, tomat, lök, feferoni, sås" },
        { name: "Kycklingrulle", price: "125:-", description: "Kyckling, sallad, gurka, tomat, lök, feferoni, sås" },
        { name: "Falafelrulle", price: "125:-", description: "Falafel, sallad, gurka, tomat, lök, feferoni, sås" },
      ],
    },
    {
      title: "Hamburgare",
      image: burger,
      items: [
        { name: "90g med bröd", price: "75:-", description: "Sallad, lök, inlagd gurka, senap ketchup, dressing" },
        { name: "150g med bröd", price: "85:-", description: "Sallad, lök, inlagd gurka, senap ketchup, dressing" },
        { name: "200g med bröd", price: "95:-", description: "Sallad, lök, inlagd gurka, senap ketchup, dressing" },
        { name: "Fiskburgare", price: "75:-", description: "Sallad, lök, inlagd gurka, dressing" },
        { name: "Kycklingburgare", price: "80:-", description: "Sallad, lök, tomat, dressing" },
        { name: "Vegetarisk burgare", price: "75:-", description: "Sallad, lök, inlagd gurka, senap ketchup, dressing" },
        { name: "Halloumiburgare", price: "75:-", description: "Sallad, lök, inlagd gurka, senap, ketchup, dressing" },
      ],
    },
    {
      title: "Kebab",
      image: kebab, 
      items: [
        { name: "Kebab med bröd", price: "115:-", description: "Bröd, kebab, sallad, gurka, tomat, lök, feferoni, sås" },
        { name: "Kebabtallrik", price: "125:-", description: "Kebab, pommes, sallad, gurka, tomat, lök, feferoni, sås" },
        { name: "Skrovmål", price: "135:-", description: "Kebab med bröd, sallad, gurka, tomat, lök, feferoni, sås, pommes, läsk 33cl" },
        { name: "Kycklingtallrik", price: "125:-", description: "Kyckling, pommes, sallad, gurka, tomat, lök, feferoni, sås" },
        { name: "Falafeltallrik", price: "125:-", description: "Falafel, pommes, sallad, gurka, tomat, lök, feferoni, sås" },
      ],
    },
    {
      title: "Grill",
      image: grill,
      items: [
        { name: "Lövbit", price: "115:-", description: "Pommes, sallad, gurka, tomat, lök, kryddsmör/bearnaise" },
        { name: "Grillbiff", price: "115:-", description: "Pommes, sallad, gurka, tomat, lök, kryddsmör/bearnaise" },
      ],
    },
  ];

  return (
    <section id="grill-meny" className="relative py-32 bg-[#0a0f1a]">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Grill <span className="text-primary">Meny</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Milli's Grill – din plats för kulinarisk njutning. Utforska våra grillrätter, fräscha sallader och en härlig atmosfär. 
          </p>
        </div>

        {/* Masonry-style Grid (allows different heights) */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="break-inside-avoid flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 group"
            >
              {/* Image Header with Gradient Overlay */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141b2b] via-transparent to-black/20" />
                <div className="absolute bottom-4 left-6">
                   <h3 className="text-3xl font-bold text-white drop-shadow-lg uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Menu Content */}
              <div className="p-6 sm:p-8">
                {category.title === "Hamburgare" && (
                  <div className="mb-6 pb-4 border-b border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Specialerbjudande
                    </p>
                    <p className="text-gray-300 text-sm italic">
                    Meny +20:- Pommes frites och 33 cl läsk ingår vid menybeställning
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start group/item">
                      <div className="flex-1 pr-4">
                        <h4 className="text-lg font-medium text-white group-hover/item:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrillMenu;