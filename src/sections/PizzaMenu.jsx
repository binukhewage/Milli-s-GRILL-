import React from 'react';
import { Pizza, PlusCircle } from 'lucide-react';

// Replace these with your actual image paths
import pizzaImg1 from "../assets/pizza1.png";
import pizzaImg2 from "../assets/pizza2.png";

const PizzaMenu = () => {
  const extras = [
    { label: "Vegansk ost eller kebab", price: "+20:-" },
    { label: "Extra tillbehör", price: "+10:-" },
    { label: "Extra kött", price: "+30:-" },
    { label: "Räkor", price: "+20:-" },
    { label: "Extra ost", price: "+15:-" },
    { label: "Sås", price: "+15:-" },
    { label: "Ost eller Kebab", price: "+20:-" },
    { label: "Glutenfri pizzabotten", price: "+25:-" },
  ];

  const pizzaClasses = [
    {
      name: "Klass 1",
      price: "Normal 115:-",
      pizzas: [
        { number: "1", name: "Margarita", ingredients: "Ost (extra ost)" },
        { number: "2", name: "Fungi", ingredients: "Champinjoner" },
        { number: "3", name: "Altono", ingredients: "Tonfisk, lök" },
        { number: "4", name: "Roma", ingredients: "Champinjoner, räkor" },
        { number: "5", name: "Orientale", ingredients: "Köttfärs, lök" },
      ],
    },
    {
      name: "Klass 2",
      price: "Normal 125:-",
      pizzas: [
        { number: "6", name: "Du Chef", ingredients: "Köttfärs, champinjoner, lök, tabasco" },
        { number: "7", name: "Kebabpizza", ingredients: "Kebab, lök, feferoni, kebabsås" },
        { number: "8", name: "Kycklingpizza", ingredients: "Kyckling, tomater, paprika, lök, curry" },
        { number: "9", name: "Indiana", ingredients: "Champinjoner, lök, paprika, jalapeno, curry" },
        { number: "10", name: "Havets Special", ingredients: "Räkor, musslor, tonfisk, krabba" },
        { number: "11", name: "Vegetarisk", ingredients: "Champinjoner, paprika, lök, tomat, kronärtskocka, oliver" },
      ],
    },
    {
      name: "Klass 3",
      price: "Normal 135:-",
      pizzas: [
        { number: "12", name: "Bagarens Special", ingredients: "Oxfilé, champinjoner, tomat, lök, bearnaisesås" },
        { number: "13", name: "Gorgonzola Special", ingredients: "Oxfilé, champinjoner, sparris, lök, gorgonzola, bearnaisesås" },
        { number: "14", name: "Acapulco", ingredients: "Oxfilé, champinjoner, lök, vitlök, tacosås, tacokrydda, bearnaisesås" },
        { number: "15", name: "Mexicana", ingredients: "Köttfärs, lök, jalapeno, vitlök, tacosås, tacokrydda, bearnaisesås" },
        { number: "16", name: "Artin", ingredients: "Sucuk, lök, paprika, tomat, champinjoner, fetaost, chilipeppar" },
      ],
    },
  ];

  return (
    <section id="pizza-meny" className="relative py-32 bg-[#0a0f1a]">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pizza <span className="text-primary">Meny</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Milli's Pizza – din favorit för utsökta pizzor. Njut av våra nygrillade pizzor med fräscha råvaror och en perfekt, krispig botten.
          </p>
        </div>

        {/* 1. Extras Section - Redesigned as interactive badges */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <PlusCircle className="text-primary w-5 h-5" />
            <h3 className="text-white text-xl font-semibold tracking-wide">Skräddarsy din pizza</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {extras.map((extra, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {extra.label}
                </span>
                <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded-full">
                  {extra.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Visual Hero Section - Balanced Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10 opacity-80" />
            <img 
              src={pizzaImg1} 
              alt="Handgjord pizza" 
              className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Färska råvaror</p>
              <h4 className="text-2xl font-bold text-white">Alltid nybakat</h4>
            </div>
          </div>

          <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10 opacity-80" />
            <img 
              src={pizzaImg2} 
              alt="Pizzabagare" 
              className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Tradtion</p>
              <h4 className="text-2xl font-bold text-white">Från vår ugn till dig</h4>
            </div>
          </div>
        </div>

        {/* 3. Pizza Classes Section */}
        <div className="grid lg:grid-cols-3 gap-10">
          {pizzaClasses.map((cls, index) => (
            <div key={index} className="flex flex-col bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-all duration-500">
              <div className="p-8 border-b border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{cls.name}</h3>
                <p className="text-primary font-bold text-lg mt-1">{cls.price}</p>
              </div>
              
              <div className="p-8 space-y-8">
                {cls.pizzas.map((pizza, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary/20 text-primary text-[10px] flex items-center justify-center font-mono">
                            {pizza.number}
                          </span>
                          {pizza.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-2 leading-relaxed italic pl-9">
                          {pizza.ingredients}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaMenu;