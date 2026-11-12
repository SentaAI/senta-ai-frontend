// Céu noturno de cidade: azul profundo no alto, clareando no horizonte, com o brilho
// laranja das luzes da cidade e uma granulação leve (evita o aspecto de degradê "de computador").
// horizon: distância (px) do horizonte até a base da seção, onde o brilho é mais forte.
export function NightSky({ className = '', horizon = 0 }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#00163f_0%,#001a4d_40%,#00215e_72%,#0b2c6e_100%)]" />
      <div
        className="absolute inset-x-0 h-[70%] bg-[radial-gradient(ellipse_85%_50%_at_50%_100%,rgb(249_130_7/0.45),rgb(249_130_7/0.14)_45%,transparent_75%)]"
        style={{ bottom: horizon }}
      />
      <div className="bg-noise absolute inset-0 opacity-[0.05]" />
    </div>
  )
}

// Silhueta de prédios. [esquerda %, largura px, altura px]
const BUILDINGS = [
  [0, 120, 95], [6, 70, 140], [10.5, 110, 80], [17.5, 60, 170], [21.5, 130, 110], [29.5, 90, 190],
  [35.5, 100, 120], [42, 70, 150], [46.5, 120, 90], [54.5, 90, 175], [60.5, 110, 125], [67.5, 70, 200],
  [72, 110, 105], [79.5, 85, 150], [85, 100, 130], [91.5, 130, 95],
]

// Gerador determinístico simples: as mesmas janelas acendem a cada render
const rand = (seed) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

function Windows({ w, h, seed }) {
  const cols = Math.floor((w - 14) / 13)
  const rows = Math.floor((h - 18) / 17)
  const lit = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = rand(seed * 100 + r * 17 + c)
      if (v < 0.16) lit.push({ r, c, o: 0.35 + rand(seed + r * 3 + c * 7) * 0.5 })
    }
  }
  return lit.map(({ r, c, o }) => (
    <span
      key={`${r}-${c}`}
      className="absolute h-[5px] w-[4px] rounded-[1px] bg-amber-200"
      style={{ left: 9 + c * 13, top: 12 + r * 17, opacity: o }}
    />
  ))
}

export function Skyline({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 ${className}`} aria-hidden="true">
      {BUILDINGS.map(([left, w, h], i) => (
        <span
          key={left}
          className="absolute bottom-0 bg-[#001233]"
          style={{ left: `${left}%`, width: w, height: h }}
        >
          <Windows w={w} h={h} seed={i + 1} />
        </span>
      ))}
    </div>
  )
}
