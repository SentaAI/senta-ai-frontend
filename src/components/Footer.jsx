import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-white/5 bg-navy-950 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <a href="mailto:contato@sentaai.com.br" className="transition hover:text-accent-400">
          contato@sentaai.com.br
        </a>
        <p>© {new Date().getFullYear()} SentaAí</p>
      </div>
    </footer>
  )
}
