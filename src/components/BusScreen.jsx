import { useEffect, useState } from 'react'
import { Armchair, PersonStanding, Ban } from 'lucide-react'
import SeatMap, { SeatLegend } from './SeatMap.jsx'
import { CAPACITY, SEATS, STATES, STOPS, detail, estimate } from '../data/onboard.js'

const STATE_ICON = { sit: Armchair, stand: PersonStanding, full: Ban }

// Percorre as paradas da simulação.
export function useStopCycle(ms = 4500) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STOPS.length), ms)
    return () => clearInterval(id)
  }, [ms])

  return { index, state: STOPS[index] }
}

// Etiqueta curta: bancos livres, pessoas em pé ou lotado
export function SeatChip({ onboard }) {
  const e = estimate(onboard)
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap transition-colors duration-500 ${STATES[e.state].chip}`}>
      {detail(e)}
    </span>
  )
}

// Medidor: parte dos sentados (até 32) e parte de quem vai em pé (até 80)
function Gauge({ onboard }) {
  const e = estimate(onboard)
  const seatsAt = (SEATS / CAPACITY) * 100
  return (
    <div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-white/10">
        <div className="absolute inset-y-0 left-0 bg-white/5" style={{ width: `${seatsAt}%` }} />
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${STATES[e.state].bar}`}
          style={{ width: `${Math.min(100, (onboard / CAPACITY) * 100)}%` }}
        />
        <span className="absolute inset-y-0 w-0.5 bg-navy-950" style={{ left: `${seatsAt}%` }} />
      </div>
      <div className="relative mt-2 flex text-[11px] font-medium text-white/50">
        <span style={{ width: `${seatsAt}%` }}>Sentados · {SEATS}</span>
        <span className="flex-1 text-right">Em pé · {CAPACITY - SEATS}</span>
      </div>
    </div>
  )
}

// Tela a bordo: o estado em destaque, quantas pessoas estão no ônibus e a ocupação dos bancos.
export default function BusScreen({ state: s }) {
  const e = estimate(s.onboard)
  const st = STATES[e.state]
  const Icon = STATE_ICON[e.state]

  return (
    <div className="w-full rounded-[1.6rem] border border-white/15 bg-gradient-to-b from-navy-600 to-navy-800 p-2 shadow-[0_30px_80px_-20px_rgb(0_11_34/0.85)] sm:p-2.5">
      <div className="overflow-hidden rounded-[1.15rem] bg-navy-950 ring-1 ring-white/5">
        {/* Estado em destaque */}
        <div className={`flex items-center gap-3 px-4 py-3 transition-colors duration-500 sm:px-6 sm:py-4 ${st.bg} ${st.fg}`} aria-live="polite">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/10 sm:h-10 sm:w-10">
            <Icon className="h-5 w-5" />
          </span>
          <p className="text-base leading-tight font-extrabold sm:text-xl">{st.label}</p>
          <span className="ml-auto hidden items-center gap-1.5 text-[11px] font-bold tracking-wider whitespace-nowrap uppercase opacity-80 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            Ao vivo
          </span>
        </div>

        <div className="px-4 pt-5 pb-5 sm:px-8 sm:pt-7 sm:pb-7">
          {/* Número de pessoas */}
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
            <div className="flex items-end gap-3 text-white">
              <span
                key={s.onboard}
                className="inline-block origin-left animate-pop text-5xl leading-none font-black tabular-nums sm:text-7xl"
              >
                {s.onboard}
              </span>
              <span className="pb-1 leading-tight">
                <span className="block text-sm font-semibold whitespace-nowrap text-white/70">pessoas a bordo</span>
                <span className="block text-xs whitespace-nowrap text-white/45">margem de erro ±{e.margin}</span>
              </span>
            </div>
            <SeatChip onboard={s.onboard} />
          </div>

          {/* Bancos */}
          <div className="mt-6 flex justify-center sm:mt-8">
            <SeatMap onboard={s.onboard} />
          </div>
          <SeatLegend className="mt-4 sm:mt-5" />

          {/* Medidor de lotação */}
          <div className="mt-5 border-t border-white/8 pt-4 sm:mt-6 sm:pt-5">
            <Gauge onboard={s.onboard} />
          </div>
        </div>
      </div>
    </div>
  )
}
