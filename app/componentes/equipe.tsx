export default function Equipe(){
    return(
        <main id="equipe" className="flex justify-center bg-white py-20 font-sans">
            <section className="flex flex-col gap-16 max-w-6xl w-full p-4">
                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-end">
                    <div className="flex flex-col gap-3 text-gray-900">
                        <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ EQUIPE</p>
                        <h1 className="text-5xl md:text-5xl font-bold">Quem somos</h1>
                    </div>
                    <p className="text-gray-500 text-base leading-6 md:pb-1">Discentes do curso de Engenharia da Computação da UEMA, unidos pela paixão por dados e tecnologia.</p>
                </article>

                <article className="relative h-[360px] md:h-[520px] rounded-lg overflow-hidden">
                    <img src="/equipe/equipe.jpeg" className="w-full h-full object-cover" alt="Equipe reunida em torno de um computador" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                    <section className="absolute inset-x-0 bottom-0 flex flex-col gap-5 md:flex-row md:justify-between md:items-end p-6 md:p-10 text-white">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-bold tracking-[0.16em]">NARA · LEA · UEMA</p>
                            <h2 className="text-xl md:text-2xl font-bold">Núcleo de Análise e Recursos Analíticos</h2>
                        </div>
                        <a href="#membros" className="bg-[#ffa928] px-5 py-3 rounded text-sm font-bold w-fit whitespace-nowrap hover:bg-[#e99820] transition-colors">6 pesquisadores</a>
                    </section>
                </article>
            </section>
        </main>
    )
}
