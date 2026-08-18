import Image from "next/image"

export default function Membros(){

    const membros = [
        {
            "nome" : "Ana Beatriz Sousa",
            "cargo" : "COORDENADORA",
            "projeto" : "Análise Preditiva de Demanda",
            "area" : "Machine Learning",
            "foto" : "/membros/ana-beatriz.jpg"
        },
        {
            "nome" : "Carlos Eduardo Lima",
            "cargo" : "ENGENHEIRO DE DADOS",
            "projeto" : "Dashboard de Indicadores",
            "area" : "Data Engineering",
            "foto" : "/membros/carlos-eduardo.jpg" 
        },
        {
            "nome" : "Fernanda Rocha",
            "cargo" : "PESQUISADORA",
            "projeto" : "Mineração de Texto",
            "area" : "NLP & Linguagem",
            "foto" : "/membros/fernanda-rocha.jpg"
        },
        {
            "nome" : "João Pedro Martins",
            "cargo" : "DESENVOLVEDOR BACKEND",
            "projeto" : "Sistema de Monitoramento IoT",
            "area" : "APIs & Sistemas",
            "foto" : "/membros/joao-pedro.jpg" 
        },
        {
            "nome" : "Larissa Cunha",
            "cargo" : "ANALISTA DE DADOS",
            "projeto" : "Visualização de Dados",
            "area" : "Data Analytics",
            "foto" : "/membros/larissa-cunha.jpg" 
        },
        {
            "nome" : "Rafael Mendes",
            "cargo" : "PESQUISADOR",
            "projeto" : "Modelagem Estatística",
            "area" : "Estatística",
            "foto" : "/membros/rafael-mendes.jpg" 
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
                                        <Image src={membro.foto} width={600} height={400} className="w-full h-56 object-cover border-b border-gray-300" alt={`Foto de ${membro.nome}`} />
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
