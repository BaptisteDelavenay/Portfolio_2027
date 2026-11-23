import { div } from "framer-motion/client";
import { technologies } from "@/app/Data/data";

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((elem) => (
        <div
          key={elem.id}
          className="bg-gray-100/50 hover:bg-gray-100 border border-gray-400 border-dashed p-1 rounded-sm  flex items-center gap-2 text-base font-bold duration-100 transition-all"
        >
          <div className="h-6 w-6">{elem.img}</div>
          <p className="text-gray-500 text-sm">{elem.nom}</p>
        </div>
      ))}
    </div>
  );
}
