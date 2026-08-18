"use client"

import { useState } from "react";

export default function Projetos() {

    let projetos = [
        {
            "tag" : "MACHINE LEARNING",
            "titulo" : "Analise Preditiva de Demanda",
            "descricao" : "O projeto de análise preditiva de demanda tem como objetivo utilizar técnicas de machine learning para prever a demanda futura de produtos ou serviços.",
            "corCard" : "bg-white",
            "tecnologias" : ["Python", "Scikit-learn", "Pandas"],
            "maisDetalhes" : {
                "foto" : "/projetos/images.jpg",
                "objetivo" : "O objetivo do projeto é fornecer uma ferramenta que permita às empresas antecipar a demanda de seus produtos ou serviços, otimizando o planejamento e a alocação de recursos.",
                "metodologia" : "A metodologia envolve a coleta de dados históricos de vendas, a limpeza e pré-processamento desses dados, a seleção de características relevantes e o treinamento de modelos de machine learning para prever a demanda futura.",
                "resultadosEsperados" : "Espera-se que o modelo seja capaz de fornecer previsões precisas da demanda, permitindo que a empresa tome decisões mais informadas sobre estoque, produção e logística, resultando em maior eficiência operacional e redução de custos.",
                "parcerias" : ["Empresa X", "Instituição Y"],
                "proximosPassos" : "Os próximos passos incluem a implementação do modelo em um ambiente de produção, a integração com sistemas de gestão da empresa e a realização de testes contínuos para melhorar a precisão das previsões.",
                "linkGitHub" : "https://github.com/seu-usuario/projeto-analise-preditiva",
                "linkDemo" : "https://demo-projeto-analise-preditiva.com",
            }
        },
        {
            "tag" : "WEB DEVELOPMENT",
            "titulo" : "Plataforma de E-commerce",
            "descricao" : "O projeto de plataforma de e-commerce visa criar um ambiente online para a venda de produtos ou serviços. A plataforma permitirá que os usuários navegu",
            "tecnologias" : ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
            "corCard" : "bg-[#f8f8f8]",
            "maisDetalhes" : {
                "foto" : "/projetos/preditiva.jpg",
                "objetivo" : "O objetivo do projeto é criar uma plataforma de e-commerce completa, com funcionalidades para gerenciar produtos, pedidos e pagamentos.",
                "metodologia" : "A metodologia envolve a definição de requisitos, o design da interface do usuário, o desenvolvimento do backend e frontend, e a implementação de recursos de segurança e desempenho.",
                "resultadosEsperados" : "Espera-se que a plataforma seja capaz de oferecer uma experiência de compra online segura e eficiente, com uma interface intuitiva e recursos avançados para os administradores.",
                "parcerias" : ["Empresa X", "Instituição Y"],
                "proximosPassos" : "Os próximos passos incluem a implementação da plataforma em um ambiente de produção, a integração com sistemas de pagamento e logística, e a realização de testes contínuos para garantir a qualidade do serviço.",
                "linkGitHub" : "https://github.com/seu-usuario/projeto-e-commerce",
                "linkDemo" : "https://demo-projeto-e-commerce.com",
            }
        },
        {
            "tag" : "DATA VISUALIZATION",
            "titulo" : "Dashboard Interativo de Análise de Dados",
            "descricao" : "O projeto de dashboard interativo de análise de dados tem como objetivo fornecer uma interface visual para explorar e interpretar grandes volumes de dados. Através de gráficos, tabelas e filtros interativos, os usuários poderão identificar tendências, padrões e insights relevantes. O dashboard será projetado para ser intuitivo e responsivo, permitindo que os usuários personalizem a visualização dos dados de acordo com suas necessidades.",
            "tecnologias" : ["D3.js", "Plotly", "Tableau", "JavaScript", "HTML/CSS"],
            "maisDetalhes" : {
                "foto" : "/projetos/saude.jpg",
                "objetivo" : "O objetivo do projeto é criar um dashboard interativo para visualizar dados de análise.",
                "metodologia" : "A metodologia envolve a coleta e processamento de dados, o design da interface do usuário e a implementação da solução.",
                "resultadosEsperados" : "Espera-se que o dashboard seja capaz de apresentar os dados de forma clara e intuitiva, permitindo que os usuários tomem decisões baseadas em informações confiáveis.",
                "parcerias" : ["Empresa X", "Instituição Y"],
                "proximosPassos" : "Os próximos passos incluem a implementação do dashboard em um ambiente de produção, a integração com fontes de dados existentes e a realização de testes contínuos para garantir a qualidade do serviço.",
                "linkGitHub" : "https://github.com/seu-usuario/projeto-dashboard",
                "linkDemo" : "https://demo-projeto-dashboard.com",
            },
            "corCard" : "bg-white",
            "linkGitHub" : "https://github.com/seu-usuario/projeto-dashboard",
            "linkDemo" : "https://demo-projeto-dashboard.com"
        },
        {
            "tag" : "MOBILE DEVELOPMENT",
            "titulo" : "Aplicativo de Monitoramento de Saúde",
            "descricao" : "O projeto de aplicativo de monitoramento de saúde tem como objetivo fornecer aos usuários uma ferramenta para acompanhar e gerenciar sua saúde e bem-estar. O aplicativo permitirá que os usuários registrem informações sobre atividades físicas, alimentação, sono e sinais vitais. Além disso, o aplicativo fornecerá lembretes personalizados, gráficos de progresso e recomendações baseadas em dados para ajudar os usuários a manter um estilo de vida saudável.",
            "tecnologias" : ["Flutter", "Dart", "Firebase", "SQLite", "REST API"],
            "corCard" : "bg-[#f8f8f8]",
            "linkGitHub" : "https://github.com/seu-usuario/projeto-monitoramento-saude",
            "linkDemo" : "https://demo-projeto-monitoramento-saude.com",
            "maisDetalhes" : {
                "foto" : "/projetos/teste.webp",
                "objetivo" : "O objetivo do projeto é criar um aplicativo de monitoramento de saúde que permita aos usuários acompanhar e gerenciar sua saúde e bem-estar.",
                "metodologia" : "A metodologia envolve a definição de requisitos, o design da interface do usuário, o desenvolvimento do aplicativo e a implementação de recursos de segurança e desempenho.",
                "resultadosEsperados" : "Espera-se que o aplicativo seja capaz de fornecer informações precisas e relevantes sobre a saúde dos usuários, ajudando-os a tomar decisões informadas sobre seu estilo de vida.",
                "parcerias" : ["Empresa X", "Instituição Y"],
                "proximosPassos" : "Os próximos passos incluem a implementação do aplicativo em um ambiente de produção, a integração com dispositivos de monitoramento de saúde e a realização de testes contínuos para garantir a qualidade do serviço.",
                "linkGitHub" : "https://github.com/seu-usuario/projeto-monitoramento-saude",
                "linkDemo" : "https://demo-projeto-monitoramento-saude.com"
            }
        }
    ]


    const [isBotaoMaisDetalhesClicado, setIsBotaoMaisDetalhesClicado] = useState(false);
    const [indexProjetoSelecionado, setIndexProjetoSelecionado] = useState<number | null>(null);

    function handleMaisDetalhesClick(index: number) {
        setIsBotaoMaisDetalhesClicado(!isBotaoMaisDetalhesClicado);
        setIndexProjetoSelecionado(index);
    }
    
    return (
        <main id="projetos" className="flex justify-center items-center p-20">
            <section className="text-gray-900 max-w-6xl w-full p-4">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-[#ffa928] text-sm py-2 md:py-0">/ PROJETOS</p>
                    <h1 className="text-6xl md:text-5xl font-bold">O que estamos construindo</h1>
                </div>
                <section className="translate-y-10 md:translate-y-10">
                    <article className="grid grid-cols-1 md:grid-cols-3 gap-10 col-span-2">
                        {
                            projetos.map((projeto, index) => (
                                <div key={index} className={`flex flex-col gap-3 border border-gray-300 rounded-2xl hover:scale-105 transition-transform duration-300 ${projeto.corCard} overflow-hidden `}>
                                    <img src={projeto.maisDetalhes.foto} className="w-full h-[70%] object-cover" alt={projeto.titulo} />
                                    <article className="flex flex-col gap-3 p-4">
                                        <p className="bg-amber-50 w-fit p-2 rounded-2xl text-[#ffa928] font-semibold text-sm border border-amber-100">{projeto.tag}</p>
                                        <h1 className="text-xl font-bold">{projeto.titulo}</h1>
                                        <p className="text-gray-700">{projeto.descricao}</p>
                                        <div className="w-full h-0.5 bg-gray-100 rounded"></div>
                                        <article className="flex justify-between items-center">
                                            {
                                                projeto.tecnologias && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {
                                                            projeto.tecnologias.map((tecnologia, index) => (
                                                                <p key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-sm">{tecnologia}</p>
                                                            ))
                                                        }
                                                    </div>
                                                )
                                            }
                                            <button onClick={handleMaisDetalhesClick.bind(null, index)} className="bg-[#ffa928] text-white whitespace-nowrap p-1 rounded">Mais detalhes</button>
                                        </article>
                                        
                                        
                                    </article>

                                </div>
                            ))
                        }
                    </article>
                </section>
                {
                    isBotaoMaisDetalhesClicado && indexProjetoSelecionado !== null && (
                        <section className="fixed bg-black w-150 h-screen right-0 top-0 z-50 flex flex-col overflow-hidden">
                            <img src={projetos[indexProjetoSelecionado].maisDetalhes.foto} alt={projetos[indexProjetoSelecionado].titulo} />
                            <nav className="flex justify-between absolute top-0 left-0 w-full p-4 text-white translate-y-2">
                                <h1>{projetos[indexProjetoSelecionado].titulo}</h1>
                                <button onClick={handleMaisDetalhesClick.bind(null, indexProjetoSelecionado)} className="">Fechar</button>
                            </nav>
                        </section>
                    )
                }
            </section>
        </main>
    )
}