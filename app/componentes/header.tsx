'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#importancia", label: "Importância" },
    { href: "#projetos", label: "Projetos" },
    { href: "#pesquisa", label: "Pesquisa" },
    { href: "#equipe", label: "Equipe" },
    { href: "#contato", label: "Contato" },
]

/** Seções acompanhadas pelo menu. "membros" conta como parte de "equipe". */
const secoesDoMenu: Record<string, string> = {
    sobre: "sobre",
    importancia: "importancia",
    projetos: "projetos",
    pesquisa: "pesquisa",
    equipe: "equipe",
    membros: "equipe",
    contato: "contato",
}

function useSecaoAtiva(){
    const [ativa, setAtiva] = useState<string | null>(null)

    useEffect(() => {
        // A seção ativa é a que cruza uma linha logo abaixo do header
        function atualizar(){
            const linha = 96
            let atual: string | null = null
            for (const id of Object.keys(secoesDoMenu)) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= linha) atual = secoesDoMenu[id]
            }
            const fimDaPagina = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
            setAtiva(fimDaPagina ? "contato" : atual)
        }
        atualizar()
        window.addEventListener("scroll", atualizar, { passive: true })
        window.addEventListener("resize", atualizar)
        return () => {
            window.removeEventListener("scroll", atualizar)
            window.removeEventListener("resize", atualizar)
        }
    }, [])

    return ativa
}

function useRolagem(){
    const [estado, setEstado] = useState({ rolou: false, progresso: 0 })

    useEffect(() => {
        function atualizar(){
            const max = document.documentElement.scrollHeight - window.innerHeight
            setEstado({
                rolou: window.scrollY > 8,
                progresso: max > 0 ? Math.min(1, window.scrollY / max) : 0,
            })
        }
        atualizar()
        window.addEventListener("scroll", atualizar, { passive: true })
        window.addEventListener("resize", atualizar)
        return () => {
            window.removeEventListener("scroll", atualizar)
            window.removeEventListener("resize", atualizar)
        }
    }, [])

    return estado
}

export default function Header(){
    const [menuAberto, setMenuAberto] = useState(false)
    const ativa = useSecaoAtiva()
    const { rolou, progresso } = useRolagem()
    const headerRef = useRef<HTMLElement>(null)

    // Menu do celular: fecha com Esc e ao tocar fora dele
    useEffect(() => {
        if (!menuAberto) return
        function aoTeclar(e: KeyboardEvent){ if (e.key === "Escape") setMenuAberto(false) }
        function aoTocar(e: PointerEvent){
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuAberto(false)
        }
        document.addEventListener("keydown", aoTeclar)
        document.addEventListener("pointerdown", aoTocar)
        return () => {
            document.removeEventListener("keydown", aoTeclar)
            document.removeEventListener("pointerdown", aoTocar)
        }
    }, [menuAberto])

    return(
        <>
            <header
                ref={headerRef}
                className={`sticky left-0 top-0 z-50 w-full border-b bg-white/90 font-sans backdrop-blur-md transition-shadow duration-300 ${rolou ? "border-gray-200 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.25)]" : "border-transparent"}`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                    <a href="#inicio" aria-label="Voltar ao início" className="rounded-sm transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]">
                        <Image className="h-14 w-auto" src="/logo/logo.png" width={100} height={80} alt="Logo do NARA" priority />
                    </a>

                    <nav className="hidden items-center gap-6 md:flex" aria-label="Menu principal">
                        {links.map((link) => {
                            const atual = ativa === link.href.slice(1)
                            if (link.href === "#contato") {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        aria-current={atual ? "location" : undefined}
                                        className="rounded-sm bg-[#ffa928] px-5 py-2 text-base font-bold text-white shadow-[0_6px_16px_-8px_rgba(255,169,40,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                    >
                                        {link.label}
                                    </a>
                                )
                            }
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    aria-current={atual ? "location" : undefined}
                                    className={`group relative py-1 text-lg transition-colors hover:text-[#ffa928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928] ${atual ? "text-[#d88710]" : "text-gray-600"}`}
                                >
                                    {link.label}
                                    <span
                                        aria-hidden="true"
                                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#ffa928] transition-transform duration-300 ${atual ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                                    />
                                </a>
                            )
                        })}
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
                    <nav id="menu-mobile" className="animate-in fade-in slide-in-from-top-2 flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-4 duration-200 md:hidden" aria-label="Menu principal">
                        {links.map((link) => {
                            const atual = ativa === link.href.slice(1)
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuAberto(false)}
                                    aria-current={atual ? "location" : undefined}
                                    className={link.href === "#contato"
                                        ? "mt-2 rounded-sm bg-[#ffa928] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                        : `rounded-sm border-l-2 px-4 py-3 text-base transition-colors hover:bg-gray-50 hover:text-[#ffa928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928] ${atual ? "border-[#ffa928] bg-amber-50/60 font-semibold text-[#d88710]" : "border-transparent text-gray-700"}`
                                    }
                                >
                                    {link.label}
                                </a>
                            )
                        })}
                    </nav>
                )}

                {/* Barra de progresso de leitura */}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 translate-y-full bg-transparent">
                    <div className="h-full origin-left bg-gradient-to-r from-[#ffa928] to-[#e99820]" style={{ transform: `scaleX(${progresso})` }} />
                </div>
            </header>

            {/* Voltar ao topo */}
            <a
                href="#inicio"
                aria-label="Voltar ao topo"
                tabIndex={rolou ? 0 : -1}
                className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffa928] text-white shadow-[0_10px_24px_-10px_rgba(255,169,40,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928] ${progresso > 0.15 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
            >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
            </a>
        </>
    )
}
