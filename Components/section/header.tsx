import Link from "next/link"
import Separator from "../ui/Separator"

export default function Header(){
    return(
        <>
        <header className="w-full pt-5 pb-5 flex items-center gap-10 justify-center">
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Compétences ]</Link>
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Projets ]</Link>
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Expérience ]</Link>
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Contact ]</Link>
        </header>
        <Separator/>
        </>
    )
}