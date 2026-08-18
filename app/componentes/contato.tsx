const informacoes = [
    { titulo: "EMAIL", descricao: "nara@lea.uema.br" },
    { titulo: "LABORATÓRIO", descricao: "LEA · UEMA · São Luís, MA" },
    { titulo: "CURSO", descricao: "Engenharia da Computação" },
]

export default function Contato(){
    return(
        <main id="contato" className="flex justify-center bg-white py-20 font-sans">
            <section className="grid w-full max-w-6xl grid-cols-1 gap-16 p-4 md:grid-cols-2 md:gap-20">
                <article className="flex flex-col">
                    <div className="flex flex-col gap-3 text-gray-900">
                        <p className="py-2 text-sm font-bold text-[#ffa928] md:py-0">/ CONTATO</p>
                        <h1 className="text-5xl font-bold leading-tight">Entre em contato</h1>
                    </div>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700 md:mt-7">
                        Tem um projeto, parceria ou proposta de pesquisa? Estamos abertos a colaborações com empresas, órgãos públicos e outras instituições acadêmicas.
                    </p>

                    <div className="mt-12 flex flex-col gap-6 md:mt-12">
                        {informacoes.map((informacao) => (
                            <div key={informacao.titulo} className="border-l-3 border-[#ffa928] pl-5">
                                <h2 className="text-xs font-bold tracking-wider text-gray-400">{informacao.titulo}</h2>
                                <p className="mt-1 text-base text-gray-900">{informacao.descricao}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <form action="https://formspree.io/f/myegbjqa" method="POST" className="flex flex-col gap-5" aria-label="Formulário de contato">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-xs font-bold tracking-wider text-gray-400">NOME</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Seu nome"
                            className="h-13 rounded-sm border border-gray-200 bg-[#f8f8f8] px-4 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#ffa928]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold tracking-wider text-gray-400">EMAIL</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="h-13 rounded-sm border border-gray-200 bg-[#f8f8f8] px-4 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#ffa928]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="mensagem" className="text-xs font-bold tracking-wider text-gray-400">MENSAGEM</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            placeholder="Descreva seu projeto ou proposta..."
                            className="min-h-34 resize-y rounded-sm border border-gray-200 bg-[#f8f8f8] px-4 py-4 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#ffa928]"
                        />
                    </div>

                    <button
                        type="submit" 
                        className="mt-1 h-13 rounded-sm bg-[#ffa928] text-sm font-bold text-white transition-colors hover:bg-[#e99820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffa928]"
                    >
                        ENVIAR MENSAGEM
                    </button>
                </form>
            </section>
        </main>
    )
}
