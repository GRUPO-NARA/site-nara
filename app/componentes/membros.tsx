import Image from "next/image"

export default function Membros(){

    const membros = [
        {
            "nome" : "Ana Elisa Oliveira Silva",
            "cargo" : "PESQUISADORA E DESENVOLVEDORA",
            "projetos" : ["Mapa Social do Maranhão", "VizuData: Decisões Inteligentes com Dados", "Analfabetismo nos Municípios do Maranhão"],
            "area" : "Analista de Dados e Desenvolvimento Full Stack",
            "foto" : "/ana.jpg",
            "posicaoFoto" : "100% 100%"
        },
        {
            "nome" : "Bruno Raphael Andrade Santos",
            "cargo" : "PESQUISADOR E DESENVOLVEDOR",
            "projetos" : ["Mapa Social do Maranhão", "VizuData: Decisões Inteligentes com Dados", "Analfabetismo nos Municípios do Maranhão"],
            "area" : "Analista de Dados e Desenvolvimento Back-end",
            "foto" : "/bruno.jpeg",
            "posicaoFoto" : "50% 60%"
        },
        {
            "nome" : "Carlos Vinícius Rodrigues Amorim",
            "cargo" : "PESQUISADOR E DESENVOLVEDOR",
            "projetos" : ["Mapa Social do Maranhão", "VizuData: Decisões Inteligentes com Dados", "Analfabetismo nos Municípios do Maranhão"],
            "area" : "Analista de Dados e Desenvolvimento Full Stack",
            "foto" : "/carlos.jpg",
            "posicaoFoto" : "50% 70%"
        },
        {
            "nome" : "Júlio Cesar Costa da Silva",
            "cargo" : "PESQUISADOR E DESENVOLVEDOR",
            "projetos" : ["Mapa Social do Maranhão", "VizuData: Decisões Inteligentes com Dados", "Analfabetismo nos Municípios do Maranhão"],
            "area" : "Analista de Dados e Desenvolvimento Full Stack",
            "foto" : "/julio.jpeg",
            "posicaoFoto" : "50% 50%"
        },
        {
            "nome" : "Luca Maia Marques",
            "cargo" : "ANALISTA DE DADOS",
            "projetos" : ["VizuData: Decisões Inteligentes com Dados"],
            "area" : "Analista de Dados",
            "foto" : "/luca.jpeg",
            "posicaoFoto" : "50% 50%"
        }
    ]

    return(
        <main id="membros" className="flex justify-center bg-[#f8f8f8] py-20 font-sans scroll-mt-8">
            <section className="flex flex-col gap-12 max-w-6xl w-full p-4">
                <article className="flex flex-col gap-3 text-gray-900">
                    <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ MEMBROS</p>
                    <h1 className="text-5xl md:text-5xl font-bold">Conheça nossa equipe</h1>
                </article>

                <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        membros.map((membro, index) => (
                            <div key={index} className="overflow-hidden rounded-sm border border-gray-200 bg-white">
                                {
                                    membro.foto ? (
                                        <Image className="aspect-square w-full object-cover border-b border-gray-300"
                                            src={membro.foto}
                                            width={600}
                                            height={600}
                                            sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
                                            style={{ objectPosition: membro.posicaoFoto }}
                                            alt={`Foto de ${membro.nome}`}
                                        />
                                    ) : (
                                        <div className="h-56 bg-gray-100 flex justify-center items-center border-b border-gray-300">
                                            <p className="text-gray-400 text-sm">Foto do membro</p>
                                        </div>
                                    )
                                }
                                <section className="flex flex-col gap-5 p-6">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-bold text-gray-900">{membro.nome}</h2>
                                        <p className="text-gray-400 text-sm font-bold tracking-wide">{membro.cargo}</p>
                                    </div>
                                    <div className="h-px bg-gray-200"></div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-gray-400 text-xs font-bold tracking-wider">PROJETOS</p>
                                        <ul className="flex flex-col gap-1.5">
                                            {membro.projetos.map((projeto) => (
                                                <li key={projeto} className="flex items-start gap-2 text-sm leading-5 text-gray-900">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffa928]" aria-hidden="true" />
                                                    <span>{projeto}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="border border-[#ffa928] text-[#d88710] px-3 py-1.5 rounded-full text-xs font-semibold w-fit">{membro.area}</p>
                                    </div>
                                </section>
                            </div>
                        ))
                    }
                </article>
            </section>
        </main>
    )
}
