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
      
      // Update aria-expanded
      const expanded = !isActive;
      button.setAttribute('aria-expanded', expanded);
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
    if (!cta) return;

    if (window.innerWidth <= 768) {
      cta.style.position = 'fixed';
      cta.style.bottom = '0';
      cta.style.left = '0';
      cta.style.right = '0';
      cta.style.zIndex = '1000';
      cta.style.borderRadius = '0';
    } else {
      cta.style.position = '';
      cta.style.bottom = '';
      cta.style.left = '';
      cta.style.right = '';
      cta.style.zIndex = '';
      cta.style.borderRadius = '';
    }
  };

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleMobileCTA, 100);
  });
  handleMobileCTA();
});
