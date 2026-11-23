import React from "react";
import ContactForm from "./Form";
import CurrentYear from "../ui/CurrentYear";
import WalkingMascot from "../ui/WalkingClaude";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 min-h-[50vh] relative overflow-hidden px-4 py-24 text-center sm:py-32"
    >
      {/* Taches de couleur */}
      <div className="z-0 pointer-events-none absolute -bottom-50 -left-20 h-[400px] w-[600px] animate-[spin_10s_linear_infinite] rounded-full bg-violet-300/60 blur-[120px]" />
      <div className="z-0 pointer-events-none absolute -bottom-50 -right-20 h-[400px] w-[600px] animate-[spin_10s_linear_infinite] rounded-full bg-sky-200/70 blur-[120px]" />

      {/* Contenu au-dessus */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 sm:text-5xl">Parlons-en !</h2>
        <p className="text-muted">
          Un projet en tête ou simplement envie de dire bonjour ?
        </p>
        <p className="text-muted">
          Remplissez le formulaire ci-dessous et je vous répondrai dans les plus
          brefs délais.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
        {/* boutons, copyright... */}
      </div>
      <div className="absolute inset-x-0 bottom-6 z-10">
        <p className="text-xs text-muted">
          © <CurrentYear /> Baptiste Delavenay
        </p>
      </div>
      <WalkingMascot />
    </footer>
  );
};

export default Footer;
