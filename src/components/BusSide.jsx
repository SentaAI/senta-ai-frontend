// Ônibus urbano visto de lado (frente à direita), em coordenadas 1000 × 290.
// tone="light": carroceria clara, para fundos escuros. tone="dark": carroceria navy, para fundos claros.
const GLASS = '#dce8ff'
const WINDOWS = [
  [60, 110],
  [180, 110],
  [300, 110],
  [520, 90],
  [620, 90],
  [720, 90],
]
const HEADS = [95, 140, 215, 345, 560, 655, 760]

// flip: espelha o ônibus (frente à esquerda) mantendo os textos legíveis.
export default function BusSide({ tone = 'dark', archFill = 'white', wheelClassName = '', wheelStyle, flip = false }) {
  const light = tone === 'light'
  // Desfaz o espelhamento só no texto, em torno do próprio centro (cx)
  const unflip = (cx) => (flip ? `matrix(-1 0 0 1 ${2 * cx} 0)` : undefined)
  const body = light ? '#eef2f7' : '#00153d'
  const skirt = light ? '#00215e' : '#00153d'
  const frame = light ? '#00215e' : '#00153d'

  return (
    <g transform={flip ? 'translate(1000 0) scale(-1 1)' : undefined}>
      {/* Ar-condicionado no teto */}
      <rect x="320" y="22" width="250" height="20" rx="8" fill={light ? '#c7d0dd' : '#0f3585'} />

      {/* Carroceria e saia inferior */}
      <rect x="30" y="38" width="930" height="200" rx="30" fill={body} />
      <path d="M30 180 H960 V208 a30 30 0 0 1 -30 30 H60 a30 30 0 0 1 -30 -30 Z" fill={skirt} />

      {/* Janelas com passageiros */}
      {WINDOWS.map(([x, w]) => (
        <rect key={x} x={x} y="58" width={w} height="86" rx="8" fill={GLASS} stroke={frame} strokeWidth={light ? 3 : 0} />
      ))}
      {HEADS.map((x) => (
        <g key={x} fill="#0f3585" opacity="0.55">
          <circle cx={x} cy="104" r="11" />
          <path d={`M${x - 20} 144 q0 -24 20 -24 q20 0 20 24 z`} />
        </g>
      ))}

      {/* Faixa da pintura */}
      <rect x="30" y="166" width="930" height="12" className="fill-accent-400" />

      {/* Adesivo SentaAí a bordo */}
      <g>
        <rect x="265" y="190" width="150" height="26" rx="13" className="fill-navy-950" />
        <text x="340" y="208" transform={unflip(340)} textAnchor="middle" fontSize="14" fontWeight="900" fontStyle="italic" fill="white">
          Senta<tspan className="fill-accent-400">Aí</tspan>
          <tspan fontSize="10" fontWeight="600" fontStyle="normal" fill="#94a3b8">
            {' '}
            a bordo
          </tspan>
        </text>
      </g>

      {/* Porta traseira (saída) e porta dianteira (entrada) */}
      {[
        [430, 70],
        [830, 64],
      ].map(([x, w]) => (
        <g key={x}>
          <rect x={x} y="56" width={w} height="172" rx="6" fill={GLASS} stroke={frame} strokeWidth="3" />
          <line x1={x + w / 2} y1="56" x2={x + w / 2} y2="228" stroke={frame} strokeWidth="3" />
        </g>
      ))}

      {/* Para-brisa e letreiro */}
      <rect x="905" y="56" width="46" height="110" rx="12" fill={GLASS} stroke={frame} strokeWidth={light ? 3 : 0} />
      <rect x="905" y="56" width="46" height="18" rx="5" className="fill-navy-950" />
      <text x="928" y="69.5" transform={unflip(928)} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-accent-300">
        702
      </text>

      {/* Retrovisor, farol e lanterna */}
      <rect x="962" y="66" width="7" height="32" rx="3" fill="#0f3585" />
      <rect x="946" y="190" width="14" height="14" rx="3" fill="#fde68a" />
      <rect x="30" y="186" width="8" height="24" rx="3" fill="#ef4444" />

      {/* Rodas */}
      {[200, 740].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="238" r="45" fill={archFill} />
          <g className={`origin-center [transform-box:fill-box] ${wheelClassName}`} style={wheelStyle}>
            <circle cx={cx} cy="238" r="34" fill="#111827" />
            <circle cx={cx} cy="238" r="17" fill="#94a3b8" />
            {[0, 60, 120].map((a) => (
              <rect
                key={a}
                x={cx - 15}
                y="236"
                width="30"
                height="4"
                rx="2"
                fill="#475569"
                transform={`rotate(${a} ${cx} 238)`}
              />
            ))}
            <circle cx={cx} cy="238" r="5" fill="#1f2937" />
          </g>
        </g>
      ))}
    </g>
  )
}
