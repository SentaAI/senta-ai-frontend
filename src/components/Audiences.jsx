import { Building2, BusFront, Check, UserRound } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PROFILES = [
  {
    icon: UserRound,
    who: 'Passageiro',
    headline: 'Informação confiável no momento do embarque.',
    points: [
      'Lotação exibida logo após a catraca',
      'Sem aplicativo, cadastro ou conexão com a internet',
      'Previsibilidade para quem precisa viajar sentado',
    ],
  },
  {
    icon: BusFront,
    who: 'Empresa de ônibus',
    headline: 'Baixo custo de implantação na frota que já está em operação.',
    points: [
      'Sensores IoT de baixo custo nas portas e na catraca',
      'Sem obras e sem troca de veículos',
      'Contagem precisa, com margem de erro controlada',
    ],
  },
  {
    icon: Building2,
    who: 'Prefeitura',
    headline: 'Dados confiáveis para um transporte mais eficiente e humano.',
    points: [
      'Tecnologia viável para toda a frota municipal',
      'Lotação medida por sensores, não por estimativas',
      'Mais conforto e dignidade para o cidadão',
    ],
  },
]

export default function Audiences() {
  return (
    <section id="para-quem" className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-44 lg:pt-24 lg:pb-52">
      <div data-anchor-content className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-accent-400/10 px-3 py-1 text-xs font-bold tracking-[0.16em] text-accent-400 uppercase">
            Para quem é
          </p>
          <h2 className="mt-5 text-[2rem] leading-[1.08] font-extrabold tracking-tight text-balance text-[var(--page-fg)] sm:mt-6 sm:text-5xl">
            Valor para quem usa, opera e <span className="text-accent-400">administra o transporte.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
          {PROFILES.map(({ icon: Icon, who, headline, points }, i) => (
            <Reveal key={who} variant="rise" delay={200 + i * 180} className="h-full">
              <article className="flex h-full flex-col rounded-[1.75rem] bg-[var(--page-card)] p-6 ring-1 ring-[var(--page-line)] transition duration-[600ms] ease-out hover:-translate-y-px hover:ring-accent-400/40 sm:p-8">
                {/* No celular, ícone e público ficam na mesma linha para o cartão ficar mais baixo */}
                <div className="flex items-center gap-3 sm:block">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-400 text-navy-950 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold tracking-[0.12em] text-accent-400 uppercase sm:mt-6">{who}</p>
                </div>
                <h3 className="mt-4 text-xl leading-snug font-bold text-[var(--page-fg)] sm:mt-2 sm:text-2xl">{headline}</h3>
                <ul className="mt-5 space-y-2.5 border-t border-[var(--page-line)] pt-5 sm:mt-6 sm:space-y-3 sm:pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-[var(--page-muted)] sm:text-base">
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
