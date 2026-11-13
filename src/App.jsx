import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Audiences from './components/Audiences.jsx'
import Impact from './components/Impact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import ScrollBackground from './components/ScrollBackground.jsx'

// Links internos (#secao): em vez de levar o topo da seção para baixo do cabeçalho (o que deixa
// o espaçamento superior à mostra e o conteúdo "torto"), centraliza na tela o bloco marcado com
// data-anchor-content. Se o bloco não couber na tela, alinha o começo dele logo abaixo do cabeçalho.
function useCenteredAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest?.('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href').slice(1)
      const section = id && document.getElementById(id)
      if (!section) return
      e.preventDefault()
      const smooth = !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      const behavior = smooth ? 'smooth' : 'auto'
      if (id === 'topo') {
        window.scrollTo({ top: 0, behavior })
      } else {
        const target = section.querySelector('[data-anchor-content]') ?? section
        const header = document.querySelector('header')?.offsetHeight ?? 72
        const fits = target.offsetHeight <= window.innerHeight - header - 32
        target.scrollIntoView({ behavior, block: fits ? 'center' : 'start' })
      }
      history.replaceState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

export default function App() {
  useCenteredAnchors()
  return (
    <>
      <ScrollBackground />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Audiences />
        <Impact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
