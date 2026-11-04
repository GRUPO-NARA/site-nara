/**
 * Dados do site, lidos do handbook do NARA (fonte única de verdade).
 *
 * - Em produção, busca `${HANDBOOK_URL}/api/site.json` e guarda em cache por 1 hora.
 *   Uma mudança no handbook aparece no site em até 1 hora, sem novo deploy.
 * - Se o handbook estiver fora do ar, usa a cópia local `dados-fallback.json`,
 *   para o build e a página nunca quebrarem. Atualize a cópia com `npm run dados:atualizar`.
 */

import fallback from "./dados-fallback.json"

const HANDBOOK_URL = process.env.HANDBOOK_URL ?? "https://handbook.nucleonara.tech"
const REVALIDAR_SEGUNDOS = 60 * 60

export type Laboratorio = {
    sigla: string
    nome: string
    laboratorio: string
    instituicao: string
    curso: string
    area_principal: string
    email: string
    links: Record<string, string>
    estatisticas: {
        analises_realizadas: number
        clientes_atendidos: number
        anos_de_experiencia: number
    }
}

export type Membro = {
    id: string
    nome: string
    funcao: string | null
    perfil: string | null
    foto: string | null
    posicao_foto: string | null
    github: string | null
    projetos_nomes: string[]
}

/** Projetos e pesquisas têm o mesmo formato de card no site. */
export type Trabalho = {
    id: string
    nome: string
    categoria: string | null
    status: string
    destaque: string | null
    descricao: string
    objetivo: string | null
    metodologia: string | null
    /** Projetos usam `resultados`; pesquisas usam `resultados_texto` (o campo `resultados` delas é uma lista). */
    resultados?: string | string[] | null
    resultados_texto?: string | null
    vinculo: string | null
    stack: string[]
    equipe: string[]
    imagem: string | null
    imagem_contida: boolean
}

export type Contadores = {
    membros_ativos: number
    em_nivelamento: number
    projetos_andamento: number
    projetos_planejados: number
    projetos_concluidos: number
    pesquisas_andamento: number
    pesquisas_planejadas: number
    pesquisas_concluidas: number
}

export type DadosSite = {
    laboratorio: Laboratorio
    contadores: Contadores
    membros: Membro[]
    projetos: Trabalho[]
    pesquisas: Trabalho[]
}

function valido(dados: unknown): dados is DadosSite {
    const d = dados as DadosSite
    return Boolean(d?.laboratorio?.nome && Array.isArray(d.membros) && Array.isArray(d.projetos) && Array.isArray(d.pesquisas))
}

export async function buscarDados(): Promise<DadosSite> {
    try {
        const resposta = await fetch(`${HANDBOOK_URL}/api/site.json`, {
            next: { revalidate: REVALIDAR_SEGUNDOS },
            signal: AbortSignal.timeout(5000),
        })
        if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
        const dados = await resposta.json()
        if (!valido(dados)) throw new Error("formato inesperado")
        return dados
    } catch (erro) {
        console.warn(`[dados] usando cópia local; handbook indisponível (${(erro as Error).message})`)
        return fallback as DadosSite
    }
}

/** Caminho de imagem da pasta public/ (o handbook guarda sem a barra inicial). */
export function caminhoImagem(caminho: string | null): string | null {
    if (!caminho) return null
    return caminho.startsWith("/") ? caminho : `/${caminho}`
}

/** Texto de resultados, independente de ser projeto ou pesquisa. */
export function textoResultados(item: Trabalho): string | null {
    if (item.resultados_texto) return item.resultados_texto
    return typeof item.resultados === "string" ? item.resultados : null
}

/** "2 ativos · 1 planejado" — só com as partes que existem. */
export function resumoProjetos(c: Contadores): string {
    const partes = [
        [c.projetos_andamento, "ativo", "ativos"],
        [c.projetos_concluidos, "concluído", "concluídos"],
        [c.projetos_planejados, "planejado", "planejados"],
    ] as const
    return partes
        .filter(([n]) => n > 0)
        .map(([n, singular, plural]) => `${n} ${n === 1 ? singular : plural}`)
        .join(" · ")
}
