import { Building2, BusFront, Check, UserRound } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PROFILES = [
  {
    icon: UserRound,
    who: 'Passageiro',
    headline: 'Sabe se vai sentar antes de procurar lugar.',
    points: [
      'Lotação visível logo após a catraca',
      'Não depende de celular nem de internet',
      'Informação clara para quem precisa de assento',
    ],
  },
  {
    icon: BusFront,
    who: 'Empresa de ônibus',
    headline: 'Instalação simples na frota que já está em operação.',
    points: [
      'Sensores de baixo custo nas portas e na catraca',
      'Sem obras e sem troca de veículos',
      'Passageiros mais bem distribuídos no salão',
    ],
  },
  {
    icon: Building2,
    who: 'Prefeitura',
    headline: 'Mais conforto e dignidade no transporte da cidade.',
    points: [
      'Tecnologia viável para a frota inteira',
      'Transparência sobre a lotação dos veículos',
      'Benefício direto para quem usa o ônibus todos os dias',
    ],
  },
]

export default function Audiences() {
  return (
    <section id="para-quem" className="relative isolate overflow-hidden pt-16 pb-32 sm:pt-20 sm:pb-44 lg:pt-24 lg:pb-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-accent-400/10 px-3 py-1 text-xs font-bold tracking-[0.16em] text-accent-400 uppercase">
            Para quem é
          </p>
          <h2 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-[var(--page-fg)] sm:text-5xl">
            Feito para quem usa, opera e <span className="text-accent-400">administra o transporte.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PROFILES.map(({ icon: Icon, who, headline, points }, i) => (
            <Reveal key={who} variant="rise" delay={200 + i * 180} className="h-full">
              <article className="flex h-full flex-col rounded-[1.75rem] bg-[var(--page-card)] p-7 ring-1 ring-[var(--page-line)] transition duration-[600ms] ease-out hover:-translate-y-px hover:ring-accent-400/40 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-400 text-navy-950">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-6 text-sm font-bold tracking-[0.12em] text-accent-400 uppercase">{who}</p>
                <h3 className="mt-2 text-2xl leading-snug font-bold text-[var(--page-fg)]">{headline}</h3>
                <ul className="mt-6 space-y-3 border-t border-[var(--page-line)] pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[var(--page-muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
