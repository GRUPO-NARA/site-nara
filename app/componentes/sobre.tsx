import type { Contadores, Laboratorio } from "../lib/dados"
import { atraso } from "../lib/estilo"

type Props = {
    laboratorio: Laboratorio
    contadores: Contadores
    resumoProjetos: string
}

export default function Sobre({ laboratorio, contadores, resumoProjetos }: Props){

    const listagem: Record<string, string> = {
        "Laboratório vinculado": laboratorio.laboratorio,
        "Instituição": laboratorio.instituicao,
        "Área principal": laboratorio.area_principal,
        "Membros ativos": `${contadores.membros_ativos} discentes de Eng. da Computação`,
        "Projetos" : resumoProjetos,
    }

    const estatisticas: Record<string, string> = {
        "Análises Realizadas": String(laboratorio.estatisticas.analises_realizadas),
        "Clientes Atendidos": String(laboratorio.estatisticas.clientes_atendidos),
        "Projetos em Andamento": String(contadores.projetos_andamento + contadores.pesquisas_andamento),
        "Anos de Experiência": String(laboratorio.estatisticas.anos_de_experiencia),
    }

    return (
        <main id="sobre" className="flex justify-center border border-gray-300 bg-[#f8f8f8] py-20 font-sans animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-50 justify-center items-center max-w-6xl p-4">
                <article data-revelar className="flex flex-col gap-7 col-span-2 md:col-span-1">
                    <div className="flex flex-col gap-0 md:gap-3 text-6xl md:text-6xl font-bold md:whitespace-nowrap text-gray-900">
                        <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ SOBRE</p>
                        <h1>Pesquisa aplicada</h1>
                        <h1>em dados</h1>
                    </div>
                    <p className="text-gray-700 text-lg">O NARA é uma vertente do Laboratório de Engenharia Aplicada (LEA) da Universidade Estadual do Maranhão, formado por discentes do curso de Engenharia da Computação.</p>
                    <p className="text-gray-700 text-lg">Atuamos no desenvolvimento de software especializado no estudo e análise de dados, unindo rigor acadêmico com soluções práticas para problemas reais — da coleta e modelagem à visualização e entrega de insights acionáveis.</p>
                </article>
                <article className="col-span-2 md:col-span-1">
                    {
                        Object.entries(listagem).map(([chave, valor], i) => (
                            <div key={chave} data-revelar style={atraso(i * 80)} className="grid grid-cols-2 border-b border-gray-300 text-[14px] gap-20 py-2 transition-colors hover:border-[#ffa928]">
                                <h2 className="font-bold uppercase text-gray-500">{chave}</h2>
                                <p className="text-gray-900 w-full">{valor}</p>
                            </div>
                        ))
                    }
                </article>
                <article className="col-span-2 md:-translate-y-30">
                    <section className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-4">
                        {
                            Object.entries(estatisticas).map(([chave, valor], i) => (
                                <div key={chave} data-revelar style={atraso(i * 110)} className="mx-1 flex flex-col items-center gap-4 rounded-sm border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffa928] hover:shadow-[0_14px_30px_-18px_rgba(255,169,40,0.8)]">
                                    <h2 className="font-bold text-[#ffa928] text-4xl tabular-nums" data-contar={valor}>{valor}</h2>
                                    <p className="text-gray-500 text-[14px]">{chave}</p>
                                </div>
                            ))
                        }
                    </section>

                </article>
            </section>
        </main>
    )
}
