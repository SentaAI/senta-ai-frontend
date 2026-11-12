// Ônibus de exemplo: 32 bancos e capacidade total de 80 pessoas (32 sentadas + 48 em pé).
export const SEATS = 32
export const CAPACITY = 80

// Margem de segurança da contagem: 2 pessoas + 5% de quem está a bordo (arredondado para cima).
// Cobre quem passa sem girar a catraca, saídas que o sensor não pegou, banco ocupado por bolsa etc.
// A tela só diz "tem lugar" se ainda sobrar banco depois dessa margem: na dúvida, diz que não tem.
export const marginFor = (onboard) => 2 + Math.ceil(onboard * 0.05)

export function estimate(onboard) {
  const margin = marginFor(onboard)
  const seated = Math.min(SEATS, onboard) // bancos que certamente estão ocupados
  const maybe = Math.min(SEATS - seated, margin) // bancos que podem estar ocupados (margem)
  const free = SEATS - seated - maybe // bancos livres com folga
  const standing = Math.max(0, onboard - SEATS) // pessoas em pé
  const roomLeft = CAPACITY - (onboard + margin) // espaço que ainda sobra, já com a margem

  let state = 'full'
  if (free > 0) state = 'sit'
  else if (roomLeft > 0) state = 'stand'

  return { onboard, margin, seated, maybe, free, standing, state }
}

// Paradas da demonstração do hero: passa pelos três estados
export const STOPS = [
  { stop: 'Brigadeiro', onboard: 24 }, // tem lugar (≈ 4 livres)
  { stop: 'Consolação', onboard: 29 }, // 3 bancos sobrando, mas dentro da margem: só em pé
  { stop: 'Av. Paulista', onboard: 58 }, // só em pé (26 em pé)
  { stop: 'Paraíso', onboard: 76 }, // lotado
]

export const STATES = {
  sit: {
    label: 'Assentos disponíveis',
    short: 'Assentos disponíveis',
    tip: 'Siga pelo corredor.',
    bg: 'bg-emerald-500',
    fg: 'text-white',
    bar: 'bg-emerald-400',
    chip: 'bg-emerald-400/15 text-emerald-300',
  },
  stand: {
    label: 'Sem assentos disponíveis',
    short: 'Sem assentos disponíveis',
    tip: 'Só lugar em pé.',
    bg: 'bg-amber-400',
    fg: 'text-navy-950',
    bar: 'bg-amber-400',
    chip: 'bg-amber-400/15 text-amber-300',
  },
  full: {
    label: 'Ônibus lotado',
    short: 'Lotado',
    tip: 'Sem espaço para entrar.',
    bg: 'bg-red-500',
    fg: 'text-white',
    bar: 'bg-red-500',
    chip: 'bg-red-500/15 text-red-300',
  },
}

// Texto curto que acompanha o número de pessoas
export function detail(e) {
  if (e.state === 'sit') return `${e.free} ${e.free === 1 ? 'assento livre' : 'assentos livres'}`
  if (e.state === 'full') return 'Capacidade máxima'
  if (e.standing > 0) return `${e.standing} em pé`
  return 'Bancos cheios'
}
