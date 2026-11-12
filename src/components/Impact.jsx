import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import Wave from './Wave.jsx'
import BusLoop from './BusLoop.jsx'

const WHITE = [255, 255, 255]
const NIGHT = [0, 22, 63] // #00163f, o mesmo tom do topo do céu do CTA
const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (t) => Math.min(1, Math.max(0, t))

export default function Impact() {
  const section = useRef(null)
  const content = useRef(null)
  const grain = useRef(null)

  // Quando o conteúdo começa a sair pelo topo, a seção inteira escurece com a rolagem
  // (branco → azul-noite em ~meia tela) e o conteúdo esmaece. O CTA só entra já no azul-noite.
  useEffect(() => {
    const update = () => {
      if (!section.current || !content.current) return
      const vh = window.innerHeight
      const bottom = content.current.getBoundingClientRect().bottom
      const t = smooth(clamp01((vh * 0.4 - bottom) / (vh * 0.45)))
      const c = WHITE.map((v, i) => Math.round(v + (NIGHT[i] - v) * t))
      section.current.style.backgroundColor = `rgb(${c.join(' ')})`
      content.current.style.opacity = String(1 - clamp01(t * 1.6))
      // Mesma granulação do céu do CTA, crescendo junto com o escurecimento
      if (grain.current) grain.current.style.opacity = String(0.05 * t)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    // Seção branca; a borda de cima é uma onda que sobe sobre o azul da seção anterior.
    <section id="impacto" ref={section} className="relative isolate bg-white pt-24 sm:pt-32 lg:pt-40">
      <div ref={grain} className="bg-noise pointer-events-none absolute inset-0 -z-10 opacity-0" aria-hidden="true" />
      <Wave />
      <div ref={content} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-navy-900 sm:text-5xl lg:text-6xl">
              Transporte público não pode ser <span className="text-accent-500">um jogo de sorte.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="border-l-4 border-accent-400 pl-5 text-xl leading-relaxed text-pretty text-slate-600">
              Todos os dias, quem depende do ônibus embarca sem saber se vai viajar sentado.{' '}
              <strong className="font-bold text-navy-900">O SentaAí acaba com essa incerteza.</strong>
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={150}>
          <BusLoop className="mt-10" />
        </Reveal>
      </div>

      {/* Espaço em que o fundo escurece; termina quando o CTA entra, já no azul-noite */}
      <div className="h-[90vh]" aria-hidden="true" />
    </section>
  )
}
