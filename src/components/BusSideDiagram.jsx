import { DoorOpen, Monitor, RefreshCw } from 'lucide-react'
import BusSide from './BusSide.jsx'

// Peças do SentaAí no ônibus visto de lado (frente à esquerda), numeradas da esquerda para a direita.
export const PARTS = [
  {
    x: 210,
    y: 128,
    icon: RefreshCw,
    title: 'Monitoramento da catraca',
    text: 'Um sensor de giro registra cada embarque no instante em que acontece, passageiro a passageiro.',
  },
  {
    x: 360,
    y: 74,
    icon: Monitor,
    title: 'Tela a bordo',
    text: 'Exibe a lotação calculada pelo algoritmo embarcado, com margem de segurança para nunca anunciar um assento que não existe.',
  },
  {
    x: 535,
    y: 50,
    icon: DoorOpen,
    title: 'Sensores nas portas',
    text: 'Detectam cada desembarque e o embarque de cadeirantes, mantendo a contagem correta do início ao fim da viagem.',
  },
]

// highlight: peça sob o mouse; selected: peça marcada por clique. As duas ficam em destaque
// (um pouco maiores, com halo discreto). onHover avisa o hover; onSelect avisa o clique.
export default function BusSideDiagram({ highlight = null, selected = null, onHover = () => {}, onSelect = () => {} }) {
  return (
    <svg
      viewBox="0 0 1000 300"
      className="w-full overflow-visible"
      role="img"
      aria-label="Ônibus visto de lado com a posição do sensor da catraca, da tela e dos sensores das portas"
    >
      <line x1="0" y1="284" x2="1000" y2="284" stroke="#334155" strokeWidth="4" strokeDasharray="40 26" />
      <ellipse cx="500" cy="282" rx="470" ry="9" fill="#000" opacity="0.4" />
      <BusSide flip tone="light" archFill="rgb(0 0 0 / 0.35)" />
      {PARTS.map((p, i) => {
        const active = highlight === i || selected === i
        return (
          <g
            key={p.title}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(i)}
            className="cursor-pointer"
          >
            {/* Halo discreto que aparece no hover */}
            <circle
              cx={p.x}
              cy={p.y}
              r="31"
              className="fill-accent-400 transition-opacity duration-500 ease-out"
              style={{ opacity: active ? 0.15 : 0 }}
            />
            <g
              className="origin-center transition-transform duration-500 ease-out [transform-box:fill-box]"
              style={{ transform: active ? 'scale(1.06)' : 'scale(1)' }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r="24"
                className={`transition-colors duration-500 ease-out ${active ? 'fill-accent-600' : 'fill-accent-400'}`}
                stroke="white"
                strokeWidth="4"
              />
              <text x={p.x} y={p.y + 7.5} textAnchor="middle" fontSize="22" fontWeight="800" className="pointer-events-none fill-navy-950">
                {i + 1}
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}
