import { SEATS, estimate } from '../data/onboard.js'

// Planta ilustrativa do ônibus vista de cima (frente à direita).
// Os bancos não são lidos um a um: a contagem "enche" os bancos da frente para o fundo.
// Os bancos da margem de erro contam como ocupados, para o desenho bater com o aviso da tela.
const ROWS = SEATS / 4 // 4 bancos por fileira (2 de cada lado do corredor)

const SIZES = {
  md: { seat: 'h-4 w-4 rounded-[4px] sm:h-[22px] sm:w-[22px] sm:rounded-[5px]', aisle: 'h-3 sm:h-4', gap: 'gap-1 sm:gap-1.5' },
  sm: { seat: 'h-4 w-4 rounded-[4px] sm:h-[18px] sm:w-[18px]', aisle: 'h-3', gap: 'gap-1' },
}

const LOOK = {
  taken: ['border-red-400 bg-red-500 shadow-[0_0_8px_rgb(239_68_68/0.45)]', 'bg-red-800/50'],
  free: ['border-emerald-300 bg-white', 'bg-emerald-400'],
}

function Seat({ kind, delay, cls }) {
  const [body, back] = LOOK[kind]
  return (
    <span
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative block shrink-0 border transition-colors duration-300 ${cls} ${body}`}
    >
      {/* Encosto (o ônibus anda para a direita) */}
      <span
        style={{ transitionDelay: `${delay}ms` }}
        className={`absolute inset-y-[3px] left-[2px] w-[3px] rounded-full transition-colors duration-300 ${back}`}
      />
    </span>
  )
}

export function SeatLegend({ className = '' }) {
  const items = [
    ['border-emerald-300 bg-white', 'Livre'],
    ['border-red-400 bg-red-500', 'Ocupado'],
  ]
  return (
    <div className={`flex items-center justify-center gap-4 text-[11px] font-medium text-white/55 ${className}`}>
      {items.map(([cls, label]) => (
        <span key={label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-[3px] border ${cls}`} />
          {label}
        </span>
      ))}
    </div>
  )
}

export default function SeatMap({ onboard, size = 'md' }) {
  const s = SIZES[size] ?? SIZES.md
  const { seated, maybe } = estimate(onboard)
  const taken = seated + maybe // contagem + margem de erro
  // Fileira 0 = frente. Ocupa a fileira inteira antes de passar para a próxima.
  const seat = (row, pos) => {
    const order = row * 4 + pos
    const kind = order < taken ? 'taken' : 'free'
    return <Seat key={pos} kind={kind} delay={order * 22} cls={s.seat} />
  }
  const column = (row) => (
    <div key={row} className="flex flex-col">
      <div className="flex flex-col gap-1">
        {seat(row, 0)}
        {seat(row, 1)}
      </div>
      <div className={s.aisle} />
      <div className="flex flex-col gap-1">
        {seat(row, 2)}
        {seat(row, 3)}
      </div>
    </div>
  )

  return (
    <div
      className="relative inline-flex"
      role="img"
      aria-label={`${taken} de ${SEATS} bancos ocupados, contando a margem de erro`}
    >
      {/* Rodas e retrovisores, para lembrar a carroceria */}
      {['top', 'bottom'].map((side) =>
        ['left-[10%]', 'right-[16%]'].map((x) => (
          <span
            key={side + x}
            className={`absolute ${side === 'top' ? '-top-[6px]' : '-bottom-[6px]'} ${x} h-2 w-7 rounded-[3px] bg-slate-950 ring-1 ring-white/20 sm:w-9`}
          />
        )),
      )}
      <span className="absolute -top-[9px] right-[18px] h-2.5 w-1.5 rounded-sm bg-slate-400" />
      <span className="absolute -bottom-[9px] right-[18px] h-2.5 w-1.5 rounded-sm bg-slate-400" />

      <div className="relative z-10 inline-flex items-center rounded-l-[0.9rem] rounded-r-[2rem] border-2 border-slate-400/60 bg-navy-800 py-2.5 pr-11 pl-3 sm:py-3 sm:pr-14 sm:pl-3.5">
        {/* Lanternas, faróis e para-brisa */}
        <span className="absolute top-2 -left-[2px] h-3 w-[3px] rounded-r bg-red-500" />
        <span className="absolute bottom-2 -left-[2px] h-3 w-[3px] rounded-r bg-red-500" />
        <span className="absolute top-3 -right-[2px] h-3 w-[3px] rounded-l bg-amber-200" />
        <span className="absolute bottom-3 -right-[2px] h-3 w-[3px] rounded-l bg-amber-200" />
        <span className="absolute inset-y-2.5 right-1 w-2 rounded-l-sm rounded-r-[1.4rem] border border-accent-300/50 bg-accent-300/25 sm:w-3" />
        {/* Motorista */}
        <span className="absolute top-3 right-5 h-5 w-5 rounded-full border-2 border-slate-400 sm:right-6 sm:h-6 sm:w-6" />

        <div className={`flex ${s.gap}`}>
          {Array.from({ length: ROWS }, (_, i) => ROWS - 1 - i).map(column)}
        </div>
      </div>
    </div>
  )
}
