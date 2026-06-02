// Countdown timer
class CountdownTimer {
  constructor(hoursElement, minutesElement, secondsElement, durationHours = 24) {
    this.hoursEl = document.getElementById(hoursElement);
    this.minutesEl = document.getElementById(minutesElement);
    this.secondsEl = document.getElementById(secondsElement);
    this.duration = durationHours * 60 * 60 * 1000;
    this.endTime = this.getEndTime();
    if (!this.hoursEl || !this.minutesEl || !this.secondsEl) return;
    this.init();
  }

  getEndTime() {
    const stored = localStorage.getItem('timerEndTime');
    if (stored && parseInt(stored, 10) > Date.now()) {
      return parseInt(stored, 10);
    }
    const end = Date.now() + this.duration;
    localStorage.setItem('timerEndTime', end.toString());
    return end;
  }

  init() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  destroy() {
    clearInterval(this.intervalId);
  }

  update() {
    const now = Date.now();
    const diff = this.endTime - now;

    if (diff <= 0) {
      this.hoursEl.textContent = '00';
      this.minutesEl.textContent = '00';
      this.secondsEl.textContent = '00';
      clearInterval(this.intervalId);
      return;
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
  new CountdownTimer('hours', 'minutes', 'seconds', 24);
  new CountdownTimer('hours-offer', 'minutes-offer', 'seconds-offer', 24);
});
