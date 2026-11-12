# Sentai

O SentaAí é um sistema IoT que combina sensores e monitoramento de movimento para medir a quantidade de passageiros dentro do ônibus e indicar, em tempo real, se há assentos disponíveis, espaço em pé ou lotação.

Este repositório contém a interface web da solução, criada com React e Vite para apresentar a proposta de valor do produto.

## Principais recursos

- Landing page
- Seção explicativa do funcionamento do sistema
- Demonstração interativa dos estados de ocupação do ônibus
- Componentes animados e responsivos
- Estilo moderno com Tailwind
- Estrutura pronta para novas seções e integrações

## Stack tecnológica

- React 19
- Vite
- Tailwind CSS
- lucide-react

## Estrutura do projeto

```bash
senta-ai-frontend/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── LICENSE
└── README.md
```

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação e run

```bash
npm install
```

```bash
npm run dev
```

A aplicação ficará disponível no navegador em uma URL local fornecida pelo Vite, normalmente:

```bash
http://localhost:5173
```

### Build e preview

```bash
npm run build
```

```bash
npm run preview
```

## Como a interface é organizada

A aplicação é composta por seções principais:

- Hero: apresentação da proposta e visão geral do produto
- Como funciona: explicação do fluxo do sistema
- Público-alvo: segmentação de usuários e impactos
- Impacto: mensagem de valor e contexto social
- CTA final: chamada para ação

## Design e UX

A interface faz uso de:

- paleta escura com contraste pra dar destaque
- animações sutis de entrada e movimento entre as seções
- ilustrações e diagramas do ônibus para reforçar a narrativa
- responsividade para desktop e mobile

## Observações

Este repositório é focado na parte visual e de apresentação do produto. Para as funcionalidades de monitoramento em tempo real e integração com sensores, estão disponibilizados no repo de backend e iot em si.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

