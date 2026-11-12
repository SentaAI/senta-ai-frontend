import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Audiences from './components/Audiences.jsx'
import Impact from './components/Impact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import ScrollBackground from './components/ScrollBackground.jsx'

export default function App() {
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
