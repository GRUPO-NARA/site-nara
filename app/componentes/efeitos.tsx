"use client"

import { useEffect } from "react"

/**
 * Efeitos de rolagem do site (não renderiza nada):
 *
 * - [data-revelar]  o elemento entra com fade e leve subida quando aparece na tela.
 *                   Use style={{ "--atraso": "120ms" }} para escalonar itens em sequência.
 * - [data-contar]   número que conta de 0 até o valor do próprio texto ao aparecer.
 *
 * Sem JavaScript, ou com "reduzir movimento" ligado no sistema, tudo aparece pronto,
 * porque as animações só são ativadas pela classe .anima no <html>, adicionada aqui.
 */
export default function Efeitos(){
    useEffect(() => {
        const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduzir) return

        const raiz = document.documentElement
        raiz.classList.add("anima")

        const revelar = new IntersectionObserver((entradas) => {
            for (const entrada of entradas) {
                if (!entrada.isIntersecting) continue
                entrada.target.classList.add("revelado")
                revelar.unobserve(entrada.target)
            }
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })

        // Elementos que já estão na tela ao carregar aparecem sem esperar
        document.querySelectorAll<HTMLElement>("[data-revelar]").forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add("revelado")
            else revelar.observe(el)
        })

        const contar = new IntersectionObserver((entradas) => {
            for (const entrada of entradas) {
                if (!entrada.isIntersecting) continue
                const el = entrada.target as HTMLElement
                contar.unobserve(el)
                const alvo = Number(el.dataset.contar)
                if (!Number.isFinite(alvo) || alvo <= 0) continue
                const duracao = 1200
                const inicio = performance.now()
                const passo = (agora: number) => {
                    const t = Math.min(1, (agora - inicio) / duracao)
                    const suave = 1 - Math.pow(1 - t, 3)
                    el.textContent = String(Math.round(alvo * suave))
                    if (t < 1) requestAnimationFrame(passo)
                }
                el.textContent = "0"
                requestAnimationFrame(passo)
            }
        }, { threshold: 0.6 })
        document.querySelectorAll<HTMLElement>("[data-contar]").forEach((el) => contar.observe(el))

        return () => {
            revelar.disconnect()
            contar.disconnect()
            raiz.classList.remove("anima")
        }
    }, [])

    return null
}
