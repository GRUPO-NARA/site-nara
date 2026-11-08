# Site do NARA

[![CI](https://github.com/GRUPO-NARA/site-nara/actions/workflows/ci.yml/badge.svg)](https://github.com/GRUPO-NARA/site-nara/actions/workflows/ci.yml)

Site institucional do **NARA – Núcleo de Análise e Recursos Analíticos**, grupo de pesquisa do LEA (Engenharia da Computação, UEMA, São Luís – MA).

O site tem uma página só, com estas seções: início, sobre, projetos, pesquisa, equipe e contato. **Membros, projetos, pesquisas e números do laboratório não ficam neste repositório.** Eles vêm do [handbook do NARA](https://github.com/GRUPO-NARA/nara-handbook), que é a fonte única desses dados.

## Sumário

- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [De onde vêm os dados](#de-onde-vêm-os-dados)
- [Como atualizar o conteúdo](#como-atualizar-o-conteúdo)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Componentes](#componentes)
- [Animações](#animações)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [GitHub Actions](#github-actions)
- [Deploy](#deploy)
- [Como contribuir](#como-contribuir)

## Tecnologias

| O quê | Versão |
|---|---|
| Next.js (App Router) | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Node.js | 22 (recomendado) |

Fontes: Geist e Geist Mono, via `next/font/google`.

## Como rodar

```bash
npm install
npm run dev          # http://localhost:3000
```

Outros comandos:

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento, com recarga automática |
| `npm run build` | Build de produção (também confere os tipos do TypeScript) |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | ESLint |
| `npm run dados:atualizar` | Atualiza a cópia local dos dados do handbook ([veja abaixo](#a-cópia-local-dados-fallbackjson)) |

Não precisa de `.env` para rodar. Sem nenhuma variável, o site usa o handbook de produção.

## De onde vêm os dados

```text
nara-handbook (data/*.yml)
        │  build do MkDocs
        ▼
handbook.nucleonara.tech/api/site.json
        │  fetch, com cache de 1 hora
        ▼
site-nara (app/lib/dados.ts → app/page.tsx → componentes)
        │
        └─ se o handbook não responder em 5 s → app/lib/dados-fallback.json
```

- A página (`app/page.tsx`) chama `buscarDados()` de `app/lib/dados.ts`.
- `buscarDados()` baixa `${HANDBOOK_URL}/api/site.json` e guarda em cache por **1 hora** (`revalidate`). Por isso, uma mudança no handbook aparece no site em até 1 hora, **sem novo deploy**.
- Se o handbook estiver fora do ar, demorar mais de 5 segundos ou devolver um formato inesperado, o site usa a cópia local `app/lib/dados-fallback.json`. Assim o build e a página nunca quebram por causa do handbook. O aviso `[dados] usando cópia local` aparece no log do servidor.

### Formato do `site.json`

Os tipos estão em `app/lib/dados.ts`:

| Campo | Tipo | Conteúdo |
|---|---|---|
| `laboratorio` | `Laboratorio` | Sigla, nome, laboratório, instituição, curso, área, e-mail, links e estatísticas (análises realizadas, clientes atendidos, anos de experiência) |
| `contadores` | `Contadores` | Membros ativos, membros em nivelamento, e projetos e pesquisas por situação (andamento, planejados, concluídos) |
| `membros` | `Membro[]` | Membros **ativos**, com função, perfil, foto, enquadramento da foto, GitHub e nomes dos projetos |
| `projetos` | `Trabalho[]` | Projetos: descrição, objetivo, metodologia, resultados, stack, equipe e imagem |
| `pesquisas` | `Trabalho[]` | Pesquisas, no mesmo formato de card dos projetos |

Projetos e pesquisas guardam os resultados de jeitos diferentes. Projetos usam `resultados` (texto). Pesquisas usam `resultados_texto`, porque nelas o campo `resultados` é uma lista. A função `textoResultados()` resolve isso para os componentes.

### A cópia local (`dados-fallback.json`)

É uma foto do `site.json` num certo momento. Ela só é usada quando o handbook falha, mas precisa estar recente. Para atualizar na mão:

```bash
npm run dados:atualizar
```

O script `scripts/atualizar-dados.mjs` baixa o `site.json` e grava por cima do arquivo. Toda segunda-feira o GitHub Actions faz isso sozinho e abre um PR se algo mudou ([veja abaixo](#github-actions)).

## Como atualizar o conteúdo

| Quero... | Onde mexer |
|---|---|
| Adicionar, editar ou tirar um membro | `data/membros.yml` no **handbook** (só membros com `status: ativo` aparecem no site) |
| Adicionar ou editar um projeto | `data/projetos.yml` no **handbook** |
| Adicionar ou editar uma pesquisa | `data/pesquisas.yml` no **handbook** |
| Mudar e-mail, links ou estatísticas do laboratório | `data/laboratorio.yml` no **handbook** |
| Mudar textos fixos (hero, "por que importa", contato) | Componente correspondente em `app/componentes/` **neste repositório** |
| Mudar visual, cores ou layout | `app/componentes/` e `app/globals.css` **neste repositório** |

### Fotos e imagens

As imagens ficam **neste repositório**, em `public/`. O handbook só guarda o caminho delas, sem a barra inicial.

| Tipo | Pasta | Exemplo no handbook |
|---|---|---|
| Foto de membro | `public/equipe/` | `foto: equipe/julio.jpeg` |
| Imagem de projeto ou pesquisa | `public/projetos/` | `imagem: projetos/mapasocial.jpeg` |
| Logos e ícones | `public/logo/` | (usados direto nos componentes) |

Para adicionar um membro novo com foto:

1. Neste repositório, coloque a foto em `public/equipe/nome.jpg` e abra um PR.
2. No handbook, adicione o membro em `data/membros.yml` com `foto: equipe/nome.jpg`.
3. Se o rosto ficar cortado no card, ajuste `posicao_foto` (CSS `object-position`, ex.: `"50% 30%"`).

Faça o passo 1 antes do 2: se o handbook apontar para uma foto que ainda não está no site, a imagem do card fica quebrada até o deploy.

## Estrutura de pastas

```text
site-nara/
├── app/
│   ├── layout.tsx              # HTML raiz, fontes, título e descrição da página
│   ├── page.tsx                # a página única: busca os dados e monta as seções
│   ├── globals.css             # Tailwind, cores e classes das animações
│   ├── componentes/            # uma seção do site por arquivo (veja abaixo)
│   └── lib/
│       ├── dados.ts            # busca no handbook, tipos e funções de apoio
│       ├── dados-fallback.json # cópia local dos dados (usada se o handbook cair)
│       └── estilo.ts           # atraso() para escalonar animações
├── public/
│   ├── equipe/                 # fotos dos membros
│   ├── projetos/               # imagens dos projetos e pesquisas
│   └── logo/                   # logo do NARA e ícones das redes
├── scripts/
│   └── atualizar-dados.mjs     # npm run dados:atualizar
└── .github/workflows/          # CI e atualização automática dos dados
```

## Componentes

Todos ficam em `app/componentes/`, na ordem em que aparecem na página:

| Componente | Âncora | O que mostra | Recebe dados do handbook? |
|---|---|---|---|
| `header.tsx` | — | Menu fixo, com links para as seções e menu mobile | Não |
| `hero.tsx` | `#inicio` | Abertura com a logo e a chamada principal | Não |
| `sobre.tsx` | `#sobre` | Ficha do laboratório e números (análises, clientes, anos, projetos) | Sim: `laboratorio`, `contadores` |
| `importancia.tsx` | `#importancia` | Por que o trabalho do NARA importa | Não |
| `projetos.tsx` | `#projetos` / `#pesquisa` | Cards de projetos ou pesquisas. É usado duas vezes na página | Sim: `projetos`, `pesquisas` |
| `equipe.tsx` | `#equipe` | Foto da equipe (`public/equipe/equipe.jpeg`) e apresentação | Sim: nome, sigla, total de membros |
| `membros.tsx` | `#membros` | Cards dos membros ativos | Sim: `membros` |
| `contato.tsx` | `#contato` | E-mail, laboratório, curso e formulário de contato (enviado pelo Formspree) | Não (texto fixo no componente) |
| `footer.tsx` | — | Rodapé com LinkedIn, GitHub e Instagram | Não |
| `efeitos.tsx` | — | Não renderiza nada; liga as animações de rolagem | — |

`projetos.tsx` recebe `id`, `rotulo`, `titulo`, `subtitulo` e `itens`. Para pôr os cards num fundo branco, passe `fundoBranco`. É assim que a mesma seção vira "Projetos" e "Pesquisa" em `page.tsx`.

Funções de apoio em `app/lib/dados.ts`:

| Função | Para que serve |
|---|---|
| `buscarDados()` | Busca o `site.json` (ou usa a cópia local) |
| `caminhoImagem(caminho)` | Acrescenta a `/` inicial nos caminhos que vêm do handbook |
| `textoResultados(item)` | Devolve o texto de resultados, seja projeto ou pesquisa |
| `resumoProjetos(contadores)` | Monta "2 ativos · 1 planejado", só com as partes que existem |

## Animações

As animações de rolagem são feitas em `efeitos.tsx`, com `IntersectionObserver`, sem nenhuma biblioteca:

| Atributo | Efeito |
|---|---|
| `data-revelar` | O elemento aparece com fade e uma leve subida quando entra na tela |
| `data-contar` | O número conta de 0 até o valor escrito no próprio elemento |

Para escalonar itens em sequência, use `style={atraso(120)}`, de `app/lib/estilo.ts`.

As animações só ligam quando o script adiciona a classe `.anima` no `<html>`. Por isso, sem JavaScript ou com "reduzir movimento" ligado no sistema, todo o conteúdo aparece pronto.

## Variáveis de ambiente

| Variável | Para que serve | Padrão |
|---|---|---|
| `HANDBOOK_URL` | Endereço do handbook de onde vêm os dados, sem barra no final. Útil para testar com um handbook local (`http://localhost:8000`) | `https://handbook.nucleonara.tech` |

Vale tanto para o site quanto para o `npm run dados:atualizar`.

## GitHub Actions

| Workflow | Quando roda | O que faz |
|---|---|---|
| **CI** (`ci.yml`) | Todo pull request e todo push na `main` e na `develop` | `npm ci`, lint e build (o build também confere os tipos) |
| **Atualizar dados do handbook** (`atualizar-dados.yml`) | Toda segunda às 08h17 (Brasília), ou na mão pela aba Actions | Roda `npm run dados:atualizar` e, se a cópia local mudou, abre (ou atualiza) um PR na branch `chore/atualizar-dados-handbook` |

Para o segundo workflow conseguir abrir PRs, a opção **Settings → Actions → General → "Allow GitHub Actions to create and approve pull requests"** precisa estar marcada.

O PR aberto pelo bot não dispara o CI sozinho, por uma limitação do GitHub. Para rodar o CI nele, feche e reabra o PR.

### Formulário de contato

O formulário da seção de contato envia as mensagens pelo [Formspree](https://formspree.io), que repassa para o e-mail configurado lá. O endereço do formulário fica no `action` do `<form>` em `app/componentes/contato.tsx`.

## Deploy

O site roda na VPS do laboratório, gerenciada pelo **Coolify**. Cada push na `main` faz um redeploy automático. Detalhes da infraestrutura estão no handbook, em *Laboratório → Infraestrutura*.

Lembre que:

- mudanças em **dados** (membros, projetos, pesquisas) não precisam de deploy: aparecem em até 1 hora, depois do deploy do handbook;
- mudanças em **código, textos fixos ou imagens** precisam de merge na `main`.

## Como contribuir

1. Crie uma branch a partir da `main`: `feat/...`, `fix/...`, `docs/...` ou `chore/...`.
2. Rode `npm run lint` e `npm run build` antes de abrir o PR.
3. Abra o PR para a `main`. O CI precisa passar antes do merge.
4. Mensagens de commit no padrão `tipo: descrição em português` (ex.: `feat: adiciona seção de parceiros`).
