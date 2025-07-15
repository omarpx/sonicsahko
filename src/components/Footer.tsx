import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-[#e0e1dd] border-t border-[#415a77]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Palvelut */}
          <div>
            <h3 className="text-lg font-bold mb-6">Palvelut</h3>
            <ul className="space-y-3 text-[#778da9]">
              {[
                "Sähköasennukset",
                "Vikaselvitykset",
                "Sähköauton latausasemat",
                "Sähkösuunnittelu",
                "Huoltopalvelut"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="hover:text-[#e0e1dd] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yhteystiedot */}
          <div>
            <h3 className="text-lg font-bold mb-6">Yhteystiedot</h3>
            <div className="space-y-4 text-[#778da9]">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+358 40 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@sonic-sahko.fi</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Helsinki, Vantaa, Espoo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#415a77] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#778da9] text-sm">
              © {new Date().getFullYear()} Sonic-Sähkö Oy. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
