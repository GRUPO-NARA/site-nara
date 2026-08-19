"use client"

import Image from "next/image"
import { useRef, useState } from "react"

const projetos = [
    {
        tag: "DADOS PÚBLICOS",
        titulo: "Mapa Social do Maranhão",
        descricao: "Plataforma web de código aberto que integra e visualiza indicadores sociais dos 217 municípios maranhenses para apoiar políticas públicas e ampliar o acesso à informação.",
        imagem: "/projetos/mapasocial.jpeg",
        tecnologias: ["Python", "PostgreSQL", "Spring Boot", "FastAPI", "Next.js", "Scikit-learn"],
        destaque: "PIBITI/FAPEMA · 2026",
        objetivo: "Integrar dados públicos de diferentes setores sociais em uma ferramenta interativa, acessível à população e capaz de apoiar a tomada de decisões de gestores públicos e do Ministério Público do Estado do Maranhão.",
        metodologia: "Um pipeline assíncrono de ETL em Python e Pandas coleta e padroniza dados do SIDRA, SAGICAD, IMESC e IPEADATA. Os indicadores são armazenados em PostgreSQL, disponibilizados por uma API REST em Spring Boot e analisados por um serviço FastAPI com modelos de aprendizado de máquina. A interface foi desenvolvida em Next.js.",
        resultados: "A plataforma consolidou 48 séries de indicadores, contempla os 217 municípios do Maranhão e permite consultar séries históricas, gerar projeções e agrupar municípios com perfis semelhantes. A coleta assíncrona reduziu o tempo observado de processamento de cerca de dez para aproximadamente dois minutos no ambiente do projeto.",
        equipe: "Ana Elisa Oliveira Silva, Bruno Raphael Andrade Santos, Carlos Vinícius Rodrigues Amorim, Julio Cesar Costa da Silva e Paulo Fernandes da Silva Junior.",
        vinculo: "UEMA · LEA · PIBITI/FAPEMA · Ministério Público do Estado do Maranhão",
    },
    {
        tag: "INTELIGÊNCIA ARTIFICIAL",
        titulo: "VizuData: Decisões Inteligentes com Dados",
        descricao: "Plataforma inteligente que transforma arquivos Excel e CSV em dashboards, análises automatizadas e insights em linguagem natural para usuários sem formação técnica.",
        imagem: "/projetos/Vizudata.png",
        tecnologias: ["Python", "Next.js", "Pandas", "NumPy", "Agentes de IA"],
        destaque: "PROTÓTIPO · TRL 3–4",
        objetivo: "Democratizar o acesso à análise de dados para micro e pequenas empresas, instituições públicas, organizações do terceiro setor e empreendedores que não possuem equipes técnicas especializadas.",
        metodologia: "O usuário envia dados em formatos Excel ou CSV e seleciona análises descritivas, diagnósticas ou preditivas. O sistema processa os dados, gera gráficos, dashboards e indicadores e utiliza um agente de inteligência artificial para produzir interpretações e recomendações em linguagem natural.",
        resultados: "A proposta prevê uma interface acessível, exportação de relatórios em PDF, uso individual ou corporativo e integração futura com sistemas externos. A solução está em validação conceitual e desenvolvimento de protótipo, com evolução planejada para um MVP funcional.",
        equipe: "Carlos Vinícius Rodrigues Amorim, Julio Cesar Costa da Silva, Luca Maia Marques, Ana Elisa Oliveira Silva e Bruno Raphael Andrade Santos.",
        vinculo: "UEMA · Synapse Lab · Laboratório de Engenharia Aplicada · Incubadora MARANDU",
    },
    {
        tag: "EDUCAÇÃO FINANCEIRA",
        titulo: "Sistema de Educação Financeira no Maranhão",
        descricao: "Sistema para mapear endividamento, vulnerabilidade financeira e indicadores socioeconômicos, transformando dados pesquisados em estátistica e aprendizado.",
        imagem: "/projetos/financeira.png",
        imagemContida: true,
        tecnologias: ["ETL", "PostgreSQL", "React", "Business Intelligence", "Machine Learning"],
        destaque: "PESQUISA",
        objetivo: "Desenvolver um sistema de análise de dados sobre educação financeira no Estado do Maranhão, realizando pesquisa em tempo real, avaliando e comparando o nível de conhecimento por meio de um sistema de TRI e adição de dicas de para a melhoria do conhecimento na área de educação financeira",
        metodologia: "A pesquisa combina ciclos de desenvolvimento de software com um pipeline de extração, transformação e carga de bases públicas e institucionais. A arquitetura prevê banco de dados relacional, back-end seguro, front-end analítico, dashboards e técnicas descritivas, preditivas e de agrupamento.",
        resultados: "Espera-se produzir um protótipo funcional para acompanhar indicadores de endividamento e consumo, apoiar a alocação de recursos em programas de capacitação financeira e monitorar o impacto de políticas implementadas no território maranhense.",
        vinculo: "UEMA · Programa Institucional de Bolsas de Iniciação Científica · ODS 4, 8, 9 e 10",
        equipe: "Ana Elisa Oliveira Silva, Bruno Raphael Andrade Santos, Carlos Vinícius Rodrigues Amorim, Julio Cesar Costa da Silva"
    },
    {
        tag: "ANÁLISE DE DADOS",
        titulo: "Analfabetismo nos Municípios do Maranhão",
        descricao: "Estudo dos indicadores de analfabetismo entre 1991 e 2022, com visualizações comparativas e dashboard interativo para identificar padrões e diferenças regionais.",
        imagem: "/projetos/sead.jpeg",
        tecnologias: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
        destaque: "SEAD UFMA · 2025",
        objetivo: "Analisar a evolução das taxas de analfabetismo nos municípios maranhenses e organizar os dados de forma que pesquisadores e gestores possam reconhecer tendências regionais e apoiar a formulação de políticas educacionais.",
        metodologia: "Os dados da plataforma IPEADATA foram limpos, organizados e processados em Python com Pandas. Matplotlib e Seaborn foram utilizados nas análises estatísticas e visualizações, enquanto o Streamlit permitiu disponibilizar os resultados em um dashboard interativo.",
        resultados: "O estudo evidenciou a redução do analfabetismo no período analisado, além de diferenças relevantes entre municípios. O tratamento dos dados e as visualizações formaram uma base consistente para novas análises e para o acompanhamento de indicadores sociais.",
        equipe: "Ana Elisa Oliveira Silva, Bruno Raphael Andrade Santos, Samyra de Araujo Lobo Silva e Júlio César Costa da Silva.",
        vinculo: "UEMA · Trabalho apresentado na 18ª Semana Acadêmica de Administração da UFMA",
    },
]

export default function Projetos(){
    const [projetoSelecionado, setProjetoSelecionado] = useState<number | null>(null)
    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false)
    const temporizadorFechamento = useRef<number | null>(null)

    const projetoAberto = projetoSelecionado !== null ? projetos[projetoSelecionado] : null

    function abrirDetalhes(index: number){
        if(temporizadorFechamento.current !== null){
            window.clearTimeout(temporizadorFechamento.current)
        }

        setProjetoSelecionado(index)
        requestAnimationFrame(() => setDetalhesVisiveis(true))
    }

    function fecharDetalhes(){
        setDetalhesVisiveis(false)

        if(temporizadorFechamento.current !== null){
            window.clearTimeout(temporizadorFechamento.current)
        }

        temporizadorFechamento.current = window.setTimeout(() => {
            setProjetoSelecionado(null)
            temporizadorFechamento.current = null
        }, 300)
    }

    return(
        <main id="projetos" className="flex items-center justify-center bg-[#f8f8f8] py-20 font-sans">
            <section className="w-full max-w-6xl p-4 text-gray-900">
                <div className="flex flex-col gap-3">
                    <p className="py-2 text-sm font-bold text-[#ffa928] md:py-0">/ PROJETOS</p>
                    <h1 className="text-5xl font-bold md:text-6xl">O que estamos construindo</h1>
                    <p className="max-w-3xl text-lg leading-8 text-gray-600">
                        Pesquisa aplicada, desenvolvimento tecnológico e análise de dados voltados aos desafios sociais e econômicos do Maranhão.
                    </p>
                </div>

                <article className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projetos.map((projeto, index) => (
                        <div key={projeto.titulo} className="flex h-full flex-col overflow-hidden rounded-sm border border-b-2 border-gray-200 border-b-[#ffa928] bg-white">
                            <div className="relative h-56 overflow-hidden bg-white">
                                <Image
                                    src={projeto.imagem}
                                    fill
                                    sizes="(min-width: 640px) 50vw, 100vw"
                                    alt={`Imagem do projeto ${projeto.titulo}`}
                                    className={projeto.imagemContida ? "object-contain p-10" : "object-contain p-4"}
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <p className="w-fit rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-[#d88710]">{projeto.tag}</p>
                                    <p className="text-xs font-bold tracking-wide text-gray-400">{projeto.destaque}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-900">{projeto.titulo}</h2>
                                    <p className="leading-7 text-gray-600">{projeto.descricao}</p>
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                                    {projeto.tecnologias.slice(0, 4).map((tecnologia) => (
                                        <span key={tecnologia} className="rounded-sm bg-gray-100 px-2.5 py-1 text-xs text-gray-600">{tecnologia}</span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => abrirDetalhes(index)}
                                    className="mt-2 w-fit rounded-sm bg-[#ffa928] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                                >
                                    VER DETALHES
                                </button>
                            </div>
                        </div>
                    ))}
                </article>
            </section>

            {projetoAberto && (
                <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-labelledby="titulo-projeto-aberto">
                    <button
                        type="button"
                        aria-label="Fechar detalhes do projeto"
                        onClick={fecharDetalhes}
                        className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${detalhesVisiveis ? "opacity-100" : "opacity-0"}`}
                    />

                    <aside className={`relative z-10 h-full w-full max-w-2xl overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${detalhesVisiveis ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="relative h-64 bg-white sm:h-80">
                            <Image
                                src={projetoAberto.imagem}
                                fill
                                sizes="(min-width: 640px) 672px, 100vw"
                                alt={`Imagem do projeto ${projetoAberto.titulo}`}
                                className={projetoAberto.imagemContida ? "object-contain p-12" : "object-contain p-6"}
                            />
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
                                    <p className="w-fit rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-[#d88710]">{projetoAberto.tag}</p>
                                    <p className="text-xs font-bold tracking-wide text-gray-400">{projetoAberto.destaque}</p>
                                </div>
                                <h2 id="titulo-projeto-aberto" className="text-3xl font-bold leading-tight text-gray-900">{projetoAberto.titulo}</h2>
                                <p className="leading-7 text-gray-600">{projetoAberto.descricao}</p>
                            </header>

                            <section className="flex flex-col gap-2 border-l-3 border-[#ffa928] pl-5">
                                <h3 className="text-xs font-bold tracking-wider text-gray-400">OBJETIVO</h3>
                                <p className="leading-7 text-gray-700">{projetoAberto.objetivo}</p>
                            </section>

                            <section className="flex flex-col gap-2 border-l-3 border-[#ffa928] pl-5">
                                <h3 className="text-xs font-bold tracking-wider text-gray-400">METODOLOGIA</h3>
                                <p className="leading-7 text-gray-700">{projetoAberto.metodologia}</p>
                            </section>

                            <section className="flex flex-col gap-2 border-l-3 border-[#ffa928] pl-5">
                                <h3 className="text-xs font-bold tracking-wider text-gray-400">RESULTADOS E IMPACTO</h3>
                                <p className="leading-7 text-gray-700">{projetoAberto.resultados}</p>
                            </section>

                            {projetoAberto.equipe && (
                                <section className="flex flex-col gap-2">
                                    <h3 className="text-xs font-bold tracking-wider text-gray-400">EQUIPE</h3>
                                    <p className="leading-7 text-gray-700">{projetoAberto.equipe}</p>
                                </section>
                            )}

                            <section className="flex flex-col gap-3">
                                <h3 className="text-xs font-bold tracking-wider text-gray-400">TECNOLOGIAS E MÉTODOS</h3>
                                <div className="flex flex-wrap gap-2">
                                    {projetoAberto.tecnologias.map((tecnologia) => (
                                        <span key={tecnologia} className="rounded-sm bg-gray-100 px-3 py-1.5 text-sm text-gray-600">{tecnologia}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="rounded-sm bg-[#f8f8f8] p-5">
                                <h3 className="text-xs font-bold tracking-wider text-gray-400">VÍNCULO</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-700">{projetoAberto.vinculo}</p>
                            </section>
                        </div>
                    </aside>
                </div>
            )}
        </main>
    )
}
