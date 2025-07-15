import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#1b263b] text-[#e0e1dd]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Otsikko ja johdanto */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-[#e0e1dd]">
            Hinnoittelu
          </h2>
          <p className="text-lg text-[#ffffff] font-light leading-relaxed max-w-3xl mx-auto">
            Alta löydät keskeiset hinnoitteluperusteemme. Kysy tarjous suoraan,
            niin räätälöidään palvelu juuri sinulle.
          </p>
        </div>

        {/* Hinnoittelusarakkeet */}
        <div className="grid md:grid-cols-2 gap-16 text-base leading-relaxed">
          {/* Perusveloitukset */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-[#415a77] pb-2">
              Perusveloitukset
            </h3>
            <ul className="space-y-3 text-[#e0e1dd]">
              <li>
                <strong className="text-[#778da9]">Tuntihinta:</strong> 60 € + alv. (75,30 €)
              </li>
              <li>
                <strong className="text-[#778da9]">Minimiveloitus:</strong> 2 tuntia
              </li>
              <li>
                <strong className="text-[#778da9]">Huoltoautoveloitus:</strong> 35 € + alv.
              </li>
              <li>
                <strong className="text-[#778da9]">Pientarvikelisä:</strong> 16 € + alv.
              </li>
              <li>
                <strong className="text-[#778da9]">Matkat ja siirtymät:</strong> lasketaan
                työajaksi ja veloitetaan toteutuneen mukaan
              </li>
              <li>
                <strong className="text-[#778da9]">Tarvikkeet:</strong> veloitetaan menekin mukaan
              </li>
              <li>
                <strong className="text-[#778da9]">Ylimenevä aika:</strong> veloitetaan normaalin
                tuntihinnan mukaan
              </li>
            </ul>
          </div>

          {/* Erityisajankohdat ja lisät */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-[#415a77] pb-2">
              Erityisajankohdat ja lisät
            </h3>
            <ul className="space-y-3 text-[#e0e1dd]">
              <li>
                <strong className="text-[#778da9]">Ilta-/yötyö:</strong> +100 % normaalihinnoitteluun
              </li>
              <li>
                <strong className="text-[#778da9]">Lauantaityö:</strong> +100 % normaalihinnoitteluun
              </li>
              <li>
                <strong className="text-[#778da9]">Pyhätyö:</strong> +200 % normaalihinnoitteluun
              </li>
              <li>
                <strong className="text-[#778da9]">Hälytyspäivystys:</strong> 150 € + alv.
              </li>
              <li>
                <strong className="text-[#778da9]">Pysäköintimaksu:</strong> 10 € + alv.
                (maksulliset alueet/keskusta)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
