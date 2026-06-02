// 3D Interactive Shield Effects
class Shield3D {
  constructor() {
    this.shield = document.querySelector('.shield-3d');
    this.container = document.querySelector('.shield-3d-container');
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.time = 0;
    this.init();
  }

  init() {
    if (!this.shield || !this.container) return;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    document.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        this.mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        this.mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    });

    this.animate();
    this.addHoverEffects();
  }

  animate() {
    this.time += 0.01;

    // Smooth interpolation
    this.targetX += (this.mouseX - this.targetX) * 0.08;
    this.targetY += (this.mouseY - this.targetY) * 0.08;

    // Float effect
    const floatY = Math.sin(this.time) * 10;
    const floatRotateX = Math.sin(this.time * 0.7) * 2;
    const floatRotateY = Math.cos(this.time * 0.5) * 2;

    // Combine mouse + float
    const rotateY = this.targetX * 15 + floatRotateY;
    const rotateX = -this.targetY * 10 + floatRotateX;

    this.shield.style.transform = `translateY(${floatY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;

    const glowIntensity = 0.6 + Math.abs(this.targetX) * 0.3 + Math.abs(this.targetY) * 0.3;
    this.container.style.filter = `drop-shadow(0 0 ${glowIntensity * 20}px rgba(0, 212, 255, ${glowIntensity}))`;

    requestAnimationFrame(() => this.animate());
  }

  addHoverEffects() {
    // CTA buttons - 3D tilt effect
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.05) rotateX(5deg)';
        button.style.boxShadow = '0 20px 60px rgba(0, 212, 255, 0.6), 0 0 30px rgba(124, 58, 237, 0.4)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
        button.style.boxShadow = '';
      });

      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        button.style.transform = `
          translateY(-5px) 
          scale(1.05) 
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
    });

    // Card tilt effect
    const cards = document.querySelectorAll('.problem-card, .benefit-card, .testimony-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) perspective(1000px) rotateX(5deg)';
        card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `
          translateY(-10px) 
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Shield3D();
});
