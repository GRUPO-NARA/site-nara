'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#importancia", label: "Importância" },
    { href: "#projetos", label: "Projetos" },
    { href: "#equipe", label: "Equipe" },
    { href: "#contato", label: "Contato" },
]

export default function Header(){
    const [menuAberto, setMenuAberto] = useState(false)

    return(
        <header className="sticky left-0 top-0 z-50 w-full border-b border-gray-200 bg-white font-sans">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link href="/" aria-label="Página inicial do NARA">
                    <Image className="h-14 w-auto" src="/logo/logo.png" width={100} height={80} alt="Logo do NARA" priority />
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={link.href === "#contato"
                                ? "rounded-sm bg-[#ffa928] px-5 py-2 text-base font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                : "text-lg text-gray-600 transition-colors hover:text-[#ffa928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="flex h-10 w-10 items-center justify-center rounded-sm text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928] md:hidden"
                >
                    {menuAberto ? (
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
                            <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>
            </div>

            {menuAberto && (
                <nav id="menu-mobile" className="animate-in slide-in-from-top-2 flex flex-col gap-2 border-t border-gray-100 bg-white px-4 py-4 duration-200 md:hidden" aria-label="Menu principal">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuAberto(false)}
                            className={link.href === "#contato"
                                ? "mt-2 rounded-sm bg-[#ffa928] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                : "rounded-sm px-4 py-3 text-base text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#ffa928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}
