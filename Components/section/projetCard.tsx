import Link from "next/link";
import { technologies } from "@/app/Data/data";

interface ProjetCardProps{
    id:string,
    imageCouverture:string,
    titre:string,
    technos:string[],
    description:string
}

export default function ProjetCard({id, imageCouverture, titre, technos, description }:ProjetCardProps){
    
    // Si techno est vide alors on utilise un tableau vide pour éviter une erreur.
    const technosValides = technos || [];

    const technoProjet = technologies.filter(tech => technosValides.includes(tech.id));

    return (
        <div className="bg-card w-full h-[300px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat active:scale-97 transition-all duration-100" style={{ backgroundImage: `url(${imageCouverture})` }}>

            <Link href={`/projet/${id}`}
                className="group/info relative block w-full h-full p-6 z-10">
                                             
                <div className="md:translate-y-13 md:group-hover/info:translate-y-0 absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent flex flex-col gap-1 transition-all duration-100">
                    
                    <p className="text-lg font-semibold text-white mb-1">{titre}</p>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {technoProjet.map((tech)=>(
                            <div 
                                key={tech.id}
                                title={tech.nom}
                                className="group flex items-center gap-2 border border-neutral-400 rounded-lg px-2 py-1 hover:bg-white transition-all duration-400">
                                <div className="w-5 h-5 fill-current text-white flex items-center justify-center group-hover:fill-neutral-700 transition-all duration-400">
                                    {tech.icon}
                                </div>                                    
                                <p className="sr-only sm:not-sr-only text-sm text-white group-hover:text-neutral-700 transition-all duration-400">{tech.nom}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-neutral-300 font-mono text-sm mt-2">{description}</p>
                    <button className="bg-white text-black font-mono rounded-md w-30 text-sm px-2 p-1 mt-2 hover:bg-black hover:text-white transition-all duration-200 hover:shadow-xl hover:shadow-white/10 cursor-pointer">Voir plus →</button>
                </div>
            </Link>
        </div>
    )
}
