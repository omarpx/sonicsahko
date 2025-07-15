import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-[#e0e1dd] border-t border-[#415a77]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Yhteystiedot */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Sonic-Sähkö Oy
            </h3>
            <p className="text-white mb-2">Y-tunnus: 3367138-8</p>
            <p className="text-white mb-2">Vuotie 47 c, 00990 Helsinki</p>
            <div className="space-y-2 text-white">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+358 400 362 791</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>sonic.sahko@outlook.com</span>
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
