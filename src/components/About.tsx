import React from 'react';
import { CheckCircle, Users, Award, Clock, Phone } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "50+", label: "Tyytyväistä asiakasta" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Vuotta kokemusta" },
    { icon: <CheckCircle className="h-8 w-8" />, number: "100%", label: "Laadun takuu" },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Päivystysvalmius",
      phone: "+358 40 123 4567"
    }
  ];

  return (
    <section id="about">
      {/* Kuvaosio ylhäällä omana elementtinä */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Sähköasentaja työssään"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tekstisisältö ja tilastot erillisessä taustassa */}
      <div className="bg-[#0d1b2a] text-[#e0e1dd] py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vasemman puolen sisältö */}
            <div>
              <h2 className="text-5xl font-black mb-8 tracking-tight">
                Keitä me olemme?
              </h2>
              <p className="text-xl text-[#778da9] mb-6 leading-relaxed font-light">
                Sonic-Sähkö Oy on kolmen veljeksen ja isän perustama sähköalan yritys, jonka juuret ovat syvällä Uudellamaalla. Meitä yhdistää
                vahva ammattitaito, luottamus ja halu palvella asiakkaitamme kuin omia naapureitamme. 
                Jokainen projekti tehdään huolella ja sydämellä – kuten tekisimme sen omassa kodissamme.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-[#778da9] hover:text-[#e0e1dd] transition-all duration-300 font-medium"
              >
                Lue lisää palveluistamme →
              </a>
            </div>

            {/* Oikean puolen statsit */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-[#1b263b] rounded-2xl border border-[#415a77]"
                >
                  <div className="text-[#e0e1dd] mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-[#e0e1dd] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#778da9] font-medium">
                    {stat.label}
                  </div>
                  {stat.phone && (
                    <div className="mt-4 flex items-center justify-center text-[#e0e1dd] text-sm gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{stat.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
