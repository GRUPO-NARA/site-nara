import Hero from "./componentes/hero";
import Sobre from "./componentes/sobre";
import Header from "./componentes/header"
import Projetos from "./componentes/projetos";
import Importancia from "./componentes/importancia";
import Equipe from "./componentes/equipe";

export default function Nara(){
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Importancia />
      <Projetos />
      <Equipe />
    </>
  )
}