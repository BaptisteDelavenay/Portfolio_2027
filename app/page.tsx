'use client'

import SpinLogo from "@/Components/section/SpinLogo"
import Separator from "@/Components/ui/Separator";
import { gsap } from "gsap";
import { technologies } from "./Data/data";
import ProjetCard from "@/Components/section/projetCard";
import { dataProjet } from "./Data/data";

import { motion } from 'framer-motion';

import Skills from "@/Components/section/skills";

import HeroSection from "@/Components/section/heroSection"
import Header from "@/Components/section/header"

export default function Home() {
  return (
    <>
      <div>
        <Header/>
        <div className="mt-50 flex items-center justify-between">
          <HeroSection/>
          <div className="flex items-center justify-center">
            <SpinLogo/>
          </div>
        </div>
        <section className="mt-100 mb-100">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30% 0px -30% 0px'  }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
              <h2 className="text-lg font-semibold mb-4">Compétences</h2>
              <Skills/>
          </motion.section>
        </section>


        <section className='mb-10'>
           <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30% 0px -30% 0px'  }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
              >
              <h2 className="text-lg font-semibold mb-4">Projets</h2>
                <div className='grid gap-6 grid-col-1 md:grid-cols-1'>
                    {dataProjet.map((projet) => (
                        <ProjetCard
                            key={projet.id}
                            id={projet.id}
                            imageCouverture={projet.imageCouverture}
                            titre={projet.titre}
                            technos={projet.technos}
                            description={projet.description}
                        />
                    ))}
                </div>
              </motion.section>
          </section>
      </div>
    </>
  )
}
