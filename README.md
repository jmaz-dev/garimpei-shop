# Garimpei Shop - Landing Page

Uma landing page moderna e responsiva desenvolvida em React 19 com Tailwind CSS 4, apresentando um design elegante com tema escuro e elementos interativos. A aplicação foi construída com foco em responsividade, performance e experiência do usuário.

## 🎨 Características

- **Design Moderno**: Interface elegante com tema escuro profundo e acentos vibrantes em laranja
- **Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops
- **Animações Suaves**: Transições e animações delicadas que melhoram a experiência visual
- **Header Criativo**: Logo animado com efeito de rotação e navegação intuitiva
- **Componentes Reutilizáveis**: Arquitetura modular e bem organizada
- **Performance Otimizada**: Vite como bundler para builds rápidos e eficientes
- **Tipografia Estratégica**: Uso de Poppins para títulos e Inter para corpo de texto

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes programas instalados em sua máquina:

- **Node.js** (versão 18 ou superior) - [Baixar aqui](https://nodejs.org/)
- **npm** ou **pnpm** (gerenciador de pacotes)

Para verificar se você tem Node.js instalado, execute no terminal:

```bash
node --version
npm --version
```

## 🚀 Instalação

Siga os passos abaixo para instalar e configurar o projeto em sua máquina local.

### 1. Clone ou baixe o repositório

Se você tem o projeto em um arquivo compactado, extraia-o em um diretório de sua escolha. Caso contrário, clone o repositório:

```bash
git clone <url-do-repositorio>
cd garimpei-shop
```

### 2. Instale as dependências

Navegue até o diretório do projeto e instale todas as dependências necessárias:

```bash
corepack pnpm install
```

O projeto usa pnpm como gerenciador de pacotes (`packageManager` no `package.json`) e mantém o `pnpm-lock.yaml` como lockfile. Use pnpm para respeitar esse lockfile e evitar conflitos de dependências peer ao instalar com npm.

## 🏃 Executando a Aplicação

Após instalar as dependências, você pode iniciar o servidor de desenvolvimento local.

### Iniciar o servidor de desenvolvimento

Execute o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

```bash
# Usando npm
npm run dev

# Ou usando pnpm
pnpm dev
```

O servidor iniciará e você verá uma mensagem similar a esta:

```
➜  Local:   http://localhost:5173/
➜  Network: http://169.254.0.21:5173/
```

### Acessar a aplicação

Abra seu navegador web e acesse:

```
http://localhost:5173/
```

A página carregará automaticamente e você verá a landing page do Garimpei Shop em tempo real. Se você fizer alterações nos arquivos, a página será atualizada automaticamente (Hot Module Replacement).

## 📁 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
garimpei-shop/
├── client/
│   ├── public/                 # Arquivos estáticos
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── Header.tsx      # Cabeçalho com navegação
│   │   │   ├── HeroSection.tsx # Seção principal
│   │   │   ├── FeaturesSection.tsx # Seção de benefícios
│   │   │   ├── CTASection.tsx  # Chamada para ação
│   │   │   └── Footer.tsx      # Rodapé
│   │   ├── pages/
│   │   │   └── Home.tsx        # Página inicial
│   │   ├── App.tsx             # Componente raiz
│   │   ├── main.tsx            # Ponto de entrada
│   │   └── index.css           # Estilos globais
│   └── index.html              # HTML principal
├── package.json                # Dependências do projeto
├── tailwind.config.js          # Configuração do Tailwind
├── vite.config.ts              # Configuração do Vite
└── README.md                   # Este arquivo
```

## 🎯 Seções da Landing Page

A landing page é composta por cinco seções principais:

### 1. Header
O cabeçalho apresenta um logo animado com efeito de rotação, nome da marca e navegação responsiva. Em dispositivos móveis, a navegação se transforma em um menu hambúrguer.

### 2. Hero Section
A seção principal contém o título principal com gradiente de cor, descrição com emojis decorativos, botões de ação e estatísticas da comunidade. Inclui animações de entrada suaves.

### 3. Features Section
Apresenta três cards interativos destacando os principais benefícios: economizar todos os dias, comunidade WhatsApp e ofertas exclusivas. Cada card possui efeitos de hover e cores distintas.

### 4. CTA Section
Uma seção dedicada à chamada para ação, incentivando os usuários a entrar no canal do WhatsApp com destaque visual e estatísticas importantes.

### 5. Footer
Contém informações de contato, links rápidos, links para redes sociais e informações de copyright.

## 🎨 Personalização

### Alterar Cores

As cores principais estão definidas no arquivo `client/src/index.css`. Para alterar o tema, modifique as variáveis CSS no bloco `:root`:

```css
:root {
  --primary: oklch(0.65 0.24 25.3);  /* Laranja */
  --background: oklch(0.08 0.01 0);  /* Preto profundo */
  --foreground: oklch(0.95 0.01 0);  /* Branco */
}
```

### Alterar Textos

Os textos principais estão nos componentes React. Para alterar o conteúdo, edite os arquivos em `client/src/components/` e `client/src/pages/`.

### Alterar Fontes

As fontes estão importadas no arquivo `client/index.html`. Para usar diferentes fontes, altere a URL do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet" />
```

## 🔧 Comandos Disponíveis

Aqui estão os principais comandos disponíveis no projeto:

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria uma build otimizada para produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run check` | Verifica erros de TypeScript |
| `npm run format` | Formata o código com Prettier |

## 📱 Responsividade

A aplicação foi desenvolvida com a abordagem "mobile-first" e é totalmente responsiva. Os breakpoints utilizados são:

- **Mobile**: até 640px
- **Tablet**: 640px a 1024px
- **Desktop**: acima de 1024px

## 🚀 Deploy

Para fazer deploy da aplicação em produção:

### 1. Criar uma build otimizada

```bash
npm run build
```

Este comando criará uma pasta `dist/` com os arquivos otimizados prontos para produção.

### 2. Testar a build localmente

```bash
npm run preview
```

### 3. Fazer upload para um servidor

Você pode fazer upload do conteúdo da pasta `dist/` para qualquer servidor web estático (Netlify, Vercel, GitHub Pages, etc.).

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS 4**: Framework CSS utilitário para estilização
- **Vite**: Bundler e servidor de desenvolvimento rápido
- **TypeScript**: Superset JavaScript com tipagem estática
- **Lucide React**: Ícones SVG para React
- **Wouter**: Roteador leve para React

## 📝 Notas de Desenvolvimento

### Estrutura de Componentes

Cada componente segue a seguinte estrutura:

```typescript
import { IconName } from "lucide-react";

/**
 * Component Name
 * Design Philosophy: [Descrição da filosofia de design]
 * Features: [Características principais]
 */
export default function ComponentName() {
  // Lógica do componente
  return (
    // JSX
  );
}
```

### Animações

As animações estão definidas em `client/src/index.css` e podem ser aplicadas com classes como:

- `.animate-fade-in-up` - Fade in com movimento para cima
- `.animate-float` - Flutuação suave
- `.transition-smooth` - Transição suave

### Estilos Globais

Os estilos globais estão em `client/src/index.css` e incluem:

- Definição de cores do tema
- Tipografia
- Animações
- Classes utilitárias customizadas

## 🐛 Solução de Problemas

### A página não carrega

Certifique-se de que:
- O servidor de desenvolvimento está rodando (`npm run dev`)
- Você está acessando `http://localhost:5173/` (ou a porta indicada)
- Não há erros no console do navegador (F12)

### Estilos não aparecem

Verifique se:
- O arquivo `client/src/index.css` está sendo importado em `client/src/main.tsx`
- As classes Tailwind estão sendo usadas corretamente
- Não há conflitos de CSS

### Componentes não aparecem

Certifique-se de que:
- Os componentes estão importados corretamente em `Home.tsx`
- Os arquivos estão no diretório correto
- Não há erros de TypeScript

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação oficial:

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## 📄 Licença

Este projeto está disponível sob a licença MIT. Você é livre para usar, modificar e distribuir este código.

## ✨ Melhorias Futuras

Possíveis melhorias para o projeto:

- Adicionar página de blog com artigos sobre economias
- Integração com API de cupons
- Sistema de notificações push
- Dashboard de estatísticas
- Integração com WhatsApp Business API
- Modo claro (light mode)
- Análise de dados de usuários

---

**Desenvolvido com ❤️ usando React e Tailwind CSS**

Última atualização: Fevereiro de 2026
