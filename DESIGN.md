---
name: "Protocolo Blindagem Financeira"
description: "Landing page dark tech para curso de proteção financeira contra IA"
colors:
  primary: "#00d4ff"
  primary-deep: "#7c3aed"
  danger: "#ef4444"
  success: "#22c55e"
  gold: "#fbbf24"
  gold-dark: "#f59e0b"
  neutral-bg: "#0a0a0f"
  neutral-surface: "#1a1a2e"
  neutral-text: "#ffffff"
  neutral-muted: "#94a3b8"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.1
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "8px"
  md: "12px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.md}"
    padding: "24px 48px"
  button-cta:
    backgroundColor: "linear-gradient(135deg, {colors.primary}, {colors.primary-deep})"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.md}"
    padding: "24px 48px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "48px"
  badge:
    backgroundColor: "rgba(0, 212, 255, 0.1)"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Protocolo Blindagem Financeira

## 1. Overview

**Creative North Star: "The Digital Fortress"**

Sistema visual que transmite proteção e poder tecnológico. Fundo escuro profundo cria atmosfera de seriedade e urgência, enquanto azul neon e roxo trazem energia de inovação. A paleta é intencionalmente limitada: escuridão como base, luz como destaque. Rejeita o visual "SaaS genérico" com gradientes roxo-azul pastel e cards redondos; em vez disso, usa contraste alto, bordas sutis e efeitos de glow com moderação. Personalidade: confiante, moderna, direta. Cada elemento existe por razão; nada é decorativo.

**Key Characteristics:**
- Fundo escuro profundo (#0a0a0f) com superfície ligeiramente mais clara (#1a1a2e)
- Azul neon (#00d4ff) como cor de destaque e ação
- Roxo (#7c3aed) como acento secundário para gradientes
- Tipografia Inter com pesos extremos (800-900) para hierarquia agressiva
- Efeitos de glow e pulso com moderação — energéticos, não excessivos
- Espaçamento generoso entre seções para respiração visual

## 2. Colors

Paleta escura com acentos neon de alta energia. Contraste máximo entre fundo e texto para legibilidade em todas as condições de luz.

### Primary
- **Neon Blue** (#00d4ff): Cor de ação principal. Usada em CTAs, destaques de texto, ícones de timer, bordas de cards interativos. Transmite urgência e tecnologia.

### Secondary
- **Electric Purple** (#7c3aed): Acento secundário. Usada em gradientes com azul neon, bordas de cards de depoimento, efeitos hover. Adiciona profundidade sem competir com o azul.

### Tertiary
- **Alert Red** (#ef4444): Cor de perigo e urgência. Usada em estatísticas de problema, texto de aviso, bordas de cards de alerta. Transmite consequência real.
- **Success Green** (#22c55e): Cor de confiança. Usada em preço atual, garantia, badges de segurança. Transmite que o investimento é seguro.
- **Gold** (#fbbf24): Cor de premium. Usada em borders de oferta, badges de bônus, estrelas de depoimento. Transmite valor e exclusividade.

### Neutral
- **Void Black** (#0a0a0f): Fundo principal. Escuridão pura que cria atmosfera de seriedade e permite que acescentos brilhem.
- **Deep Surface** (#1a1a2e): Superfície de cards e containers. Sutilmente mais clara que o fundo para criar profundidade sem quebrar a imersão.
- **Pure White** (#ffffff): Texto principal e números grandes. Contraste máximo contra fundo escuro.
- **Muted Slate** (#94a3b8): Texto secundário, legendas, descrições. Reduzido para não competir com informações críticas.

### Named Rules
**The Neon Restraint Rule.** Azul neon e roxo são usados com moderação. Excesso de glow ou gradiente quebra a seriedade do design. Cada aplicação de cor neon deve ter uma razão clara: ação, destaque ou feedback.

## 3. Typography

**Display Font:** Inter (system-ui fallback)
**Body Font:** Inter (system-ui fallback)

**Character:** Tipografia sans-serif geométrica com peso extremo para hierarquia agressiva. Sem serifa para manter visual limpo e tecnológico. Pesos 800-900 para títulos criam impacto visual imediato.

### Hierarchy
- **Display** (900, clamp(2.5rem, 5vw, 4rem), 1.1): Títulos de hero e seções principais. Maior escala possível sem gritar.
- **Headline** (800, clamp(2rem, 4vw, 3rem), 1.2): Subtítulos de seção. Hierarquia clara com display.
- **Title** (700, 1.5rem, 1.4): Títulos de cards e componentes. Forte mas não dominante.
- **Body** (400, 1.125rem, 1.6): Texto corrido e descrições. Máximo 65-75 caracteres por linha.
- **Label** (600, 0.875rem, 0.1em): Badges, badges de timer, texto de botão. Uppercase com tracking generoso.

### Named Rules
**The Weight Contrast Rule.** Hierarquia é criada por peso, não por tamanho. A diferença mínima entre níveis é 200 de peso (ex: 900 vs 700). Isso cria impacto sem necessidade de tamanhos exagerados.

## 4. Elevation

Sistema flat com profundidade criada por camadas de tom (tonal layering). Sem sombras tradicionais; em vez disso, usa bordas sutis e variações de opacidade do fundo para criar hierarquia visual. Efeitos de glow são usados apenas em hover e estados interativos.

### Shadow Vocabulary
- **Subtle Glow** (`box-shadow: 0 0 30px rgba(0, 212, 255, 0.2)`): Hover em cards interativos. Efeito sutil que indica interatividade.
- **Alert Pulse** (`animation: pulse-red 2s infinite`): Cards de estatística de problema. Pulsação visual que transmite urgência.
- **CTA Glow** (`box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4)`): Hover em botões CTA. Impacto visual que reforça a ação.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são planas em repouso. Sombras e glow aparecem apenas como resposta a estado (hover, foco, urgência). Isso mantém o design limpo e permite que efeitos especiais tenham impacto quando necessários.

## 5. Components

### Buttons
- **Shape:** Arredondamento médio (12px) para visual moderno sem ser infantil
- **Primary CTA:** Gradiente de azul neon para roxo, texto branco, padding generoso (24px 48px). Transição de transform e box-shadow no hover.
- **Hover / Focus:** Eleva 2px com escala 1.02, adiciona glow azul. Focusing visível com outline azul para acessibilidade.
- **Secondary:** Fundo transparente com borda azul, texto azul. Usado para ações secundárias.

### Cards
- **Corner Style:** Arredondamento pequeno (8px) para visual profissional
- **Background:** Superfície escura (#1a1a2e) com borda sutil
- **Border:** 1px sólido com opacidade variável por tipo (azul para interativo, vermelho para alerta, verde para sucesso)
- **Internal Padding:** Generoso (48px desktop, 24px mobile) para respiração visual

### Timer Blocks
- **Shape:** Cards quadrados com arredondamento médio (8px)
- **Background:** Superfície escura (#1a1a2e)
- **Text:** Azul neon para números, slate para labels
- **State:** Números grandes (2.5rem) com peso 800 para impacto

### Offer Card
- **Shape:** Card centralizado com borda dourada (2px)
- **Background:** Fundo escuro (#0a0a0f) para contraste com a seção
- **Badge:** Gradiente dourado no topo, texto escuro
- **Price:** Verde success para preço atual, slate riscado para preço original

### Testimonial Cards
- **Shape:** Cards individuais com borda roxa sutil
- **Avatar:** Círculo com gradiente azul-roxo, inicial em branco
- **Stars:** Dourado (#fbbf24) para avaliação

### Navigation
- **Style:** Sem nav visível; CTA sticky no mobile
- **Typography:** Label (600, 0.875rem, uppercase)
- **Mobile:** Botão CTA fixo no rodapé para acesso rápido

## 6. Do's and Don'ts

### Do:
- **Do** usar contraste máximo entre texto e fundo (branco #ffffff contra preto #0a0a0f)
- **Do** usar azul neon (#00d4ff) apenas para elementos de ação e destaque (≤15% da superfície)
- **Do** manter espaçamento generoso entre seções (mínimo 96px desktop)
- **Do** usar pesos extremos (800-900) para títulos, peso regular (400) para corpo
- **Do** testar contraste de cores: todo texto deve ter mínimo 4.5:1 contra fundo
- **Do** usar bordas sutis para definir hierarquia de cards, não sombras pesadas
- **Do** manter consistência: todos os cards usam mesmo arredondamento (8px), mesmo espaçamento interno

### Don't:
- **Don't** usar gradientes roxo-azul genéricos em toda superfície (anti-referência: SaaS startup genérico)
- **Don't** usar mais de 3 fontes (o projeto usa apenas Inter)
- **Don't** criar cards dentro de cards (aninhamento proibido)
- **Don't** usar sombras pesadas ou efeitos glassmorphism decorativos
- **Don't** usar texto cinza (#94a3b8) em fundos coloridos (parece lavado)
- **Don't** criar gradientes de texto (background-clip: text) — decorativo, nunca significativo
- **Don't** usar animações bounce ou elastic (parece datado)
- **Don't** colocar borders-left/right maiores que 1px como acento colorido
- **Don't** usar ALL CAPS em corpo de texto — reserve para labels curtos (≤4 palavras)
- **Don't** criar grids de cards idênticos com ícone + título + texto repetidos
