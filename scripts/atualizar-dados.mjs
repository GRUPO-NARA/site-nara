// Atualiza a cópia local dos dados (app/lib/dados-fallback.json) a partir do handbook.
// Uso: npm run dados:atualizar
//
// A cópia só é usada quando o handbook está fora do ar. Rode este script de vez em
// quando (ou antes de um deploy importante) para ela não ficar muito desatualizada.

import { writeFile } from "node:fs/promises"

const url = `${process.env.HANDBOOK_URL ?? "https://handbook.nucleonara.tech"}/api/site.json`
const destino = new URL("../app/lib/dados-fallback.json", import.meta.url)

const resposta = await fetch(url)
if (!resposta.ok) {
    console.error(`Falha ao baixar ${url}: HTTP ${resposta.status}`)
    process.exit(1)
}

const dados = await resposta.json()
await writeFile(destino, JSON.stringify(dados, null, 2) + "\n")
console.log(`✓ Cópia local atualizada: ${dados.membros.length} membros, ${dados.projetos.length} projetos, ${dados.pesquisas.length} pesquisas`)
