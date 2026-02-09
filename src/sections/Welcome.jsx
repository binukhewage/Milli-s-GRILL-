import React from 'react';
import { Award, Smile, ChefHat } from 'lucide-react';
import kebab from "../assets/grillwelcome.jpg";

const Welcome = () => {
  const features = [
    {
      icon: Award,
      title: "Kvalitet i Fokus",
      description: "Varje rätt är en hyllning till hantverk och passion, noggrant tillagad med de bästa ingredienserna.",
      // Indigo/Blue Style
      cardStyle: "bg-blue-600/20 border-blue-500/30 hover:bg-blue-600/30",
      iconStyle: "bg-blue-500/20 text-blue-400",
      textStyle: "text-gray-300",
      titleColor: "text-white"
    },
    {
      icon: Smile,
      title: "Trivsam Atmosfär",
      description: "Oavsett om du är här för en snabb middag eller en avkopplande kväll, känner du dig som hemma.",
      // White Style
      cardStyle: "bg-white border-white hover:bg-gray-50",
      iconStyle: "bg-gray-100 text-black shadow-sm",
      textStyle: "text-gray-600",
      titleColor: "text-black"
    },
    {
      icon: ChefHat,
      title: "Smakupplevelse",
      description: "Vi skapar minnesvärda upplevelser genom vår passion för god mat och utsökta grillrätter.",
      // Primary/Orange Style with WHITE text
      cardStyle: "bg-primary border-primary hover:shadow-primary/20",
      iconStyle: "bg-white/20 text-white backdrop-blur-sm",
      textStyle: "text-white/90 drop-shadow-sm",
      titleColor: "text-white drop-shadow-md"
    },
  ];

  return (
    <section className="relative py-20 bg-[#0a0f1a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Om Oss
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Välsmakande <span className="text-primary">Kök</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Välkommen till Milli's Grill & Pizza – din plats för utsökta grillrätter och en trivsam, inbjudande atmosfär. Här sätter vi alltid smak och kvalitet i fokus, och varje måltid är en chans att skapa minnesvärda upplevelser.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Oavsett om du är här för en snabb middag eller en långsam, avkopplande kväll, gör vi vårt bästa för att du ska känna dig som hemma. Hos oss är alla gäster välkomna och vi ser fram emot att få dela vår passion för god mat med dig!
            </p>
            <p className="text-lg text-primary font-semibold italic">
              "Upplev en värld av smaker i vår restaurang, där varje rätt är en hyllning till hantverk och passion."
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            <img src={kebab} alt="Delicious kebab roll" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-[1.02]" />
          </div>
        </div>

        {/* The 3 Themed Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-15">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 border rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 shadow-2xl ${feature.cardStyle}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.iconStyle}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className={`text-2xl font-black mb-3 uppercase tracking-tight ${feature.titleColor}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed font-medium text-sm sm:text-base ${feature.textStyle}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;