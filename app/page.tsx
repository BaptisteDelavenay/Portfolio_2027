"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header, { scrollToSection } from "@/Components/section/header";
import HeroSection from "@/Components/section/heroSection";
import SpinLogo from "@/Components/section/SpinLogo";
import Skills from "@/Components/section/skills";
import ProjetCard from "@/Components/section/projetCard";
import Divider from "@/Components/ui/Devider";
import { dataProjet } from "./Data/data";
import { GitHubCalendar } from "react-github-calendar";
import Footer from "@/Components/section/Footer";
import Experience from "@/Components/section/Experience";
import dynamic from "next/dynamic";
import Link from "next/link";

// Même fondu montant partout : au chargement pour le hero, au scroll pour le reste
const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const heroIn = (delay: number) => ({
  initial: reveal.initial,
  animate: reveal.whileInView,
  transition: { ...reveal.transition, delay },
});

export default function Home() {
  const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((m) => m.GitHubCalendar),
    {
      ssr: false,
      loading: () => <div className="h-[140px]" />,
    },
  );
  // L'invitation au scroll s'efface sur les 80 premiers pixels de défilement
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const cueVisibility = useTransform(scrollY, (y) => (y > 80 ? "hidden" : "visible"));

  return (
    <main>
      <Header />

      <div className="relative mx-auto max-w-4xl">
        {/* Ligne verticale gauche : transparente en haut, puis pleine */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-neutral-200 to-transparent" />
        {/* Hero */}
        <section id="accueil" className="relative flex min-h-svh flex-col items-center justify-center gap-12 px-4 md:flex-row md:justify-between">
          <motion.div {...heroIn(0)}>
            <HeroSection />
          </motion.div>
          <motion.div
            {...heroIn(0.15)}
            className="hidden md:flex items-center justify-center"
          >
            <SpinLogo />
          </motion.div>
          <motion.div
            style={{ opacity: cueOpacity, visibility: cueVisibility }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              {...heroIn(0.6)}
              href="#experiences"
              onClick={(e) => scrollToSection(e, "experiences")}
              className="flex flex-col items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-fg"
            >
              Scroll
              <span className="animate-bounce motion-reduce:animate-none" aria-hidden="true">
                ↓
              </span>
            </motion.a>
          </motion.div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experiences" className="scroll-mt-20 px-4 py-16 sm:py-24">
          <motion.div {...reveal}>
            <p className="font-mono text-sm font-medium text-accent">
              Mon parcours
            </p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Expériences</h2>
            <Experience />
          </motion.div>
        </section>

        <Divider />

        <section id="competences" className="scroll-mt-20 px-4 py-16 sm:py-24">
          <motion.div {...reveal}>
            <p className="font-mono text-sm font-medium text-accent">
              Le socle
            </p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Compétences</h2>
            <Skills />
          </motion.div>
        </section>

        <Divider />

        {/* Projets */}

        <section id="projets" className="scroll-mt-20 px-4 py-16 sm:py-24">
          <motion.div {...reveal}>
            <p className="font-mono text-sm font-medium text-accent">
              Ce que j'ai construit
            </p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Projets récents
            </h2>
            <div className="flex flex-col gap-6">
              {dataProjet.map((projet) => (
                <ProjetCard key={projet.id} {...projet} />
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />
        <section className="px-4 py-16 sm:py-24">
          <motion.div {...reveal}>
            <p className="font-mono text-sm font-medium text-accent">
              Mes commits
            </p>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Activité</h2>
              <Link
                className="text-sm text-muted transition-colors hover:text-fg"
                href="https://github.com/BaptisteDelavenay"
                target="_blank"
              >
                Aller à Github →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <GitHubCalendar
                username="BaptisteDelavenay"
                colorScheme="light"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </motion.div>
        </section>
      </div>
      <motion.div {...reveal}>
        <Footer />
      </motion.div>
    </main>
  );
}
