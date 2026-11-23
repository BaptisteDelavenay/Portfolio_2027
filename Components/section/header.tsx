"use client";

import type { MouseEvent } from "react";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "experiences", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

// Amène la section au milieu de l'écran. Une section plus haute que l'écran
// est calée en haut (sinon son titre passerait au-dessus de l'écran).
export function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  const el = document.getElementById(id);
  if (!el) return;
  event.preventDefault();
  el.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: el.offsetHeight < window.innerHeight ? "center" : "start",
  });
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden md:flex font-mono text-sm items-center justify-center gap-10 py-5 bg-white/70 backdrop-blur-xs">
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className="hover:underline underline-offset-6 transition-all duration-200"
        >
          [ {label} ]
        </a>
      ))}
    </header>
  );
}
