import Image from 'next/image'

const redesSociais = [
    { nome: "LinkedIn", href: "", icone: "/logo/linkedin.svg" },
    { nome: "GitHub", href: "", icone: "/logo/github.svg" },
    { nome: "Instagram", href: "", icone: "/logo/instagram.svg" },
]

export default function Footer(){
    return(
        <footer className="bg-[#fafafa] py-8 font-sans">
            <div className="mx-auto w-full max-w-6xl px-4">
                <section aria-labelledby="titulo-redes-sociais">
                    <h2 id="titulo-redes-sociais" className="text-lg font-medium text-gray-950">Conecte-se Conosco</h2>

                    <nav className="mt-4 flex gap-4" aria-label="Redes sociais">
                        {redesSociais.map((rede) => (
                            <a
                                key={rede.nome}
                                href={rede.href}
                                aria-label={rede.nome}
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0d9] transition-colors hover:bg-[#ffe4bc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                            >
                                <Image
                                    src={rede.icone}
                                    width={24}
                                    height={24}
                                    alt=""
                                    className="h-6 w-6 [filter:invert(58%)_sepia(99%)_saturate(2458%)_hue-rotate(5deg)_brightness(102%)_contrast(101%)]"
                                />
                            </a>
                        ))}
                    </nav>
                </section>

                <div className="mt-8 flex flex-col gap-5 text-xs tracking-wide text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/logo/logo.png" width={100} height={80} alt="Logo do NARA" className="h-8 w-auto" />
                        <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
                        <span>LEA · UEMA</span>
                    </div>

                    <p>© 2026 NARA — Núcleo de Análise e Recursos Analíticos</p>
                </div>
            </div>
        </footer>
    )
}
