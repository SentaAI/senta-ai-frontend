import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { NAV_LINKS } from './Header.jsx'
import Logo from './Logo.jsx'

const linkCls = 'text-slate-400 transition duration-500 hover:text-white'

export default function Footer() {
  return (
    // Mesmo tom dos prédios do CTA: a cidade "pousa" no rodapé, sem linha de corte.
    <footer id="contato" className="bg-[#001233] text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pt-16 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 leading-relaxed text-slate-400">
              Sistema IoT que informa, dentro do ônibus, a lotação e a disponibilidade de assentos em tempo real.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Navegação</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Contato</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="mailto:contato@sentaai.com.br" className={`inline-flex items-center gap-2 ${linkCls}`}>
                  <Mail className="h-4 w-4 text-accent-400" />
                  contato@sentaai.com.br
                </a>
              </li>
              <li>
                <a
                  href="#adotar"
                  className="group inline-flex items-center gap-1.5 font-semibold text-accent-400 transition duration-500 hover:text-accent-300"
                >
                  Agendar demonstração
                  <ArrowUpRight className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SentaAí. Todos os direitos reservados.</p>
          <a href="#topo" className="group inline-flex items-center gap-1.5 transition duration-500 hover:text-white">
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5 transition duration-500 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
