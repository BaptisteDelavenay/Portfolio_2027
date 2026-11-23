import Link from "next/link";
import Separator from "../ui/Separator";

export default function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-10 py-5 bg-white/70 backdrop-blur-xs">
        <Link
          className="hover:underline underline-offset-6 transition-all duration-200"
          href={"#experiences"}
        >
          [ Expérience ]
        </Link>
        <Link
          className="hover:underline underline-offset-6 transition-all duration-200"
          href={"#competences"}
        >
          [ Compétences ]
        </Link>
        <Link
          className="hover:underline underline-offset-6 transition-all duration-200"
          href={"#projets"}
        >
          [ Projets ]
        </Link>

        <Link
          className="hover:underline underline-offset-6 transition-all duration-200"
          href={"#contact"}
        >
          [ Contact ]
        </Link>
      </header>
    </>
  );
}
