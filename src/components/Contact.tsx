"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Kiitos viestistäsi! Otamme yhteyttä pian.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#1b263b] text-[#e0e1dd]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-8 tracking-tight">
            Ota yhteyttä
          </h2>
          <p className="text-xl text-[#778da9] max-w-4xl mx-auto font-light leading-relaxed">
            Olemme valmiit auttamaan sähköasentamisessa ja -huollossa. Ota
            yhteyttä jo tänään!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Yhteystiedot */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Yhteystiedot</h3>

            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="h-7 w-7 text-[#0d1b2a]" />,
                  title: "Puhelin",
                  text: "+358 400 362 793",
                  note: "Päivystys 24/7",
                },
                {
                  icon: <Mail className="h-7 w-7 text-[#0d1b2a]" />,
                  title: "Sähköposti",
                  text: "sonic.sahko@outlook.com",
                  note: "Vastaamme 24h sisällä",
                },
                {
                  icon: <MapPin className="h-7 w-7 text-[#0d1b2a]" />,
                  title: "Toimialue",
                  text: "Helsinki, Vantaa, Espoo",
                  note: "Koko Uusimaa",
                },
                {
                  icon: <Clock className="h-7 w-7 text-[#0d1b2a]" />,
                  title: "Aukioloajat",
                  text: "Ma–Pe: 7:00–18:00\nLa: 8:00–16:00",
                  note: "Hätätapaukset 24/7",
                },
              ].map((item, i) => (
                <div className="flex items-start space-x-4" key={i}>
                  <div className="bg-[#e0e1dd] p-4 rounded-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    {item.text.split("\n").map((line, j) => (
                      <p className="text-[#e0e1dd] text-lg" key={j}>{line}</p>
                    ))}
                    <p className="text-sm text-[#778da9] font-medium">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lomake */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Lähetä viesti</h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#0d1b2a] p-8 rounded-2xl border border-[#415a77]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#778da9] mb-3">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-[#415a77] bg-[#1b263b] text-[#e0e1dd] rounded-xl focus:ring-2 focus:ring-[#e0e1dd] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#778da9] mb-3">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-[#415a77] bg-[#1b263b] text-[#e0e1dd] rounded-xl focus:ring-2 focus:ring-[#e0e1dd] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#778da9] mb-3">
                    Puhelinnumero
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-[#415a77] bg-[#1b263b] text-[#e0e1dd] rounded-xl focus:ring-2 focus:ring-[#e0e1dd] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#778da9] mb-3">
                    Palvelu
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-[#415a77] bg-[#1b263b] text-[#e0e1dd] rounded-xl focus:ring-2 focus:ring-[#e0e1dd] focus:border-transparent transition-all"
                  >
                    <option value="">Valitse palvelu</option>
                    <option value="sähköasennukset">Sähköasennukset</option>
                    <option value="vikaselvitykset">Vikaselvitykset</option>
                    <option value="latausasemat">Sähköauton latausasemat</option>
                    <option value="suunnittelu">Suunnittelu ja mittaukset</option>
                    <option value="huolto">Huoltopalvelut</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#778da9] mb-3">
                  Viesti *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Kerro lisää projektistasi..."
                  className="w-full px-4 py-4 border border-[#415a77] bg-[#1b263b] text-[#e0e1dd] rounded-xl focus:ring-2 focus:ring-[#e0e1dd] focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e0e1dd] hover:bg-[#d6d7d4] text-[#0d1b2a] px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Lähetä viesti</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
