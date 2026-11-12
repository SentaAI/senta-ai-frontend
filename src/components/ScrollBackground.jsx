import { useEffect, useRef } from 'react'

// Fundo fixo da página: vai do azul-escuro ("Como funciona") ao azul da logo enquanto
// "A bordo" sobe na tela. A passagem para o branco é a onda no topo do "Impacto".
// As cores de texto (variáveis --page-*) acompanham o fundo.
const DARK = [0, 22, 63] // #00163f
const BLUE = [0, 33, 94] // #00215e (azul da logo)

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (t) => Math.min(1, Math.max(0, t))
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t))
const rgb = (c) => `rgb(${c.join(' ')})`

// Texto: branco sobre fundo escuro, azul-marinho sobre fundo claro (transição suave no meio)
const FG = { light: [255, 255, 255], dark: [0, 26, 77] }
const MUTED = { light: [203, 213, 225], dark: [71, 85, 105] }

export default function ScrollBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const root = document.documentElement

    // Cálculo leve: roda direto na rolagem, para fundo e texto mudarem juntos
    const update = () => {
      const vh = window.innerHeight
      const journey = document.getElementById('para-quem')?.getBoundingClientRect()

      // Escuro → azul: de quando "Para quem é" aparece embaixo até chegar ao topo da tela
      const a = journey ? smooth(clamp01((vh - journey.top) / vh)) : 0
      const color = mix(DARK, BLUE, a)

      // Quão claro está o fundo (0 = escuro, 1 = claro)
      const lum = (0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2]) / 255
      const t = smooth(clamp01((lum - 0.35) / 0.3))

      if (ref.current) ref.current.style.backgroundColor = rgb(color)
      root.style.setProperty('--page-fg', rgb(mix(FG.light, FG.dark, t)))
      root.style.setProperty('--page-muted', rgb(mix(MUTED.light, MUTED.dark, t)))
      root.style.setProperty('--page-line', t > 0.5 ? 'rgb(0 26 77 / 0.12)' : 'rgb(255 255 255 / 0.12)')
      root.style.setProperty('--page-card', t > 0.5 ? 'rgb(0 33 94 / 0.05)' : 'rgb(255 255 255 / 0.07)')
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 bg-navy-950" aria-hidden="true" />
}
