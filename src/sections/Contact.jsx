import React from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="relative py-32 bg-[#0a0f1a]">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hitta <span className="text-primary">Oss</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md italic leading-relaxed">
                Besök oss för en god måltid eller beställ för avhämtning. Vi ser fram emot att träffa dig!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Adress</h3>
                  <p className="text-gray-400 leading-relaxed">Vaksalagatan 30, 753 31 Uppsala</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Telefon</h3>
                  <p className="text-gray-400 leading-relaxed">018-10 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Öppettider</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Mån-Fre: <span className="text-white font-medium">10:00 - 20:00</span></p>
                    <p>Lör-Sön: <span className="text-white font-medium">11:00 - 20:00</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feedback Form */}
          <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Dela din feedback</h3>
              <p className="text-gray-400 text-sm mb-8">Vi strävar alltid efter att bli bättre. Berätta om ditt besök!</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Namn</label>
                  <input 
                    type="text" 
                    placeholder="Ditt fullständiga namn"
                    className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Din matupplevelse</label>
                  <textarea 
                    rows="4"
                    placeholder="Berätta vad du tyckte om maten och servicen..."
                    className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-[#0a0f1a] font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 group shadow-lg shadow-primary/20">
                  Skicka Meddelande
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            {/* Subtle background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="h-[450px] w-full bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 relative group shadow-2xl">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.3411486047716!2d17.6439063!3d59.8610587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d7807a515f9%3A0xc6074a36f7a77d70!2sVaksalagatan%2030%2C%20753%2031%20Uppsala!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
            width="100%"
            height="100%"
            style={{ border: 0, }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;