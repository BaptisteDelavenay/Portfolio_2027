"use client";

import { motion } from "framer-motion";
import Header from "@/Components/section/Header";
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

export default function Home() {
  const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((m) => m.GitHubCalendar),
    {
      ssr: false,
      loading: () => <div className="h-[140px]" />,
    },
  );
  return (
    <main>
      <Header />

      <div className="relative mx-auto max-w-4xl">
        {/* Ligne verticale gauche : transparente en haut, puis pleine */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-neutral-200 to-transparent" />
        {/* Hero */}
        <section className="flex items-center justify-between px-4 pb-24 pt-50">
          <HeroSection />
          <div className="flex items-center justify-center">
            <SpinLogo />
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experiences" className="px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-lime-700">Mon parcours</p>
            <h2 className="mb-4 text-3xl font-bold">Expériences</h2>
            <Experience />
          </motion.div>
        </section>

        <Divider />

        <section id="competences" className="px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-lime-700">Le socle</p>
            <h2 className="mb-4 text-3xl font-bold">Compétences</h2>
            <Skills />
          </motion.div>
        </section>

        <Divider />

        {/* Projets */}

        <section id="projets" className="px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-lime-700">Ce que j'ai construit</p>
            <h2 className="mb-4 text-3xl font-bold">Projets récents</h2>
            <div className="flex flex-col gap-6">
              {dataProjet.map((projet) => (
                <ProjetCard key={projet.id} {...projet} />
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />
        <section className="px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-lime-700">Ce que j'ai construit</p>
            <div className="flex items-center justify-between mb-4">
              <h2 className="mb-4 text-3xl font-bold">Activité</h2>
              <Link
                className="text-sm"
                href="https://github.com/BaptisteDelavenay"
                target="_blank"
              >
                Aller à Github →
              </Link>
            </div>
            <GitHubCalendar
              username="BaptisteDelavenay"
              colorScheme="light"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          </motion.div>
        </section>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
