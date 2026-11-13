import { ArrowRight } from 'lucide-react'
import BusScreen, { useStopCycle } from './BusScreen.jsx'
import DrivingBus from './DrivingBus.jsx'
import Reveal from './Reveal.jsx'
import { CtaButton } from './Header.jsx'
import { NightSky, Skyline } from './NightSky.jsx'

// Linha da calçada (onde ficam prédios, postes e o ponto), medida a partir da base do hero
const CURB = 'bottom-[7.25rem]'

function Streetlight({ left }) {
  return (
    <div className={`absolute ${CURB} flex flex-col items-end`} style={{ left }} aria-hidden="true">
      <span className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-amber-100/20 blur-2xl" />
      <span className="mr-[-2px] h-2 w-7 rounded-full bg-amber-100 shadow-[0_0_22px_rgb(254_243_199/0.9)]" />
      <span className="h-1.5 w-8 border-t-[5px] border-r-[5px] border-slate-500" />
      <span className="h-36 w-1.5 self-start bg-slate-500" />
    </div>
  )
}

function BusStop() {
  return (
    <div
      className={`absolute ${CURB} left-[calc(30%+var(--bus-w)+22px)] flex items-end gap-3`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <span className="rounded-lg border-2 border-accent-400 bg-navy-950 px-2 py-1 text-xs leading-tight font-extrabold text-accent-400 shadow-[0_0_18px_rgb(249_130_7/0.5)]">
          PONTO
        </span>
        <span className="h-20 w-1.5 bg-slate-500" />
      </div>
      <div className="flex items-end gap-1.5">
        <span className="flex flex-col items-center">
          <span className="h-5 w-5 rounded-full bg-navy-500" />
          <span className="h-12 w-6 rounded-t-xl bg-navy-500" />
        </span>
        <span className="flex flex-col items-center">
          <span className="h-4 w-4 rounded-full bg-navy-600" />
          <span className="h-11 w-5 rounded-t-xl bg-navy-600" />
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { state } = useStopCycle()

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-950 pt-18"
    >
      <NightSky horizon={116} />

      {/* Conteúdo centralizado no espaço entre o cabeçalho e a rua */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 content-center items-center gap-10 px-4 pt-16 pb-72 sm:gap-14 sm:px-6 sm:pt-16 lg:px-8 xl:grid-cols-2 xl:gap-12 xl:pt-8 xl:pb-48">
        <div className="max-w-xl">
          <Reveal>
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-5xl xl:text-[3.25rem]">
              Cansou de contar com a sorte para conseguir um assento no{' '}
              <span className="text-accent-400">ônibus?</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 text-base leading-relaxed text-pretty text-slate-200 sm:mt-6 sm:text-lg">
              O SentaAí é um sistema IoT que exibe, em uma tela instalada no interior do veículo, o número de passageiros
              a bordo e a disponibilidade de assentos em tempo real.
            </p>
          </Reveal>

          {/* Botões só a partir do tablet; no celular o texto leva direto à tela */}
          <Reveal delay={360} className="mt-9 hidden gap-3 sm:flex sm:flex-row">
            <CtaButton size="lg" />
            <a
              href="#como-funciona"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-base font-bold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy-900"
            >
              Como funciona
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* A tela que fica dentro do ônibus */}
        <Reveal variant="right" delay={200} className="min-w-0">
          <div id="tela" className="mx-auto w-full max-w-[30.5rem] transition duration-500 hover:-translate-y-1.5">
            <BusScreen state={state} />
          </div>
        </Reveal>
      </div>

      {/* Rua: prédios, calçada, ponto e o ônibus andando */}
      <div className="absolute inset-x-0 bottom-0 h-80 [--bus-w:250px] sm:[--bus-w:400px] lg:[--bus-w:480px]">
        <Skyline className={CURB} />
        <Streetlight left="6%" />
        <Streetlight left="88%" />
        <BusStop />
        {/* Calçada, meio-fio e rua */}
        <div className="absolute inset-x-0 bottom-[6.25rem] h-4 bg-navy-700" />
        <div className="absolute inset-x-0 bottom-24 h-1 bg-slate-500/50" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#0a2152]">
          <span className="absolute inset-x-0 top-1/2 h-1.5 bg-[repeating-linear-gradient(90deg,rgb(148_163_184/0.35)_0_56px,transparent_56px_96px)]" />
        </div>
        {/* A base da rua se dissolve na cor da seção seguinte */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#00163f]" />
        <DrivingBus mode="route" road="#0a2152" className="bottom-7" />
      </div>
    </section>
  )
}
