"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { caminhoImagem, textoResultados, type Trabalho } from "../lib/dados"
import { atraso } from "../lib/estilo"

type Props = {
    /** id da seção, usado nos links do menu (#projetos, #pesquisa) */
    id: string
    rotulo: string
    titulo: string
    subtitulo: string
    itens: Trabalho[]
    fundoBranco?: boolean
}

function ImagemCard({ item, tamanho, margem }: { item: Trabalho, tamanho: string, margem: [string, string] }){
    const src = caminhoImagem(item.imagem)
    if (!src) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-gray-50">
                <p className="text-sm font-bold tracking-wide text-gray-300">{item.categoria?.toUpperCase() ?? "EM BREVE"}</p>
            </div>
        )
    }
    return (
        <Image
            src={src}
            fill
            sizes={tamanho}
            alt={`Imagem de ${item.nome}`}
            className={item.imagem_contida ? `object-contain ${margem[1]}` : `object-contain ${margem[0]}`}
        />
    )
}

function SecaoTexto({ titulo, texto }: { titulo: string, texto: string | null }){
    if (!texto) return null
    return (
        <section className="flex flex-col gap-2 border-l-3 border-[#ffa928] pl-5">
            <h3 className="text-xs font-bold tracking-wider text-gray-400">{titulo}</h3>
            <p className="leading-7 text-gray-700">{texto}</p>
        </section>
    )
}

export default function Projetos({ id, rotulo, titulo, subtitulo, itens, fundoBranco = false }: Props){
    const [selecionado, setSelecionado] = useState<number | null>(null)
    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false)
    const temporizadorFechamento = useRef<number | null>(null)

    const aberto = selecionado !== null ? itens[selecionado] : null

    // Painel aberto: fecha com Esc e trava a rolagem da página por trás
    useEffect(() => {
        if (selecionado === null) return
        const anterior = document.body.style.overflow
        document.body.style.overflow = "hidden"
        function aoTeclar(e: KeyboardEvent){ if (e.key === "Escape") fecharDetalhes() }
        document.addEventListener("keydown", aoTeclar)
        return () => {
            document.body.style.overflow = anterior
            document.removeEventListener("keydown", aoTeclar)
        }
    }, [selecionado])

    function abrirDetalhes(index: number){
        if(temporizadorFechamento.current !== null){
            window.clearTimeout(temporizadorFechamento.current)
        }

        setSelecionado(index)
        requestAnimationFrame(() => setDetalhesVisiveis(true))
    }

    function fecharDetalhes(){
        setDetalhesVisiveis(false)

        if(temporizadorFechamento.current !== null){
            window.clearTimeout(temporizadorFechamento.current)
        }

        temporizadorFechamento.current = window.setTimeout(() => {
            setSelecionado(null)
            temporizadorFechamento.current = null
        }, 300)
    }

    if (itens.length === 0) return null

    return(
        <main id={id} className={`flex items-center justify-center py-20 font-sans ${fundoBranco ? "bg-white" : "bg-[#f8f8f8]"}`}>
            <section className="w-full max-w-6xl p-4 text-gray-900">
                <div data-revelar className="flex flex-col gap-3">
                    <p className="py-2 text-sm font-bold text-[#ffa928] md:py-0">{rotulo}</p>
                    <h1 className="text-5xl font-bold md:text-6xl">{titulo}</h1>
                    <p className="max-w-3xl text-lg leading-8 text-gray-600">{subtitulo}</p>
                </div>

                <article className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {itens.map((item, index) => (
                        <div key={item.id} data-revelar style={atraso((index % 2) * 140)} className="group flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ffa928] hover:shadow-[0_22px_44px_-24px_rgba(255,169,40,0.85)]">
                            <div className="relative h-56 overflow-hidden bg-white transition-transform duration-500 group-hover:scale-[1.04]">
                                <ImagemCard item={item} tamanho="(min-width: 640px) 50vw, 100vw" margem={["p-4", "p-10"]} />
                            </div>

                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    {item.categoria && (
                                        <p className="w-fit rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-[#d88710]">{item.categoria.toUpperCase()}</p>
                                    )}
                                    {item.destaque && (
                                        <p className="text-xs font-bold tracking-wide text-gray-400">{item.destaque}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-900">{item.nome}</h2>
                                    <p className="leading-7 text-gray-600">{item.descricao}</p>
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                                    {item.stack.slice(0, 4).map((tecnologia) => (
                                        <span key={tecnologia} className="rounded-sm bg-gray-100 px-2.5 py-1 text-xs text-gray-600">{tecnologia}</span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => abrirDetalhes(index)}
                                    className="group/btn mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[#ffa928] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                >
                                    VER DETALHES
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </article>
            </section>

            {aberto && (
                <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-labelledby={`titulo-aberto-${id}`}>
                    <button
                        type="button"
                        aria-label="Fechar detalhes"
                        onClick={fecharDetalhes}
                        className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${detalhesVisiveis ? "opacity-100" : "opacity-0"}`}
                    />

                    <aside className={`relative z-10 h-full w-full max-w-2xl overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${detalhesVisiveis ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="relative h-64 bg-white sm:h-80">
                            <ImagemCard item={aberto} tamanho="(min-width: 640px) 672px, 100vw" margem={["p-6", "p-12"]} />
                            <button
                                type="button"
                                onClick={fecharDetalhes}
                                className="absolute right-4 top-4 rounded-sm bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-md transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                            >
                                FECHAR
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 p-6 sm:p-10">
                            <header className="flex flex-col gap-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    {aberto.categoria && (
                                        <p className="w-fit rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-[#d88710]">{aberto.categoria.toUpperCase()}</p>
                                    )}
                                    {aberto.destaque && (
                                        <p className="text-xs font-bold tracking-wide text-gray-400">{aberto.destaque}</p>
                                    )}
                                </div>
                                <h2 id={`titulo-aberto-${id}`} className="text-3xl font-bold leading-tight text-gray-900">{aberto.nome}</h2>
                                <p className="leading-7 text-gray-600">{aberto.descricao}</p>
                            </header>

                            <SecaoTexto titulo="OBJETIVO" texto={aberto.objetivo} />
                            <SecaoTexto titulo="METODOLOGIA" texto={aberto.metodologia} />
                            <SecaoTexto titulo="RESULTADOS E IMPACTO" texto={textoResultados(aberto)} />

                            {aberto.equipe.length > 0 && (
                                <section className="flex flex-col gap-2">
                                    <h3 className="text-xs font-bold tracking-wider text-gray-400">EQUIPE</h3>
                                    <p className="leading-7 text-gray-700">{aberto.equipe.join(", ")}.</p>
                                </section>
                            )}

                            {aberto.stack.length > 0 && (
                                <section className="flex flex-col gap-3">
                                    <h3 className="text-xs font-bold tracking-wider text-gray-400">TECNOLOGIAS E MÉTODOS</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {aberto.stack.map((tecnologia) => (
                                            <span key={tecnologia} className="rounded-sm bg-gray-100 px-3 py-1.5 text-sm text-gray-600">{tecnologia}</span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {aberto.vinculo && (
                                <section className="rounded-sm bg-[#f8f8f8] p-5">
                                    <h3 className="text-xs font-bold tracking-wider text-gray-400">VÍNCULO</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-700">{aberto.vinculo}</p>
                                </section>
                            )}
                        </div>
                    </aside>
                </div>
            )}
        </main>
    )
}
