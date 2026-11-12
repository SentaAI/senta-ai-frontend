import { useInView } from '../hooks/useInView.js'

const HIDDEN = {
  up: 'translate-y-12 opacity-0',
  rise: 'translate-y-20 opacity-0',
  down: '-translate-y-12 opacity-0',
  left: '-translate-x-16 opacity-0',
  right: 'translate-x-16 opacity-0',
  scale: 'scale-90 opacity-0',
  fade: 'opacity-0',
}

// Anima o conteúdo quando ele entra na tela. Efeitos de hover devem ficar num elemento interno,
// porque o atraso (delay) daqui vale para todas as transições deste elemento.
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        inView ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : HIDDEN[variant]
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
