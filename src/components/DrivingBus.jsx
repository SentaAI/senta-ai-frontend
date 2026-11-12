import { useId } from 'react'
import BusSide from './BusSide.jsx'

// Ônibus andando sobre uma faixa de rua. A largura vem da variável CSS --bus-w do contêiner.
// mode="route": entra, para no ponto (30% da largura) e segue. mode="pass": atravessa direto.
export default function DrivingBus({ mode = 'route', running = true, road = '#00163f', className = '' }) {
  const beam = useId()
  const isRoute = mode === 'route'
  const playState = { animationPlayState: running ? 'running' : 'paused' }

  return (
    <div
      className={`bus-driving absolute w-[var(--bus-w)] ${isRoute ? 'animate-bus-route' : 'animate-bus-pass'} ${className}`}
      style={playState}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1000 290" className="block h-auto w-full overflow-visible">
        <defs>
          <linearGradient id={beam} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fef3c7" stopOpacity="0.45" />
            <stop offset="1" stopColor="#fef3c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="958,190 1260,150 1260,282" fill={`url(#${beam})`} />
        <ellipse cx="500" cy="284" rx="480" ry="10" fill="#000" opacity="0.35" />
        <BusSide
          tone="light"
          archFill={road}
          wheelClassName={isRoute ? 'animate-wheel-route' : 'animate-spin [animation-duration:0.7s]'}
          wheelStyle={playState}
        />
      </svg>
    </div>
  )
}
