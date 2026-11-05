import type { CSSProperties } from "react"

/** Atraso de animação para itens em sequência: style={atraso(120)} */
export function atraso(ms: number): CSSProperties {
    return { ["--atraso" as string]: `${ms}ms` } as CSSProperties
}
