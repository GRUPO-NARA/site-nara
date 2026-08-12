export default function Sobre(){

    let listagem: Record<string, string> = {
        "Laboratório vinculado": "LEA — Laboratório de Engenharia Aplicada",
        "Instituição": "UEMA — Universidade Estadual do Maranhão",
        "Área principal": "Ciência de Dados & Engenharia de Software",
        "Membros ativos": "6 discentes de Eng. da Computação",
        "Projetos" : "2 ativos · 1 concluído · 1 planejado"
    }

    let estatisticas: Record<string, string> = {
        "Análises Realizadas": "20",
        "Clientes Atendidos": "3",
        "Projetos em Andamento": "2",
        "Anos de Experiência": "2"
    }
    
    return (
        <main id="sobre" className="flex justify-center border border-gray-300 bg-[#f8f8f8] py-20 font-sans animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-50 justify-center items-center max-w-6xl p-4">
                <article className="flex flex-col gap-7 col-span-2 md:col-span-1">
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
                        Object.entries(listagem).map(([chave, valor]) => (
                            <div key={chave} className="grid grid-cols-2 border-b border-gray-300 text-[14px] gap-20 py-2">
                                <h2 className="font-bold uppercase text-gray-500">{chave}</h2>
                                <p className="text-gray-900 w-full">{valor}</p>
                            </div>
                        ))
                    }
                </article>
                <article className="col-span-2 md:-translate-y-30">
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {
                            Object.entries(estatisticas).map(([chave, valor]) => (
                                <div key={chave} className="flex flex-col items-center gap-2 bg-[#f8f8f8] py-4 border border-gray-300 rounded-2xl">
                                    <h2 className="font-bold text-[#ffa928] text-lg">{valor}</h2>
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