import Hero from "./componentes/hero";
import Sobre from "./componentes/sobre";
import Header from "./componentes/header"
import Projetos from "./componentes/projetos";
import Importancia from "./componentes/importancia";
import Equipe from "./componentes/equipe";
import Membros from "./componentes/membros";
import Contato from "./componentes/contato";
import Footer from "./componentes/footer";
import { buscarDados, resumoProjetos } from "./lib/dados";

export default async function Nara(){
  const dados = await buscarDados()
  const { laboratorio, contadores } = dados

  return (
    <>
      <Header />
      <Hero />
      <Sobre laboratorio={laboratorio} contadores={contadores} resumoProjetos={resumoProjetos(contadores)} />
      <Importancia />
      <Projetos
        id="projetos"
        rotulo="/ PROJETOS"
        titulo="O que estamos construindo"
        subtitulo="Pesquisa aplicada, desenvolvimento tecnológico e análise de dados voltados aos desafios sociais e econômicos do Maranhão."
        itens={dados.projetos}
      />
      <Projetos
        id="pesquisa"
        rotulo="/ PESQUISA"
        titulo="O que estamos investigando"
        subtitulo="Estudos com dados públicos sobre o Maranhão, do levantamento das fontes à publicação dos resultados."
        itens={dados.pesquisas}
        fundoBranco
      />
      <Equipe nome={laboratorio.nome} sigla={laboratorio.sigla} totalMembros={contadores.membros_ativos} />
      <Membros membros={dados.membros} />
      <Contato />
      <Footer />
    </>
  )
}
