// Marca: ícone quadrado da logo (o mesmo do favicon) + nome em texto.
export default function Logo({ tone = 'light', className = '' }) {
  const senta = tone === 'light' ? 'text-white' : 'text-navy-900'
  const ai = tone === 'light' ? 'text-accent-400' : 'text-accent-500'
  return (
    <a
      href="#topo"
      aria-label="SentaAí, página inicial"
      className={`group inline-flex items-center gap-2.5 text-[1.6rem] leading-none font-black tracking-tight italic ${className}`}
    >
      <img
        src="/favicon.png"
        alt=""
        className="h-9 w-9 rounded-[0.6rem] ring-1 ring-white/15 transition duration-500 ease-out group-hover:-rotate-3"
      />
      <span>
        <span className={senta}>Senta</span>
        <span className={ai}>Aí</span>
      </span>
    </a>
  )
}
