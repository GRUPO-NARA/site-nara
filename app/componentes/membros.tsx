import Image from "next/image"

export default function Membros(){

    const membros = [
        {
            "nome" : "Ana Elisa Oliveira Silva",
            "cargo" : "COORDENADORA",
            "projeto" : "Análise Preditiva de Demanda",
            "area" : "Machine Learning",
            "foto" : "/ana.jpg",
            "posicaoFoto" : "50% 50%"
        },
        {
            "nome" : "Bruno Raphael Andrade Santos",
            "cargo" : "ENGENHEIRO DE DADOS",
            "projeto" : "Dashboard de Indicadores",
            "area" : "Desenvolvimento Back-end",
            "foto" : "/bruno.jpeg",
            "posicaoFoto" : "50% 60%"
        },
        {
            "nome" : "Carlos Vinícius Rodrigues Amorim",
            "cargo" : "PESQUISADORA",
            "projeto" : "Mineração de Texto",
            "area" : "NLP & Linguagem",
            "foto" : "/carlos.jpg",
            "posicaoFoto" : "50% 70%"
        },
        {
            "nome" : "Júlio Cesar Costa da Silva",
            "cargo" : "COORDENADOR",
            "projeto" : "Sistema de Monitoramento IoT",
            "area" : "APIs & Sistemas",
            "foto" : "/julio.jpeg",
            "posicaoFoto" : "50% 50%"
        },
        {
            "nome" : "Luca Maia Marques",
            "cargo" : "ANALISTA DE DADOS",
            "projeto" : "Visualização de Dados",
            "area" : "Analista de dados",
            "foto" : "/luca.jpeg",
            "posicaoFoto" : "50% 50%"
        }
    ]

    return(
        <main id="membros" className="flex justify-center bg-white py-20 font-sans scroll-mt-8">
            <section className="flex flex-col gap-12 max-w-6xl w-full p-4">
                <article className="flex flex-col gap-3 text-gray-900">
                    <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ MEMBROS</p>
                    <h1 className="text-5xl md:text-5xl font-bold">Conheça nossa equipe</h1>
                </article>

                <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        membros.map((membro, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden bg-white">
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
                                        <p className="text-gray-400 text-xs font-bold tracking-wider">PROJETO</p>
                                        <p className="text-gray-900 text-sm">{membro.projeto}</p>
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
