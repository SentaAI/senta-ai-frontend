import { ArrowRight } from 'lucide-react'
import { CtaButton } from './Header.jsx'
import Reveal from './Reveal.jsx'
import { NightSky, Skyline } from './NightSky.jsx'

export default function FinalCTA() {
  return (
    <section
      id="adotar"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-32 pb-64"
    >
      <NightSky />
      <Skyline className="bottom-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <img
            src="/favicon.png"
            alt=""
            className="mx-auto h-24 w-24 rounded-[1.6rem] shadow-[0_24px_60px_-12px_rgb(0_0_0/0.6)] ring-1 ring-white/15 sm:h-28 sm:w-28"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-10 text-5xl leading-[1.02] font-extrabold tracking-tight text-balance text-white sm:text-7xl">
            Transforme a experiência a bordo da <span className="text-accent-400">sua frota.</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-slate-300 sm:text-xl">
            Tecnologia IoT de baixo custo, instalada nos veículos que já circulam. Agende uma demonstração com a nossa
            equipe.
          </p>
        </Reveal>
        <Reveal delay={360} className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton size="lg" href="#contato" />
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-base font-bold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy-900"
          >
            Falar com a equipe
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
