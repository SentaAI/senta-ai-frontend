import { useEffect, useState } from 'react'
import BusSideDiagram, { PARTS } from './BusSideDiagram.jsx'
import Reveal from './Reveal.jsx'

export default function HowItWorks() {
  const [hover, setHover] = useState(null) // peça sob o mouse
  const [selected, setSelected] = useState(null) // peça marcada por clique (fica fixa)
  const toggle = (i) => setSelected((s) => (s === i ? null : i))

  // Passar o mouse em outra peça desfaz a marcação
  const enter = (i) => {
    setHover(i)
    setSelected((s) => (s !== null && s !== i ? null : s))
  }

  // Rolar a página para baixo (mais de 60px desde o clique) também desfaz a marcação
  useEffect(() => {
    if (selected === null) return
    const startY = window.scrollY
    const onScroll = () => {
      if (window.scrollY - startY > 60) setSelected(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [selected])

  return (
    <section
      id="como-funciona"
      className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-24"
    >
      {/* Brilho suave atrás do ônibus */}
      <div className="absolute top-1/2 right-[-10%] -z-10 h-[36rem] w-[50rem] -translate-y-1/2 rounded-full bg-navy-600/25 blur-[140px]" />

      <Reveal variant="fade" className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-[var(--page-fg)] sm:text-6xl">
            Como <span className="text-accent-400">funciona</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-[var(--page-muted)]">
            Sensores IoT nas portas e na catraca registram cada embarque e desembarque. Um algoritmo embarcado consolida a
            contagem, aplica a margem de erro e atualiza a tela em tempo real.
          </p>

          <ol className="mt-10 space-y-3" onMouseLeave={() => setHover(null)}>
            {PARTS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                onMouseEnter={() => enter(i)}
                onClick={() => toggle(i)}
                aria-current={selected === i ? 'true' : undefined}
                className={`flex cursor-pointer items-start gap-4 rounded-2xl bg-[var(--page-card)] p-5 ring-1 transition duration-[600ms] ease-out ${
                  hover === i || selected === i ? '-translate-y-px ring-accent-400/40' : 'ring-[var(--page-line)]'
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400 text-sm font-extrabold text-navy-950">
                  {i + 1}
                </span>
                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[var(--page-fg)]">
                    <Icon className="h-4 w-4 text-accent-400" />
                    {title}
                  </p>
                  <p className="mt-0.5 text-[var(--page-muted)]">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <BusSideDiagram
          highlight={hover}
          selected={selected}
          onHover={(i) => (i === null ? setHover(null) : enter(i))}
          onSelect={toggle}
        />
      </Reveal>
    </section>
  )
}
