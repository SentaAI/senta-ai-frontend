import { useRef } from 'react'
import { useScrollProgress } from '../hooks/useInView.js'

// Borda em onda que sobe sobre a seção anterior. Duas camadas (uma translúcida atrás)
// e um leve deslocamento da onda conforme a rolagem.
const W = 1440
const H = 160
const STEPS = 48

function wavePath(phase, amp, base, freq) {
  let d = `M0 ${H} L0 ${base}`
  for (let i = 0; i <= STEPS; i++) {
    const x = (i / STEPS) * W
    const y = base + amp * Math.sin((x / W) * Math.PI * 2 * freq + phase)
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return `${d} L${W} ${H} Z`
}

export default function Wave({ fill = '#ffffff', className = '' }) {
  const ref = useRef(null)
  // 0 quando a onda aparece embaixo da tela, 1 quando chega ao topo
  const p = useScrollProgress(ref, { anchor: 1 })

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-x-0 bottom-full ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-24 w-full sm:h-32 lg:h-40">
        {/* fill via style para aceitar variáveis CSS (ex.: cor que muda com a rolagem) */}
        <path d={wavePath(1.2 + p * 1.6, 26, 70, 1.1)} style={{ fill }} opacity="0.35" />
        <path d={wavePath(0.2 + p * 1.1, 30, 92, 0.85)} style={{ fill }} />
      </svg>
    </div>
  )
}
