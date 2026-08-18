'use client'

import Image from 'next/image'
import Link from 'next/link'

const links = [
    { href: "/", label: "Hero" },
    { href: "/sobre", label: "Sobre" },
    { href: "/importancia", label: "Importância" },
    { href: "/projetos", label: "Projetos" },
    { href: "/equipe", label: "Equipe"},
    { href: "#contato", label: "Contato"}
]

export default function Header(){
    return(

        <header className="border-b top-0 left-0 w-full bg-white border-gray-200">
            <div className="flex max-w-7xl mx-auto justify-between items-center ">
                <Link href="/" >
                    <Image className="h-16 w-auto" src='/logo.png' width={100} height={80} alt="Logo do NARA"/>
                </Link>
            
                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="/sobre" className="text-gray-600 text-xl font-sans">Sobre</Link>
                    <Link href="/importancia" className="text-gray-600 text-xl font-sans">Importância</Link>
                    <Link href="/projetos" className="text-gray-600 text-xl font-sans">Projetos</Link>
                    <Link href="/equipe" className="text-gray-600 text-xl font-sans">Equipe</Link>
                    <Link href="#contato" className="rounded-sm px-5 py-2 bg-[#ffa928] text-white text-base font-sans font-bold">CONTATO</Link>
                </nav>            
            </div>
        </header>
    )
}
