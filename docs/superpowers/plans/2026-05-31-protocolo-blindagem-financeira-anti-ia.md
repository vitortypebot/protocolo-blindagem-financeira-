# Landing Page: Protocolo Blindagem Financeira Anti IA - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting landing page for "Protocolo Blindagem Financeira Anti IA" with dark tech aesthetic, animations, and mobile responsiveness.

**Architecture:** Static HTML/CSS/JS landing page with 7 sections, particle animations, countdown timer, and responsive design. No frameworks — vanilla stack for maximum performance.

**Tech Stack:** HTML5, CSS3 (Flexbox/Grid/Animations), JavaScript ES6+

---

## File Structure

```
projeto/
├── index.html              # Main HTML file with all 7 sections
├── css/
│   ├── style.css           # Main styles + design system
│   └── animations.css      # Keyframes and animation classes
├── js/
│   ├── main.js             # Intersection Observer, scroll effects
│   ├── particles.js        # Hero particle animation
│   └── timer.js            # Countdown timer logic
└── assets/
    └── (empty - using CSS for visuals)
```

---

## Task 1: Project Setup + HTML Structure

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `css/animations.css`
- Create: `js/main.js`
- Create: `js/particles.js`
- Create: `js/timer.js`

- [ ] **Step 1: Create index.html with semantic structure**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Protocolo Blindagem Financeira Anti IA</title>
  <meta name="description" content="O sistema definitivo para profissionais CLT criarem novas fontes de renda e se protegerem da automação por inteligência artificial.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>
  <!-- Hero Section -->
  <section id="hero" class="hero">
    <canvas id="particles"></canvas>
    <div class="hero-content">
      <div class="badge">PROTOCOLO DE BLINDAGEM FINANCEIRA</div>
      <h1>Seu salário CLT não vai te proteger.<br><span class="highlight">A IA está chegando.</span></h1>
      <p class="subtitle">O Protocolo Blindagem Financeira ensina CLTs a criarem fontes de renda com IA antes que a automação tome seus empregos.</p>
      <div class="timer-container">
        <p class="timer-label">Oferta expira em:</p>
        <div class="timer">
          <div class="timer-block"><span id="hours">00</span><small>horas</small></div>
          <div class="timer-separator">:</div>
          <div class="timer-block"><span id="minutes">00</span><small>min</small></div>
          <div class="timer-separator">:</div>
          <div class="timer-block"><span id="seconds">00</span><small>seg</small></div>
        </div>
      </div>
      <a href="#oferta" class="cta-button">QUERO ME BLINDAR AGORA →</a>
    </div>
  </section>

  <!-- Problem Section -->
  <section id="problema" class="section problema">
    <div class="container">
      <h2>A automação já está tirando vagas.<br><span class="highlight-red">E o seu emprego pode ser o próximo.</span></h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">67%</span>
          <p class="stat-text">das funções administrativas serão automatizadas até 2028</p>
        </div>
        <div class="stat-card">
          <span class="stat-number">85%</span>
          <p class="stat-text">dos CLTs não têm renda extra</p>
        </div>
        <div class="stat-card">
          <span class="stat-number">2min</span>
          <p class="stat-text">a cada 2 minutos, 1 vaga CLT é demitida por IA</p>
        </div>
      </div>
      <p class="problem-text">Você trabalha 8h por dia, depende do salário, e não sabe como reagir. <strong>A janela para se preparar está se fechando.</strong></p>
    </div>
  </section>

  <!-- Solution Section -->
  <section id="solucao" class="section solucao">
    <div class="container">
      <h2>O Protocolo Blindagem Financeira:<br><span class="highlight">O sistema definitivo para CLTs criarem renda extra com IA</span></h2>
      <div class="pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon">🎯</div>
          <h3>Mapeamento</h3>
          <p>Identifique quais habilidades da sua profissão podem ser convertidas em renda com IA</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">⚡</div>
          <h3>Implementação</h3>
          <p>Monte seu sistema de renda extra funcionando em 30 dias</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🛡️</div>
          <h3>Blindagem</h3>
          <p>Crie múltiplas fontes de renda para nunca mais depender de um só patrão</p>
        </div>
      </div>
      <p class="solution-text">Em <strong>8 módulos práticos</strong>, você vai sair sabendo exatamente como usar a IA a seu favor — <strong>mesmo que nunca tenha programado nada.</strong></p>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section id="prova-social" class="section prova-social">
    <div class="container">
      <h2>Quem já está se blindando <span class="highlight">não para.</span></h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">C</div>
            <div>
              <strong>Carlos</strong>
              <span>Analista Administrativo, SP</span>
            </div>
          </div>
          <p class="testimonial-text">"Em 45 dias já estava faturando R$ 3.200/mês com automação de atendimento. Meu patrão nem sabe."</p>
          <div class="stars">★★★★★</div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">M</div>
            <div>
              <strong>Maria</strong>
              <span>Assistente Financeira, RJ</span>
            </div>
          </div>
          <p class="testimonial-text">"Tinha medo de perder meu emprego. Agora tenho 3 fontes de renda e estou mais tranquila que nunca."</p>
          <div class="stars">★★★★★</div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">P</div>
            <div>
              <strong>Pedro</strong>
              <span>RH, MG</span>
            </div>
          </div>
          <p class="testimonial-text">"O módulo de IA me fez perceber que minha profissão não vai morrer, mas precisa evoluir. Hoje ganho mais que meu salário."</p>
          <div class="stars">★★★★★</div>
        </div>
      </div>
      <div class="metrics">
        <div class="metric">
          <span class="metric-number">2.847+</span>
          <p>CLTs já estão no Protocolo</p>
        </div>
        <div class="metric">
          <span class="metric-number">93%</span>
          <p>dos alunos criaram pelo menos 1 fonte de renda</p>
        </div>
        <div class="metric">
          <span class="metric-number">R$ 4.700</span>
          <p>é a renda média dos alunos após 90 dias</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Offer Section -->
  <section id="oferta" class="section oferta">
    <div class="container">
      <h2>Seu investimento na <span class="highlight">blindagem financeira</span></h2>
      <div class="offer-card">
        <div class="offer-badge">OFERTA ESPECIAL</div>
        <div class="price-container">
          <span class="price-original">R$ 297</span>
          <span class="price-current">R$ 67,90</span>
          <span class="price-installment">ou 12x de R$ 6,79</span>
        </div>
        <div class="bonuses">
          <h3>BÔNUS INCLUSOS:</h3>
          <div class="bonus-item">
            <span class="bonus-icon">🎁</span>
            <div>
              <strong>Acesso vitalício às atualizações do Protocolo</strong>
              <span class="bonus-value">Valor: R$ 297</span>
            </div>
          </div>
          <div class="bonus-item">
            <span class="bonus-icon">👥</span>
            <div>
              <strong>Comunidade exclusiva de alunos</strong>
              <span class="bonus-value">Valor: R$ 197</span>
            </div>
          </div>
          <div class="bonus-item">
            <span class="bonus-icon">✅</span>
            <div>
              <strong>Checklist Blindagem Financeira</strong>
              <span class="bonus-value">Valor: R$ 97</span>
            </div>
          </div>
          <div class="bonus-total">
            <span>Total dos bônus: R$ 591 — <strong>GRÁTIS</strong></span>
          </div>
        </div>
        <a href="#" class="cta-button cta-offer">QUERO ME BLINDAR AGORA →</a>
        <p class="offer-urgency">Oferta limitada — restam apenas <strong>47 vagas</strong></p>
        <div class="timer-container timer-offer">
          <div class="timer">
            <div class="timer-block"><span id="hours-offer">00</span><small>horas</small></div>
            <div class="timer-separator">:</div>
            <div class="timer-block"><span id="minutes-offer">00</span><small>min</small></div>
            <div class="timer-separator">:</div>
            <div class="timer-block"><span id="seconds-offer">00</span><small>seg</small></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Guarantee Section -->
  <section id="garantia" class="section garantia">
    <div class="container">
      <div class="guarantee-card">
        <div class="guarantee-icon">🛡️</div>
        <h2>Sua garantia incondicional de 7 dias</h2>
        <p>Se em 7 dias você não sentir que o Protocolo pode transformar sua situação financeira, <strong>devolvemos 100% do seu dinheiro.</strong> Sem perguntas, sem burocracia.</p>
      </div>
      <div class="security-badges">
        <div class="security-badge">
          <span class="badge-icon">🔒</span>
          <span>Pagamento seguro via Hotmart</span>
        </div>
        <div class="security-badge">
          <span class="badge-icon">🔐</span>
          <span>Dados protegidos com criptografia</span>
        </div>
        <div class="security-badge">
          <span class="badge-icon">⚡</span>
          <span>Acesso imediato após confirmação</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="section faq">
    <div class="container">
      <h2>Perguntas frequentes</h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question">
            <span>Preciso saber programar?</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer">
            <p>Não. O Protocolo foi feito para leigos. Tudo é explicado passo a passo, do zero absoluto.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>Em quanto tempo vou ver resultado?</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer">
            <p>A maioria dos alunos cria sua primeira fonte de renda em 30 dias seguindo o método.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>E se eu não tiver tempo?</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer">
            <p>O curso tem módulos de 15 minutos. Você pode estudar no horário que quiser, no seu ritmo.</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>Isso funciona para a minha área?</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer">
            <p>Sim. O Protocolo se adapta a qualquer profissão CLT. O método é universal.</p>
          </div>
        </div>
      </div>
      <p class="faq-cta">Ainda com dúvida? <strong>O risco é zero — garantia de 7 dias.</strong></p>
      <a href="#oferta" class="cta-button">QUERO ME BLINDAR AGORA →</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">Protocolo Blindagem Financeira</div>
        <div class="footer-links">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Contato</a>
        </div>
        <p class="footer-copyright">© 2026 Protocolo Blindagem Financeira. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <script src="js/particles.js"></script>
  <script src="js/timer.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit HTML structure**

```bash
git add index.html
git commit -m "feat: add landing page HTML structure with 7 sections"
```

---

## Task 2: CSS Design System + Base Styles

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create css/style.css with design system**

```css
/* Design System */
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #1a1a2e;
  --neon-blue: #00d4ff;
  --neon-purple: #7c3aed;
  --alert-red: #ef4444;
  --success-green: #22c55e;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --font-family: 'Inter', sans-serif;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
  --spacing-3xl: 96px;
  --radius-card: 8px;
  --radius-button: 12px;
}

/* Reset & Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section {
  padding: var(--spacing-3xl) 0;
}

/* Typography */
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.highlight {
  color: var(--neon-blue);
}

.highlight-red {
  color: var(--alert-red);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: var(--spacing-xl);
}

.badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid var(--neon-blue);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-lg);
  color: var(--neon-blue);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Timer */
.timer-container {
  margin-bottom: var(--spacing-xl);
}

.timer-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.timer {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
}

.timer-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-block span {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--neon-blue);
  background: var(--bg-secondary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-card);
  min-width: 80px;
}

.timer-block small {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: var(--spacing-xs);
  text-transform: uppercase;
}

.timer-separator {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--neon-blue);
  padding-top: var(--spacing-sm);
}

/* CTA Button */
.cta-button {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: var(--radius-button);
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.stat-card {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-card);
  text-align: center;
  border: 1px solid rgba(239, 68, 68, 0.3);
  animation: pulse-red 2s infinite;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--alert-red);
  display: block;
  margin-bottom: var(--spacing-sm);
}

.stat-text {
  color: var(--text-secondary);
  font-size: 1rem;
}

.problem-text {
  text-align: center;
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Pillars Grid */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.pillar-card {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-card);
  text-align: center;
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.pillar-card:hover {
  border-color: var(--neon-blue);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
}

.pillar-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.solution-text {
  text-align: center;
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.testimonial-card {
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-card);
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.testimonial-header strong {
  display: block;
  font-size: 1rem;
}

.testimonial-header span {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.testimonial-text {
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.stars {
  color: #fbbf24;
  font-size: 1.25rem;
}

/* Metrics */
.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  text-align: center;
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--neon-blue);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.metric p {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Offer Section */
.oferta {
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
}

.offer-card {
  max-width: 600px;
  margin: 0 auto;
  background: var(--bg-primary);
  border: 2px solid #fbbf24;
  border-radius: var(--radius-card);
  padding: var(--spacing-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.offer-badge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #000;
  padding: var(--spacing-xs);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 2px;
}

.price-container {
  margin: var(--spacing-xl) 0;
}

.price-original {
  font-size: 1.5rem;
  color: var(--text-secondary);
  text-decoration: line-through;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.price-current {
  font-size: 4rem;
  font-weight: 900;
  color: var(--success-green);
  display: block;
}

.price-installment {
  font-size: 1rem;
  color: var(--text-secondary);
  display: block;
  margin-top: var(--spacing-xs);
}

.bonuses {
  text-align: left;
  margin-bottom: var(--spacing-xl);
}

.bonuses h3 {
  font-size: 1rem;
  color: var(--neon-blue);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.bonus-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.bonus-icon {
  font-size: 1.5rem;
}

.bonus-item strong {
  display: block;
  margin-bottom: var(--spacing-xs);
}

.bonus-value {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: line-through;
}

.bonus-total {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  background: rgba(34, 197, 94, 0.1);
  border-radius: var(--radius-card);
  text-align: center;
  color: var(--success-green);
  font-weight: 600;
}

.cta-offer {
  width: 100%;
  font-size: 1.25rem;
  padding: var(--spacing-lg);
}

.offer-urgency {
  margin-top: var(--spacing-md);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.offer-urgency strong {
  color: var(--alert-red);
}

.timer-offer {
  margin-top: var(--spacing-md);
}

/* Guarantee */
.guarantee-card {
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border-radius: var(--radius-card);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.guarantee-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
}

.guarantee-card p {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

.security-badges {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.security-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.badge-icon {
  font-size: 1.25rem;
}

/* FAQ */
.faq-list {
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}

.faq-toggle {
  font-size: 1.5rem;
  color: var(--neon-blue);
  transition: transform 0.3s;
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding-bottom: var(--spacing-md);
}

.faq-answer p {
  color: var(--text-secondary);
}

.faq-cta {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.faq .cta-button {
  display: block;
  max-width: 400px;
  margin: 0 auto;
}

/* Footer */
.footer {
  padding: var(--spacing-xl) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  text-align: center;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--neon-blue);
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--neon-blue);
}

.footer-copyright {
  color: var(--text-secondary);
  font-size: 0.75rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    padding: var(--spacing-md);
  }

  .timer-block span {
    font-size: 1.5rem;
    min-width: 60px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .timer-separator {
    font-size: 1.5rem;
    padding-top: var(--spacing-xs);
  }

  .stats-grid,
  .pillars-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .metrics {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .offer-card {
    padding: var(--spacing-lg);
  }

  .price-current {
    font-size: 3rem;
  }

  .security-badges {
    flex-direction: column;
    align-items: center;
  }
}

/* Animations */
@keyframes pulse-red {
  0%, 100% {
    border-color: rgba(239, 68, 68, 0.3);
    box-shadow: 0 0 0 rgba(239, 68, 68, 0);
  }
  50% {
    border-color: rgba(239, 68, 68, 0.6);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s, transform 0.6s;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Commit CSS design system**

```bash
git add css/style.css
git commit -m "feat: add CSS design system with dark tech theme"
```

---

## Task 3: Animations CSS

**Files:**
- Create: `css/animations.css`

- [ ] **Step 1: Create css/animations.css**

```css
/* Particle Canvas */
.hero {
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 70%);
}

/* Glow Effects */
.pillar-card:hover {
  animation: glow-blue 1.5s ease-in-out infinite alternate;
}

@keyframes glow-blue {
  from {
    box-shadow: 0 0 5px rgba(0, 212, 255, 0.2);
  }
  to {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
  }
}

/* CTA Pulse */
.cta-button {
  animation: cta-pulse 2s infinite;
}

@keyframes cta-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 212, 255, 0);
  }
}

/* Timer Pulse */
.timer-block span {
  animation: timer-glow 1s infinite;
}

@keyframes timer-glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
}

/* Offer Card Shine */
.offer-card {
  animation: shine 3s infinite;
}

@keyframes shine {
  0%, 100% {
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.4);
  }
}

/* Stat Card Pulse */
.stat-card {
  animation: stat-pulse 2s infinite;
}

@keyframes stat-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* Floating Animation */
.pillar-icon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

- [ ] **Step 2: Commit animations CSS**

```bash
git add css/animations.css
git commit -m "feat: add CSS animations for hero, cards, and timer"
```

---

## Task 4: JavaScript - Particles Animation

**Files:**
- Create: `js/particles.js`

- [ ] **Step 1: Create js/particles.js**

```javascript
// Particle animation for hero section
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
    this.particles = [];
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00d4ff' : '#7c3aed'
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 150)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
  }

  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off walls
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }
      }
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateParticles();
    this.drawConnections();
    this.particles.forEach(particle => this.drawParticle(particle));
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particles');
  if (canvas) {
    new ParticleSystem(canvas);
  }
});
```

- [ ] **Step 2: Commit particles.js**

```bash
git add js/particles.js
git commit -m "feat: add particle animation system for hero section"
```

---

## Task 5: JavaScript - Countdown Timer

**Files:**
- Create: `js/timer.js`

- [ ] **Step 1: Create js/timer.js**

```javascript
// Countdown timer
class CountdownTimer {
  constructor(hoursElement, minutesElement, secondsElement, durationHours = 24) {
    this.hoursEl = document.getElementById(hoursElement);
    this.minutesEl = document.getElementById(minutesElement);
    this.secondsEl = document.getElementById(secondsElement);
    this.duration = durationHours * 60 * 60 * 1000; // Convert to ms
    this.endTime = this.getEndTime();
    this.init();
  }

  getEndTime() {
    const stored = localStorage.getItem('timerEndTime');
    if (stored && parseInt(stored) > Date.now()) {
      return parseInt(stored);
    }
    const end = Date.now() + this.duration;
    localStorage.setItem('timerEndTime', end.toString());
    return end;
  }

  init() {
    this.update();
    setInterval(() => this.update(), 1000);
  }

  update() {
    const now = Date.now();
    const diff = this.endTime - now;

    if (diff <= 0) {
      this.endTime = Date.now() + this.duration;
      localStorage.setItem('timerEndTime', this.endTime.toString());
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.hoursEl.textContent = hours.toString().padStart(2, '0');
    this.minutesEl.textContent = minutes.toString().padStart(2, '0');
    this.secondsEl.textContent = seconds.toString().padStart(2, '0');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // Hero timer
  new CountdownTimer('hours', 'minutes', 'seconds', 24);
  // Offer timer (same countdown)
  new CountdownTimer('hours-offer', 'minutes-offer', 'seconds-offer', 24);
});
```

- [ ] **Step 2: Commit timer.js**

```bash
git add js/timer.js
git commit -m "feat: add countdown timer with localStorage persistence"
```

---

## Task 6: JavaScript - Main Interactions

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create js/main.js**

```javascript
// Main interactions
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add fade-in class to sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // CTA click tracking (placeholder for analytics)
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('CTA clicked:', e.target.textContent);
      // Add analytics tracking here
    });
  });

  // Mobile CTA sticky (optional)
  const handleMobileCTA = () => {
    const cta = document.querySelector('.cta-offer');
    if (window.innerWidth <= 768 && cta) {
      cta.style.position = 'fixed';
      cta.style.bottom = '0';
      cta.style.left = '0';
      cta.style.right = '0';
      cta.style.zIndex = '1000';
      cta.style.borderRadius = '0';
    }
  };

  window.addEventListener('resize', handleMobileCTA);
  handleMobileCTA();
});
```

- [ ] **Step 2: Commit main.js**

```bash
git add js/main.js
git commit -m "feat: add main interactions, FAQ accordion, and scroll animations"
```

---

## Task 7: Final Testing + Polish

**Files:**
- Modify: `index.html` (if needed)
- Modify: `css/style.css` (if needed)

- [ ] **Step 1: Test responsiveness**

Open `index.html` in browser and test:
- Desktop (1920px, 1440px)
- Tablet (768px)
- Mobile (375px)

Check:
- All sections render correctly
- Timer works
- FAQ accordion opens/closes
- CTA buttons are clickable
- Particles animate smoothly
- No horizontal scroll

- [ ] **Step 2: Performance check**

- Images: None (all CSS/JS)
- Fonts: Inter loaded from Google Fonts
- JS: Vanilla, no frameworks
- CSS: Minimal, no heavy libraries

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete landing page with dark tech theme and animations"
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | HTML Structure | index.html |
| 2 | CSS Design System | css/style.css |
| 3 | Animations | css/animations.css |
| 4 | Particles | js/particles.js |
| 5 | Timer | js/timer.js |
| 6 | Main JS | js/main.js |
| 7 | Testing | All files |

**Total estimated time:** 30-45 minutes
