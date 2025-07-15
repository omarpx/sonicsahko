"use client";

import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0d1b2a] shadow-xl sticky top-0 z-50 border-b border-[#415a77]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#e0e1dd] p-2 rounded-lg">
              <Zap className="h-6 w-6 text-[#0d1b2a]" />
            </div>
            <span className="text-xl font-bold text-[#e0e1dd]">Sonic-Sähkö Oy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#home", label: "Etusivu" },
              { href: "#about", label: "Tietoja meistä" },
              { href: "#services", label: "Palvelut" },
              { href: "#contact", label: "Ota yhteyttä" },
            ].map(({ href, label }, i) => (
              <a
                key={i}
                href={href}
                className="text-[#778da9] hover:text-[#e0e1dd] transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#1b263b] transition-colors text-[#e0e1dd]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-[#415a77]">
            <div className="flex flex-col space-y-4">
              {[
                { href: "#home", label: "Etusivu" },
                { href: "#services", label: "Palvelut" },
                { href: "#about", label: "Tietoja meistä" },
                { href: "#contact", label: "Ota yhteyttä" },
              ].map(({ href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-[#778da9] hover:text-[#e0e1dd] transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
