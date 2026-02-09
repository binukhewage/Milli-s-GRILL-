import React from "react";
import { Utensils, Pizza, Salad, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import pizza from "../assets/pizza.jpg";
import sallad from "../assets/sallad.jpg";
import burger from "../assets/burger.jpg";

const MenuCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: "grill",
      title: "Grill Meny",
      subtitle: "Kebab, Rullar & Hamburgare",
      description:
        "Utforska våra grillrätter, fräscha sallader och en härlig atmosfär. Kom och upplev en smakupplevelse du sent kommer glömma!",
      image: burger,
      icon: Utensils,
      color: "from-orange-500/20 to-red-500/20",
      link: "/grill",
    },
    {
      id: "pizza",
      title: "Pizza Meny",
      subtitle: "Klassiska & Specialpizzor",
      description:
        "Njut av våra nygrillade pizzor med fräscha råvaror och en perfekt, krispig botten. Välkommen för en smakupplevelse utöver det vanliga!",
      image: pizza,
      icon: Pizza,
      color: "from-yellow-500/20 to-orange-500/20",
      link: "/pizza",
    },
    {
      id: "sallader",
      title: "Sallader",
      subtitle: "Friska & Hälsosamma",
      description:
        "Våra fräscha sallader är perfekta för en lättare måltid, gjorda med de finaste ingredienserna.",
      image: sallad,
      icon: Salad,
      color: "from-green-500/20 to-emerald-500/20",
      link: "/sallader",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0d1321]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Våra Menyer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Upptäck Våra <span className="text-primary">Rätter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(card.link)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.color} via-black/60 to-black/90`}
                />
              </div>

              <div className="relative p-8 h-[400px] flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-primary">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {card.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                    <span>Se Meny</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCards;
