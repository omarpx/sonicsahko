import React from 'react';
import {
  Wrench,
  Zap,
  Car,
  Clipboard,
  Settings,
  Sun,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Sähköasennukset",
      description: "Uudisrakentaminen ja saneeraukset",
      details: "Tarjoamme kattavia sähköasennuksia uusiin kohteisiin ja peruskorjauksiin.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Vikaselvitykset",
      description: "Teknikön tilaus",
      details: "Nopea ja luotettava vikaselvitys sähköongelmiin ympäri vuorokauden.",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Sähköauton latausasemat",
      description: "Kotitalouksiin ja taloyhtiöihin",
      details: "Asennammе ja huollamme sähköauton latausasemia koti- ja yrityskäyttöön.",
    },
    {
      icon: <Clipboard className="h-8 w-8" />,
      title: "Sähkösuunnittelu ja mittaukset",
      description: "Teollisuudelle ja taloyhtiöille",
      details: "Ammattitaitoista sähkösuunnittelua ja mittauksia vaativiin kohteisiin.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Huoltopalvelut",
      description: "Yrityksille ja taloyhtiöille",
      details: "Säännöllistä huoltoa ja ennakkohuoltoa sähköjärjestelmille.",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Aurinkopaneelien asennus",
      description: "Kestävä ratkaisu kotitalouksille ja yrityksille",
      details: "Suunnittelemme ja asennamme aurinkosähköjärjestelmät avaimet käteen -palveluna. Saat kaiken yhdeltä luotettavalta toimijalta – kartoituksesta kytkentään."
    }

  ];

  return (
    <section id="services" className="py-24 bg-[#1b263b] text-[#e0e1dd]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-8 tracking-tight">
            Mitä tarjoamme
          </h2>
          <p className="text-xl text-[#778da9] max-w-4xl mx-auto font-light leading-relaxed">
            Kattavat sähköpalvelut ammattitaidolla ja luotettavuudella. 
            Palvelemme sekä yksityisiä että yritysasiakkaita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0d1b2a] rounded-2xl shadow-2xl p-8 hover:shadow-[#e0e1dd]/10 transition-all duration-500 group hover:scale-105 border border-[#415a77]"
            >
              <div className="bg-[#e0e1dd] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d6d7d4] transition-all duration-300 group-hover:scale-110">
                <div className="text-[#0d1b2a]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#778da9] font-semibold mb-4 text-lg">
                {service.description}
              </p>
              <p className="text-[#e0e1dd] mb-6 leading-relaxed">
                {service.details}
              </p>
              <div className="flex items-center text-[#e0e1dd] font-semibold group-hover:text-[#778da9] transition-colors">
                Lue lisää
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
