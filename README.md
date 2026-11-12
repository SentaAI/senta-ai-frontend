# SentaAí Frontend

Landing page e interface front-end do projeto SentaAí, uma solução voltada para tornar a ocupação do transporte público mais transparente em tempo real. A aplicação apresenta uma experiência moderna, visual interativa e informativa para comunicar como o sistema funciona e quais benefícios ele entrega para usuários e operadores.

## Visão geral

O SentaAí é um sistema IoT que combina sensores e monitoramento de movimento para medir a quantidade de passageiros dentro do ônibus e indicar, em tempo real, se há assentos disponíveis, espaço em pé ou lotação.

Este repositório contém a interface web da solução, criada com React e Vite, com visual em estilo premium para apresentar a proposta de valor do produto.

## Principais recursos

- Landing page com narrativa clara e visual impactante
- Seção explicativa do funcionamento do sistema
- Demonstração interativa de estados de ocupação do ônibus
- Componentes visuais animados e responsivos
- Estilo moderno com Tailwind CSS
- Estrutura pronta para expansão com novas seções e integrações

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

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no navegador em uma URL local fornecida pelo Vite, normalmente:

```bash
http://localhost:5173
```

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## Scripts disponíveis

No arquivo `package.json`, o projeto inclui os seguintes scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Como a interface é organizada

A aplicação é composta por seções principais:

- Hero: apresentação da proposta e visão geral do produto
- Como funciona: explicação do fluxo operacional do sistema
- Público-alvo: segmentação de usuários e impactos
- Impacto: mensagem de valor e contexto social
- CTA final: chamada para ação

## Design e UX

A interface faz uso de:

- paleta escura com contraste forte para destaque visual
- animações sutis de entrada e movimento
- ilustrações e diagramas do ônibus para reforçar a narrativa
- responsividade para desktop e mobile

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Autor

Projeto desenvolvido para a marca SentaAí.

## Observações

Este repositório é focado na parte visual e de apresentação do produto. Para funcionalidades reais de monitoramento em tempo real, coleta de dados e integração com sensores, será necessário complementar com um backend e dispositivos IoT.

---

Se quiser, posso também criar uma versão mais “profissional”, uma versão com badges e screenshots, ou uma README específica para GitHub com padrão de open source.
