import { ArrowRight, Check, PlugZap } from 'lucide-react'
import { CtaButton } from './Header.jsx'
import Reveal from './Reveal.jsx'
import Wave from './Wave.jsx'
import { NightSky, Skyline } from './NightSky.jsx'

const FACTS = ['Sem troca da frota atual', 'Instalação rápida', 'Baixo custo de implantação']

export default function FinalCTA() {
  return (
    // A onda fica fora da <section> (que corta o que transborda) e sobe sobre o branco da
    // seção anterior, igual à passagem de "Para quem é" para "Transporte público".
    <div className="relative">
      <Wave fill="#00163f" />
      <section
        id="adotar"
        className="relative isolate overflow-hidden bg-navy-950 pt-16 pb-56 sm:pt-24 sm:pb-64"
      >
        {/* Cenário preservado: céu noturno e silhueta da cidade */}
        <NightSky fadeTop />
        <Skyline className="bottom-0" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="rise">
            {/* Cartão de vidro dividido: proposta à esquerda, ação à direita */}
            <div className="relative grid overflow-hidden rounded-[2rem] bg-navy-950/45 shadow-[0_40px_120px_-30px_rgb(0_0_0/0.8)] ring-1 ring-white/10 backdrop-blur-xl transition duration-700 ease-out hover:shadow-[0_40px_120px_-30px_rgb(0_0_0/0.8),0_0_60px_-20px_rgb(249_130_7/0.35)] hover:ring-accent-400/25 lg:grid-cols-[1.45fr_1fr]">
              {/* Filete laranja na borda esquerda */}
              <div
                className="pointer-events-none absolute inset-y-10 left-0 w-px bg-gradient-to-b from-transparent via-accent-400/70 to-transparent"
                aria-hidden="true"
              />

              {/* Proposta */}
              <div className="p-6 sm:p-12 lg:p-14">
                <Reveal delay={120}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.1em] whitespace-nowrap text-accent-300 uppercase ring-1 ring-accent-400/30 sm:text-xs sm:tracking-[0.16em]">
                    <PlugZap className="h-3.5 w-3.5" />
                    Implementação Plug-and-Play
                  </span>
                </Reveal>
                <Reveal delay={200}>
                  <h2 className="mt-6 text-[2rem] leading-[1.05] sm:mt-7 font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem]">
                    Pronto para modernizar o transporte <span className="text-accent-400">da sua cidade?</span>
                  </h2>
                </Reveal>
                <Reveal delay={280}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg text-pretty text-slate-300">
                    Nossa tecnologia IoT não exige a troca da frota atual. Instalação rápida e de baixo custo nos ônibus que
                    já circulam, gerando dados valiosos desde o primeiro dia.
                  </p>
                </Reveal>
              </div>

              {/* Ação */}
              <div className="flex flex-col justify-center gap-6 border-t border-white/10 bg-white/[0.03] p-6 sm:gap-8 sm:p-12 lg:border-t-0 lg:border-l lg:p-12">
                <Reveal delay={320} className="flex items-center gap-4">
                  <img
                    src="/favicon.png"
                    alt=""
                    className="h-14 w-14 rounded-2xl shadow-[0_16px_40px_-12px_rgb(0_0_0/0.7)] ring-1 ring-white/15"
                  />
                  <p className="text-sm leading-snug text-slate-400">
                    Demonstração com a equipe <strong className="block text-base font-bold text-white">SentaAí</strong>
                  </p>
                </Reveal>

                <Reveal delay={380}>
                  <ul className="space-y-3">
                    {FACTS.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-300">
                        <Check className="h-4 w-4 shrink-0 text-accent-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={440} className="flex flex-col gap-3">
                  <CtaButton size="lg" href="#contato" className="w-full">
                    Agendar Demonstração
                  </CtaButton>
                  <a
                    href="#contato"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-base font-bold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy-900"
                  >
                    Falar com Especialista
                    <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                  </a>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
