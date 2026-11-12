import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Marca quando o elemento entra na tela (uma vez, por padrão).
export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}

// Progresso (0 a 1) de um elemento passando pela tela, ou da página inteira quando ref é nulo.
export function useScrollProgress(ref, { anchor = 0.55 } = {}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const measure = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        let p
        if (ref) {
          const el = ref.current
          if (!el) return
          const r = el.getBoundingClientRect()
          p = (window.innerHeight * anchor - r.top) / r.height
        } else {
          const max = document.documentElement.scrollHeight - window.innerHeight
          p = max > 0 ? window.scrollY / max : 0
        }
        setProgress(Math.min(1, Math.max(0, p)))
      })
    }
    measure()
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [ref, anchor])

  return progress
}
