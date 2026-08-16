export default function Importancia(){
    
    type formatoDasInfos = {
        numeracao: string;
        titulo: string;
        informacao: string;
    }

    let informacoes: Record<string, formatoDasInfos> = {
        "Quadrado 1": {
            numeracao: "01",
            titulo: "Formação técnica avançada",
            informacao: "Capacitamos estudantes com ferramentas, metodologias e experiências práticas em análise de dados e desenvolvimento de sistemas especializados."
        },
        "Quadrado 2": {
            numeracao: "02",
            titulo: "Impacto regional",
            informacao: "Nossos projetos endereçam problemas concretos do Maranhão, gerando soluções que beneficiam instituições locais e a comunidade."
        },
        "Quadrado 3": {
            numeracao: "03",
            titulo: "Ponte academia-mercado",
            informacao: "Conectamos pesquisa acadêmica com demandas reais, preparando profissionais para os desafios o setor de tecnologia e dados.  "
        },
        "Quadrado 4": {
            numeracao: "04",
            titulo: "Produção científica",
            informacao: "Contribuímos com artigos, relatórios e ferramentas de código aberto que expandem o conhecimento na área e ciência de dados aplicada."
        }
    }

    return(
        <main id= "importancia" className="flex justify-center font-sans py-20 bg-[#f8f8f8]">
            <section className="gap-20 md:gap-50 justify-center items-center max-w-6xl p-4">
                <article className="flex flex-col items-center text-center gap-7 text-gray-900">
                    <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ IMPORTÂNCIA</p>
                    <h1 className="text-6xl md:text-6xl text-gray-900 font-sans font-bold"> Por que dados importam</h1>
                    <p className= "text-gray-700 text-lg"> Na era da informação, transformar dados brutos em conhecimento acionável é uma competência estratégica. O NARA forma engenheiros preparados para essa demanda. </p>
                </article >

                <article className="mt-16">
                    <section className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
                        {Object.entries(informacoes).map(([chave, info]) => (
                            <div key={chave} className="flex flex-col items-left gap-4 border border-b-2 border-b-[#ffa928] border-gray-200 rounded-sm bg-white p-6 mx-1">
                                <p className="text-xs font-bold text-[#ffa928]">{info.numeracao}</p>
                                <h2 className="text-xl font-bold text-gray-900"> {info.titulo}</h2>
                                <p className="text-sm leading-relaxed text-gray-500"> {info.informacao}</p>
                            </div>
                        ))}
                    </section>
                </article>
            </section>
        </main>
    )
}