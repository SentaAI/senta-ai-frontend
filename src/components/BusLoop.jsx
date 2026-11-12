import BusSide from './BusSide.jsx'

// Ônibus parado na tela, com sensação de movimento: rodas girando, faixas da rua e postes
// ao fundo correndo para trás (em velocidades diferentes) e linhas de vento. Puramente decorativo.
const WIND = [
  { top: '28%', width: 'w-20', delay: '0s' },
  { top: '46%', width: 'w-14', delay: '0.35s' },
  { top: '62%', width: 'w-24', delay: '0.7s' },
]

export default function BusLoop({ className = '' }) {
  return (
    <div className={`relative h-36 overflow-hidden sm:h-44 ${className}`} aria-hidden="true">
      {/* Postes ao fundo, passando mais devagar que a rua */}
      <span className="absolute inset-x-0 bottom-6 h-24 animate-poles bg-[repeating-linear-gradient(90deg,rgb(0_26_77/0.07)_0_4px,transparent_4px_220px)] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] sm:h-32" />

      {/* Rua: linha de base e faixas tracejadas correndo para trás */}
      <span className="absolute inset-x-0 bottom-6 h-px bg-navy-900/10" />
      <span className="absolute inset-x-0 bottom-[0.9rem] h-1 animate-road bg-[repeating-linear-gradient(90deg,rgb(0_26_77/0.18)_0_56px,transparent_56px_96px)] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" />

      {/* Linhas de vento atrás do ônibus */}
      <div className="absolute inset-y-0 left-1/2 w-0">
        {WIND.map((w) => (
          <span
            key={w.top}
            className={`absolute right-[150px] h-0.5 animate-speed rounded-full bg-navy-900/25 sm:right-[200px] ${w.width}`}
            style={{ top: w.top, animationDelay: w.delay }}
          />
        ))}
      </div>

      {/* Ônibus */}
      <div className="absolute bottom-[1.3rem] left-1/2 w-[280px] -translate-x-1/2 sm:w-[380px]">
        <svg viewBox="0 0 1000 290" className="block h-auto w-full overflow-visible">
          <ellipse cx="500" cy="286" rx="460" ry="8" className="fill-navy-900" opacity="0.12" />
          <BusSide tone="dark" archFill="#ffffff" wheelClassName="animate-spin [animation-duration:0.6s]" />
        </svg>
      </div>
    </div>
  )
}
