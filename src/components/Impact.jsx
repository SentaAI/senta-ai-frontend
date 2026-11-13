import { Cpu, WifiOff, Zap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Wave from './Wave.jsx'
import BusLoop from './BusLoop.jsx'

// Por que funciona de forma definitiva: tudo é processado no próprio ônibus (edge computing)
const EDGE = [
  { icon: Cpu, title: 'Processamento a bordo', text: 'O algoritmo roda no próprio veículo, por edge computing.' },
  { icon: WifiOff, title: 'Funciona offline', text: 'A tela continua precisa mesmo sem conexão com a internet.' },
  { icon: Zap, title: 'Tempo real', text: 'A contagem é atualizada a cada embarque e desembarque.' },
]

export default function Impact() {
  return (
    // Seção branca; a borda de cima é uma onda que sobe sobre o azul da seção anterior.
    <section id="impacto" className="relative isolate bg-white pt-24 pb-32 sm:pt-32 sm:pb-44 lg:pt-40 lg:pb-52">
      <Wave />
      <div data-anchor-content className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-navy-900 sm:text-5xl lg:text-6xl">
              Transporte público não pode ser <span className="text-accent-500">um jogo de sorte.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="border-l-4 border-accent-400 pl-5 text-lg leading-relaxed sm:text-xl text-pretty text-slate-600">
              Todos os dias, quem depende do ônibus embarca sem saber se vai encontrar um assento. O SentaAí resolve isso
              dentro do próprio veículo:{' '}
              <strong className="font-bold text-navy-900">informação certa, no momento do embarque.</strong>
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={150}>
          <BusLoop className="mt-10" />
        </Reveal>

        {/* Diferenciais técnicos em uma linha discreta */}
        <Reveal variant="fade" delay={200}>
          <ul className="mt-8 grid gap-6 border-t border-navy-900/10 pt-8 sm:grid-cols-3">
            {EDGE.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="block text-base font-bold text-navy-900">{title}</strong>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
