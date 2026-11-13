// Marca: logo sem fundo (ônibus + nome), com o azul trocado por branco para os fundos escuros do site.
export default function Logo({ className = '', imgClassName = 'h-10' }) {
  return (
    <a href="#topo" aria-label="SentaAí, página inicial" className={`inline-flex shrink-0 items-center ${className}`}>
      <img src="/logo-footer.png" alt="SentaAí" className={`w-auto ${imgClassName}`} />
    </a>
  )
}
