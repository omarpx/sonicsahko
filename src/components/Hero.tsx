"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#0d1b2a] text-[#e0e1dd] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Taustakuva */} 
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      ></div>

      {/* Overlay sisältö animaatioilla */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* LOGO YLÄPUOLELLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/soniclogo.jpg"
              alt="Sonic-Sähkö Oy logo"
              className="h-24 w-24 md:h-32 md:w-32 object-contain mx-auto"
            />
          </motion.div>

          {/* Otsikko */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
          >
            Tervetuloa Sonic-Sähkö Oy:lle – Uudenmaan luotettava sähköasentaja
          </motion.h1>

          {/* Kuvaus */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-[#ffffff] max-w-2xl font-light"
          >
            Tarjoamme ammattitaitoista sähköasennusta, huoltoa ja sähköautojen latausratkaisuja Helsingissä, Vantaalla ja Espoossa.
          </motion.p>

          {/* Napit */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-[#e0e1dd] hover:bg-[#d6d7d4] text-[#0d1b2a] font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-xl"
            >
              Pyydä ilmainen arvio
            </a>
            <a
              href="#contact"
              className="border border-[#e0e1dd] text-[#e0e1dd] hover:text-[#0d1b2a] hover:bg-[#e0e1dd] font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-xl"
            >
              Ota yhteyttä
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
