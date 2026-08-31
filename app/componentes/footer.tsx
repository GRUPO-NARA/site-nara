import Image from 'next/image'

const redesSociais = [
    { nome: "LinkedIn", href: "https://www.linkedin.com/company/nucleonara/", icone: "/logo/linkedin.svg" },
    { nome: "GitHub", href: "https://github.com/GRUPO-NARA", icone: "/logo/github.svg" },
    { nome: "Instagram", href: "https://www.instagram.com/nara.uema/", icone: "/logo/instagram.svg" },
]

export default function Footer(){
    return(
        <footer className="bg-[#fafafa] py-8 font-sans">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-xs tracking-wide text-gray-400">
                    <Image src="/logo/logo.png" width={100} height={80} alt="Logo do NARA" className="h-8 w-auto" />
                    <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
                    <span>LEA · UEMA</span>
                </div>

                <section aria-labelledby="titulo-redes-sociais" className="flex flex-wrap items-center gap-4">
                    <h2 id="titulo-redes-sociais" className="text-sm font-medium text-gray-950">Conecte-se Conosco</h2>

                    <nav className="flex gap-3" aria-label="Redes sociais">
                        {redesSociais.map((rede) => (
                            <a
                                key={rede.nome}
                                href={rede.href}
                                aria-label={rede.nome}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0d9] transition-colors hover:bg-[#ffe4bc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                            >
                                <Image
                                    src={rede.icone}
                                    width={22}
                                    height={22}
                                    alt=""
                                    className="h-[22px] w-[22px] [filter:invert(58%)_sepia(99%)_saturate(2458%)_hue-rotate(5deg)_brightness(102%)_contrast(101%)]"
                                />
                            </a>
                        ))}
                    </nav>
                </section>

                <p className="text-xs tracking-wide text-gray-400">© 2026 NARA — Núcleo de Análise e Recursos Analíticos</p>
            </div>
        </footer>
    )
}
