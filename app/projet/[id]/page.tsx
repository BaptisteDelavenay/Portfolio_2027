import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dataProjet, technologies } from "@/app/Data/data";
import Footer from "@/Components/section/Footer";

export function generateStaticParams() {
  return dataProjet.map((projet) => ({ id: projet.id }));
}

export async function generateMetadata(
  props: PageProps<"/projet/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  const projet = dataProjet.find((p) => p.id === id);
  return {
    title: projet ? `${projet.titre} · Baptiste Delavenay` : "Baptiste Delavenay",
    description: projet?.description,
  };
}

export default async function ProjetPage(props: PageProps<"/projet/[id]">) {
  const { id } = await props.params;
  const projet = dataProjet.find((p) => p.id === id);
  if (!projet) notFound();

  const technos = technologies.filter((tech) => projet.technos.includes(tech.id));

  return (
    <main>
      <div className="relative mx-auto max-w-4xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-neutral-200 to-transparent" />

        <article className="px-4 pb-16 pt-16 sm:pb-24 md:pt-24">
          <Link
            href="/#projets"
            className="font-mono text-sm text-muted transition-colors hover:text-fg"
          >
            ← Retour aux projets
          </Link>

          <p className="mt-12 font-mono text-sm font-medium text-accent">Projet</p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{projet.titre}</h1>
          <p className="text-muted">{projet.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technos.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-2 rounded-sm border border-dashed border-neutral-400 bg-neutral-100/50 p-1"
              >
                <div className="h-6 w-6">{tech.img}</div>
                <p className="text-sm text-muted">{tech.nom}</p>
              </div>
            ))}
          </div>

          <Image
            src={projet.imageCouverture}
            alt={`Aperçu du projet ${projet.titre}`}
            width={1600}
            height={1000}
            preload
            className="mt-10 h-auto w-full rounded-2xl border border-neutral-200 shadow-sm"
          />

          <div className="mt-10 flex flex-col gap-4">
            {projet.details.map((paragraphe) => (
              <p key={paragraphe} className="text-sm leading-relaxed sm:text-base">
                {paragraphe}
              </p>
            ))}
          </div>

          {/* La couverture est déjà affichée au-dessus */}
          {projet.images
            .filter((src) => src !== projet.imageCouverture)
            .map((src) => (
              <Image
                key={src}
                src={src}
                alt={`Capture du projet ${projet.titre}`}
                width={1600}
                height={1000}
                className="mt-10 h-auto w-full rounded-2xl border border-neutral-200 shadow-sm"
              />
            ))}

          {projet.lien && (
            <a
              href={projet.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-fg px-6 py-3 font-semibold text-white transition-all hover:bg-neutral-700 active:scale-95"
            >
              Voir le projet →
            </a>
          )}
        </article>
      </div>

      <Footer />
    </main>
  );
}
