// Particle animation for hero section
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;
    this.resizeTimeout = null;
    this.boundHandlers = {};
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
    const count = Math.min(100, Math.floor((this.canvas.width * this.canvas.height) / 12000));
    this.particles = [];
    
    for (let i = 0; i < count; i++) {
      const colorRand = Math.random();
      let color;
      if (colorRand > 0.7) {
        color = '#fbbf24'; // Gold for premium feel
      } else if (colorRand > 0.4) {
        color = '#00d4ff'; // Neon blue
      } else {
        color = '#7c3aed'; // Purple
      }

      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        color: color,
        pulse: Math.random() * Math.PI * 2 // For pulsing effect
      });
    }
  }

  debounce(fn, delay) {
    return (...args) => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => fn(...args), delay);
    };
  }

  bindEvents() {
    this.boundHandlers.resize = this.debounce(() => {
      this.resize();
      this.createParticles();
    }, 300);

    this.boundHandlers.mousemove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    this.boundHandlers.mouseleave = () => {
      this.mouse.x = null;
      this.mouse.y = null;
    };

    window.addEventListener('resize', this.boundHandlers.resize);
    this.canvas.addEventListener('mousemove', this.boundHandlers.mousemove);
    this.canvas.addEventListener('mouseleave', this.boundHandlers.mouseleave);
  }

  destroy() {
    cancelAnimationFrame(this.animationId);
    clearTimeout(this.resizeTimeout);
    window.removeEventListener('resize', this.boundHandlers.resize);
    this.canvas.removeEventListener('mousemove', this.boundHandlers.mousemove);
    this.canvas.removeEventListener('mouseleave', this.boundHandlers.mouseleave);
  }

  drawParticle(particle) {
    // Update pulse
    particle.pulse += 0.02;
    const pulseScale = 1 + Math.sin(particle.pulse) * 0.3;

    // Convert hex to rgba for glow
    const r = parseInt(particle.color.slice(1, 3), 16);
    const g = parseInt(particle.color.slice(3, 5), 16);
    const b = parseInt(particle.color.slice(5, 7), 16);

    // Draw glow
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius * pulseScale * 2, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.2)`;
    this.ctx.fill();

    // Draw particle
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius * pulseScale, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
  }

  drawConnections() {
    // Get shield position for connection enhancement
    const shield = document.querySelector('.shield-3d-container');
    let shieldRect = null;
    if (shield) {
      shieldRect = shield.getBoundingClientRect();
    }

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

        // Connect particles to shield if nearby
        if (shieldRect) {
          const shieldCenterX = shieldRect.left + shieldRect.width / 2;
          const shieldCenterY = shieldRect.top + shieldRect.height / 2;
          const dxShield = this.particles[i].x - shieldCenterX;
          const dyShield = this.particles[i].y - shieldCenterY;
          const distanceShield = Math.sqrt(dxShield * dxShield + dyShield * dyShield);

          if (distanceShield < 200) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(shieldCenterX, shieldCenterY);
            const opacity = 0.15 * (1 - distanceShield / 200);
            this.ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
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
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.particles');
  if (canvas) {
    new ParticleSystem(canvas);
  }
});
